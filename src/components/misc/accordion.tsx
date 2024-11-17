import { useState } from "react";

function Accordion({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b border-gray-700">
      <h2
        onClick={toggleAccordion}
        className="text-xl font-bold text-right kode_mono_font cursor-pointer hover:text-yellow-500 transition-colors py-4"
      >
        {title}
      </h2>
      {isOpen && (
        <div className="text-gray-400 font-medium kode_mono_font text-sm leading-relaxed px-4 pb-4">
          {description}
        </div>
      )}
    </div>
  );
}

export default Accordion;
