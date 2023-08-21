import { useState } from 'react';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // setIsOpen(!isOpen); not working if the user spam click
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (nextOption) => {
    setIsOpen(false);
    console.log(nextOption);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
