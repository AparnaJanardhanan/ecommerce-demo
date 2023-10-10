import React, { useEffect, useState } from "react";
import Axios from 'axios';
import ItemCard from "./ItemCard";
import { useDispatch } from 'react-redux';
import { fetchProductsSuccess } from '../redux/actions';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const DIsplayItem = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const dispatch = useDispatch();
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [searchValue, setSearchValue] = useState(null);
    const [productData, setProductData] = useState();

    const openModal = (selected) => {
        setSelectedComponent(selected);
        console.log(selectedComponent);
    };

    const closeModal = () => {
        setSelectedComponent(null);
        setSearchValue(null);
        setSearchQuery('');
        setMinPrice('');
        setMaxPrice('');
    };

    const handleFilterChange = (filteredProducts) => {
        console.log("filteredProducts", filteredProducts);
        setSearchValue(filteredProducts);
    };

    const handleSearch = () => {
        const filteredProducts = Object.keys(productData)
            .flatMap(category =>
                productData[category].filter(product =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.desc.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        handleFilterChange(filteredProducts);
    };

    const handleFilter = () => {
        const filteredProducts = Object.keys(productData)
            .flatMap(category =>
                productData[category].filter(product => {
                    const price = parseFloat(product.price);
                    return (
                        (!minPrice || price >= minPrice) &&
                        (!maxPrice || price <= maxPrice)
                    );
                })
            );
        handleFilterChange(filteredProducts);
    };

    useEffect(() => {
        Axios.get('http://localhost:3000/api/product-list')
            .then((response) => {
                const productDataSet = response.data;
                console.log("productDataSet", productDataSet);
                setProductData(productDataSet);
                dispatch(fetchProductsSuccess(productDataSet));
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
            });
    }, [dispatch])

    return (
        <>
            <div className='bg-white px-2 py-2 flex justify-between'>
                <div className='h-7 pl-2 border-b'>
                    <input
                        type="text"
                        className='h-7 bg-transparent'
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}><SearchIcon /></button>
                </div>
                <div className="border-b pr-2">
                    {/* <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="sofa">Sofa</option>
                        <option value="bed">Bed</option>
                    </select> */}
                    <input
                        type="number"
                        placeholder="Min Price"
                        className="w-24 px-2 bg-transparent"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        className="w-24 px-2 bg-transparent"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <button onClick={handleFilter}><FilterAltIcon /></button>
                </div>
            </div>

            {selectedComponent || searchValue ? (
                <ItemCard selectedComponent={selectedComponent} closeSelected={closeModal} searchValue={searchValue} />
            ) : (
                <div className="px-32 py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 rounded-full">
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-52 h-52 mb-3 rounded-full shadow-lg border border-transparent hover:border-amber-400 transition-transform hover:scale-105" src="https://i.pinimg.com/236x/d8/b2/97/d8b297a5e0448bb38ef371ff77c48acd.jpg" alt="index1" onClick={() => openModal("bed")} />
                            <h6>Bed</h6>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-52 h-52 mb-3 rounded-full shadow-lg border border-transparent hover:border-amber-400 transition-transform hover:scale-105" src="https://i.pinimg.com/564x/43/98/ce/4398ce516c8bcd7cf71131833b8c880a.jpg" alt="index2" onClick={() => openModal("sofa")} />
                            <h6>Sofa</h6>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-52 h-52 mb-3 rounded-full shadow-lg border border-transparent hover:border-amber-400 transition-transform hover:scale-105" src="https://i.pinimg.com/236x/c5/27/3c/c5273cab7d079fab5e586f2be8176aca.jpg" alt="index3" onClick={() => openModal("dining_table")} />
                            <h6>Dining Table</h6>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-52 h-52 mb-3 rounded-full shadow-lg border border-transparent hover:border-amber-400 transition-transform hover:scale-105" src="https://i.pinimg.com/564x/e0/3b/0d/e03b0d393c13757abf70996de8e4697d.jpg" alt="index4" onClick={() => openModal("pendant_lights")} />
                            <h6>Pendant Lights</h6>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-52 h-52 mb-3 rounded-full shadow-lg border border-transparent hover:border-amber-400 transition-transform hover:scale-105" src="https://i.pinimg.com/564x/d6/a2/eb/d6a2eb498cf3fc814ad6f25b3b47701e.jpg" alt="index5" onClick={() => openModal("curtains")} />
                            <h6>Curtains</h6>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-52 h-52 mb-3 rounded-full shadow-lg border border-transparent hover:border-amber-400 transition-transform hover:scale-105" src="https://i.pinimg.com/564x/b2/34/d0/b234d007b0402b391f4ebca91ae34f67.jpg" alt="index6" onClick={() => openModal("bean_bag")} />
                            <h6>Bean bag</h6>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-52 h-52 mb-3 rounded-full shadow-lg border border-transparent hover:border-amber-400 transition-transform hover:scale-105" src="https://i.pinimg.com/564x/82/91/6f/82916f05b1a37fb060835bfc63b3f9be.jpg" alt="index7" onClick={() => openModal("swings")} />
                            <h6>Swings</h6>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-52 h-52 mb-3 rounded-full shadow-lg border border-transparent hover:border-amber-400 transition-transform hover:scale-105" src="https://i.pinimg.com/564x/11/5e/9d/115e9d8a04f958e884cd289c46da8757.jpg" alt="index8" onClick={() => openModal("kitchen_set")} />
                            <h6>Kitchen set</h6>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DIsplayItem;