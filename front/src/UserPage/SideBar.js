import React from 'react';

const EshopSideBar = () => {
    return (
        <div className="h-screen flex ">
            <div className="rounded-lg bg-Maverick w-64 p-6">
                <div className="mb-8">
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
                            <button className="w-full text-left  hover:text-white">
                                Skincare
                            </button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full text-left  hover:text-white">
                                Makeup
                            </button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full text-left  hover:text-white">
                                Haircare
                            </button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full text-left  hover:text-white">
                                Fragrance
                            </button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full text-left  hover:text-white">
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