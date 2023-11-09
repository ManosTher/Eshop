import React from 'react';

const EshopSideBar = () => {
    return (
        <div className="flex ">
            <div className="rounded-lg bg-Romantic w-64 px-6 text-TobaccoBrown border-2 border-TobaccoBrown">
                <div className="mb-8 my-8 border-2 rounded-lg">
                    <input
                        className="w-full p-2 rounded"
                        type="text"
                        placeholder="Search..."
                    />
                </div>
                <div>
                    <p className="text-sm uppercase font-semibold mb-4">Categories</p>
                    <ul>
                        <li className="mb-2">
                            <button className="w-full text-left pl-2 hover:text-white border-2 border-TobaccoBrown rounded-lg">
                                Skincare
                            </button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full text-left pl-2 hover:text-white border-2 border-TobaccoBrown rounded-lg">
                                Makeup
                            </button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full text-left pl-2 hover:text-white border-2 border-TobaccoBrown rounded-lg">
                                Haircare
                            </button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full text-left pl-2 hover:text-white border-2 border-TobaccoBrown rounded-lg">
                                Fragrance
                            </button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full text-left pl-2 hover:text-white border-2 border-TobaccoBrown rounded-lg">
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