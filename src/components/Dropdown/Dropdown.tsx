import React, { useState } from "react";
import "./Dropdown.scss";

interface DropdownProps {
  options: { name: string; age: number }[];
}

const Dropdown: React.FC<DropdownProps> = ({ options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {isOpen ? "Dölj alternativ" : "Visa alternativ"}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.length > 0 ? (
            options.map((option, index) => (
              <li key={index} className="dropdown-item">
                {option.name} - {option.age} år
              </li>
            ))
          ) : (
            <li className="dropdown-item">Inga alternativ tillgängliga</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
