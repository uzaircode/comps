import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import { useState } from 'react';

function Accordion({ items }) {
  //-1 is all accordion is closed when first render
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer"
          onClick={() => setExpandedIndex(index)}
        >
          {item.label}
          {icon}
        </div>
        <div>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });

  return <div className="border-x border-t rounded p-8">{renderedItems}</div>;
}

export default Accordion;
