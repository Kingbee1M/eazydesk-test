import React, { useRef } from 'react';
import { IoClose } from "react-icons/io5";
import { HiOutlineCloudUpload } from "react-icons/hi";

interface FileSelectProps {
  selectedFiles: File[];
  onFilesChange: (files: File[]) => void;
  placeholder?: string;
}

const FileMultiSelect = ({ selectedFiles, onFilesChange, placeholder = "Choose files..." }: FileSelectProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      // Append new files to existing ones (like a multi-select)
      onFilesChange([...selectedFiles, ...newFiles]);
      // Reset input value so the same file can be uploaded again if deleted
      e.target.value = "";
    }
  };

  const removeFile = (e: React.MouseEvent, indexToRemove: number) => {
    e.stopPropagation(); // Prevent opening the file dialog
    onFilesChange(selectedFiles.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="multi-select-container">
      {/* Hidden Native Input */}
      <input 
        type="file" 
        multiple 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
      />

      {/* Styled Display - Matches your CustomMultiSelect */}
      <div 
        className="input-display" 
        onClick={handleContainerClick}
        style={{ cursor: 'pointer', minHeight: '42px' }}
      >
        <div className="pill-container">
          {selectedFiles.length === 0 && (
            <span className="placeholder-text">{placeholder}</span>
          )}
          
          {selectedFiles.map((file, index) => (
            <div key={`${file.name}-${index}`} className="pill">
              <span style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {file.name}
              </span>
              <button className="remove-btn" onClick={(e) => removeFile(e, index)}>
                <IoClose size={14} />
              </button>
            </div>
          ))}
        </div>
        
        {/* Paperclip or Upload Icon instead of Chevron */}
        <HiOutlineCloudUpload className="chevron" size={20} style={{ color: '#94a3b8' }} />
      </div>
    </div>
  );
};

export default FileMultiSelect;