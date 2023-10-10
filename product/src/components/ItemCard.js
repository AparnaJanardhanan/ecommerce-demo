import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import ItemModal from "./ItemModal";

const ItemCard = ({ selectedComponent, closeSelected, searchValue }) => {
    const [filteredData, setFilteredData] = useState();
    const products = useSelector((state) => state.product.products);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addItem, setAddItem] = useState();

    const openModal = (item) => {
        setIsModalOpen(true);
        setAddItem(item);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    console.log("products", searchValue && searchValue, filteredData && filteredData, selectedComponent);

    useEffect(() => {
        if (selectedComponent === 'sofa') {
            setFilteredData(products.sofa);
        } else if (selectedComponent === 'bed') {
            setFilteredData(products.bed);
        } else if (selectedComponent === 'dining_table') {
            setFilteredData(products.dining_table);
        } else if (selectedComponent === 'pendant_lights') {
            setFilteredData(products.pendant_lights);
        } else if (selectedComponent === 'curtains') {
            setFilteredData(products.curtains);
        } else if (selectedComponent === 'bean_bag') {
            setFilteredData(products.bean_bag);
        } else if (selectedComponent === 'swings') {
            setFilteredData(products.swings);
        } else {
            setFilteredData(products.kitchen_set);
        }
        console.log("filteredData", filteredData);
    }, [selectedComponent, products, filteredData]);

    const handleBackClick = () => {
        closeSelected();
    };

    return (
        <>
            <div className="flex justify-between px-32 py-8 z-0">
                <h1 className="uppercase font-extrabold text-2xl">{selectedComponent}</h1>
                <button className="w-24 bg-gray-100 text-gray-900 text-lg uppercase font-semibold tracking-wide rounded-full shadow-md transition-transform transform hover:scale-105" onClick={handleBackClick}>Back</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 rounded-full px-32 pb-4">
                {searchValue ? (
                    searchValue && searchValue.length !== 0 ? (searchValue.map((item) => (
                        <div className="w-60 h-min p-2 bg-white rounded-lg shadow-2xl" key={item.imageUrl}>
                            <div className="img_container p-2 bg-bgGray rounded-lg">
                                <img src={item.imageUrl} alt="description" />
                            </div>
                            <div className="product_info">
                                <h5 className="text-xl font-semibold">{item.name}</h5>
                                <p className="text-slate-400">{item.desc}</p>
                                <div className="flex justify-between">
                                    <h6 className="pt-4 font-bold text-lg">${item.price}</h6>
                                    <button className="w-8 h-8 mt-4 text-2xl bg-blue-400 text-white rounded-full bottom-3" onClick={() => openModal(item)}>+</button>
                                </div>
                            </div>
                        </div>))
                    ) : (
                        <div className="h-screen">
                            <h1 className="font-bold text-2xl text-left">No matching data</h1>
                        </div>
                    )
                ) : (
                    filteredData && filteredData.map((item) => (
                        <div className="w-60 h-min p-2 bg-white rounded-lg shadow-2xl" key={item.imageUrl}>
                            <div className="img_container p-2 bg-bgGray rounded-lg">
                                <img src={item.imageUrl} alt="description" />
                            </div>
                            <div className="product_info">
                                <h5 className="text-xl font-semibold">{item.name}</h5>
                                <p className="text-slate-400">{item.desc}</p>
                                <div className="flex justify-between">
                                    <h6 className="pt-4 font-bold text-lg">${item.price}</h6>
                                    <button className="w-8 h-8 mt-4 text-2xl bg-blue-400 text-white rounded-full bottom-3" onClick={() => openModal(item)}>+</button>
                                </div>
                            </div>
                        </div>
                    )))}
            </div>
            <ItemModal isOpen={isModalOpen} onClose={closeModal} addProduct={addItem} />
        </>
    )
}

export default ItemCard;