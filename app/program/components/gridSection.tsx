import React from "react";

interface GridSectionProps {
  items: string[];
}

const GridSection: React.FC<GridSectionProps> = ({ items }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
      {items.map((item, index) => (
        <div key={index} className="border-2 border-blue-500 rounded-md p-4">
          {item}
        </div>
      ))}
    </section>
  );
};

export default GridSection;
