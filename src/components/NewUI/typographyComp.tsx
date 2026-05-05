import React, { useRef, useState, useEffect } from 'react';
import { 
  LuBold, LuItalic, LuUnderline, LuAlignLeft, 
  LuAlignCenter, LuAlignRight, LuList, LuListOrdered, LuQuote 
} from "react-icons/lu";

interface TypographyEditorProps {
  value: string;
  onChange: (html: string) => void;
}

const TypographyEditor = ({ value, onChange }: TypographyEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [fontColor, setFontColor] = useState("#000000");

  // Sync internal content with value prop ONLY if it's different 
  // (prevents cursor jumping while typing)
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const exec = (command: string, val: string = "") => {
    document.execCommand(command, false, val);
    editorRef.current?.focus();
    handleInput(); // Trigger change after command
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const fontFamilies = ["Arial", "Verdana", "Times New Roman", "Georgia", "Courier New"];
  const fontSizes = [
    { label: "12px", value: "1" },
    { label: "14px", value: "2" },
    { label: "16px", value: "3" },
    { label: "18px", value: "4" },
    { label: "24px", value: "5" },
    { label: "32px", value: "6" },
    { label: "48px", value: "7" },
  ];

  return (
    <div className="editor-wrapper">
      <div className="toolbar">
        {/* Alignment */}
        <button type="button" onClick={() => exec("justifyLeft")}><LuAlignLeft /></button>
        <button type="button" onClick={() => exec("justifyCenter")}><LuAlignCenter /></button>
        <button type="button" onClick={() => exec("justifyRight")}><LuAlignRight /></button>

        <div className="divider" />

        {/* Font Family */}
        <select onChange={(e) => exec("fontName", e.target.value)} className="toolbar-select">
          {fontFamilies.map(font => <option key={font} value={font}>{font}</option>)}
        </select>


        <div className="divider" />

        {/* Text Styles */}
        <button type="button" onClick={() => exec("bold")}><LuBold /></button>
        <button type="button" onClick={() => exec("italic")}><LuItalic /></button>
        <button type="button" onClick={() => exec("underline")}><LuUnderline /></button>

        <div className="divider" />

        {/* Lists & Quotes */}
        <button type="button" onClick={() => exec("insertUnorderedList")}><LuList /></button>
        <button type="button" onClick={() => exec("insertOrderedList")}><LuListOrdered /></button>
        <button 
          type="button" 
          onClick={() => {
            const selection = window.getSelection();
            const parent = selection?.anchorNode?.parentElement;
            exec("formatBlock", parent?.closest('blockquote') ? "div" : "blockquote");
          }} 
        >
          <LuQuote />
        </button>

        <div className="divider" />

        {/* Color Picker */}
        <div className="color-picker-wrapper">
          <label htmlFor="colorInput" className="color-label">
            <span style={{ borderBottom: `3px solid ${fontColor}` }}>A</span>
          </label>
          <input 
            id="colorInput"
            type="color" 
            value={fontColor}
            onChange={(e) => {
              setFontColor(e.target.value);
              exec("foreColor", e.target.value);
            }} 
          />
        </div>

        {/* Font Size */}
        <select onChange={(e) => exec("fontSize", e.target.value)} className="toolbar-select" defaultValue="3">
          {fontSizes.map(size => <option key={size.value} value={size.value}>{size.label}</option>)}
        </select>
      </div>

      <div 
        className="editable-content"
        contentEditable
        ref={editorRef}
        onInput={handleInput}
        onBlur={handleInput}
      />
    </div>
  );
};

export default TypographyEditor;