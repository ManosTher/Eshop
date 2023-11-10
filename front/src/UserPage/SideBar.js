import React,{useState} from 'react';

const EshopSideBar = ({ onSelectCategory, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
      }
    
    const handleCategoryClick = (category) => {
      onSelectCategory(category);
    }
    return (
        <div className="h-[45%]">
            <div className="h-full rounded-lg bg-Romantic w-64 px-6 text-TobaccoBrown border-2 border-TobaccoBrown">
                <div className="mb-8 my-8 border-2 rounded-lg">
                    <input
                        className="w-full p-2 rounded"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div>
                    <p className="text-sm uppercase font-semibold mb-4">Categories</p>
                    <ul>
                        <li className="mb-2">
                            <button 
                            onClick={() => handleCategoryClick("Skincare")}
                            className="w-full text-left pl-2 hover:text-white hover:bg-TobaccoBrown border-2 border-TobaccoBrown rounded-lg">
                                Skincare
                            </button>
                        </li>
                        <li className="mb-2">
                            <button 
                            onClick={() => handleCategoryClick("Makeup")}
                            className="w-full text-left pl-2 hover:text-white hover:bg-TobaccoBrown border-2 border-TobaccoBrown rounded-lg">
                                Makeup
                            </button>
                        </li>
                        <li className="mb-2">
                            <button 
                            onClick={() => handleCategoryClick("Haircare")}
                            className="w-full text-left pl-2 hover:text-white border-2 hover:bg-TobaccoBrown border-TobaccoBrown rounded-lg">
                                Haircare
                            </button>
                        </li>
                        <li className="mb-2">
                            <button 
                            onClick={() => handleCategoryClick("Fragrance")}
                            className="w-full text-left pl-2 hover:text-white border-2 hover:bg-TobaccoBrown border-TobaccoBrown rounded-lg">
                                Fragrance
                            </button>
                        </li>
                        <li className="mb-2">
                            <button 
                            onClick={() => handleCategoryClick("Body Care")}
                            className="w-full text-left pl-2 hover:text-white border-2 hover:bg-TobaccoBrown border-TobaccoBrown rounded-lg">
                                Body Care
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default EshopSideBar;