import React, { useState, useEffect, useRef } from "react";

interface Option {
  value: string;
  text: string;
}

interface SingleSelectProps {
  options: Option[];
  label?: string;
  placeholder?: string;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  options: initialOptions,
  label = "เลือกหมวดหมู่",
  placeholder = "Select an option",
}) => {
  const [options, setOptions] = useState<Option[]>(initialOptions);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setShowDropdown(false); // ปิด Dropdown หลังเลือกตัวเลือก
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-black dark:text-white">
          {label}
        </label>
      )}
      <div
        className="relative flex items-center rounded border border-gray-300 bg-white p-2 dark:border-gray-600 dark:bg-gray-800"
        onClick={toggleDropdown}
      >
        <span className="flex-1 text-sm text-gray-700 dark:text-gray-300">
          {selectedIndex !== null ? options[selectedIndex].text : placeholder}
        </span>
        <div className="ml-auto cursor-pointer text-gray-500">▼</div>
      </div>
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute z-10 mt-1 max-h-40 w-full overflow-y-auto rounded border border-gray-300 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800"
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                selectedIndex === index ? "bg-gray-100" : ""
              }`}
              onClick={() => handleSelect(index)}
            >
              {option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleSelect;
