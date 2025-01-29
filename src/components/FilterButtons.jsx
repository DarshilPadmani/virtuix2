import React from "react";

const FilterButton = ({ category, isActive, onClick }) => {
    return (
        <button
            className={`px-4 py-2 rounded-lg font-medium border transition-all duration-200 
      ${isActive
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                }`}
            onClick={() => onClick(category)}
        >
            {category}
        </button>
    );
};

export default FilterButton;
