import React, { useState, useRef, useEffect } from 'react';
import { IoClose } from "react-icons/io5"; 
import { HiChevronDown } from "react-icons/hi";

interface MultiSelectProps {
  options: string[];
  placeholder?: string;
  multiple?: boolean;
  value?: string[]; // The current state from parent
  onChange?: (selected: string[]) => void;
  id?: string
}

const CustomMultiSelect = ({ 
  options, 
  placeholder = "Select options...", 
  multiple = true, 
  value = [], // Default to empty array
  onChange 
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // Initialize internal state with the value prop
  const [selectedItems, setSelectedItems] = useState<string[]>(value);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync internal state with the value prop whenever it changes
  useEffect(() => {
    setSelectedItems(value);
  }, [value]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (item: string) => {
    let updated: string[];

    if (multiple) {
      if (selectedItems.includes(item)) {
        updated = selectedItems.filter(i => i !== item);
      } else {
        updated = [...selectedItems, item];
      }
    } else {
      updated = [item]; // Simply set the single value
      setIsOpen(false);
    }

    // We don't just set local state; we tell the parent to update
    if (onChange) onChange(updated);
  };

  const removePill = (e: React.MouseEvent, item: string) => {
    e.stopPropagation();
    const updated = selectedItems.filter(i => i !== item);
    if (onChange) onChange(updated);
  };

  return (
    <div className="multi-select-container" ref={containerRef}>
      <div className={`input-display ${isOpen ? 'focused' : ''}`} onClick={() => setIsOpen(!isOpen)}>
  <div className="pill-container">
    {selectedItems.length === 0 && <span className="placeholder-text">{placeholder}</span>}
    
    {/* CHECK FOR MULTIPLE MODE */}
    {multiple ? (
      // MULTI-SELECT: Show Pills with "X"
      selectedItems.map(item => (
        <div key={item} className="pill">
          {item}
          <button className="remove-btn" onClick={(e) => removePill(e, item)}>
            <IoClose size={14} />
          </button>
        </div>
      ))
    ) : (
      // SINGLE-SELECT: Show plain text without the border or "X"
      selectedItems.length > 0 && (
        <span className="single-value-text">
          {selectedItems[0]}
        </span>
      )
    )}
  </div>
  <HiChevronDown className={`chevron ${isOpen ? 'rotated' : ''}`} />
</div>

      {isOpen && (
        <ul className="options-dropdown">
          {options.map(option => (
            <li 
              key={option} 
              className={`option-item ${selectedItems.includes(option) ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomMultiSelect;