import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { decrementProductCount } from '../redux/actions';
import { toast } from 'react-toastify';

const ItemModal = ({ isOpen, onClose, addProduct }) => {
  const dispatch = useDispatch();
  console.log("products in modal", addProduct);

  const handleBuyClick = () => {
    console.log("addProduct.category", addProduct.category);
    if (addProduct && addProduct.id && addProduct.category) {
      if (addProduct.count > 0) {
        dispatch(decrementProductCount({ id: addProduct.id, category: addProduct.category }));
        toast.success('Booking successful!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      } else {
        toast.error('Product is out of stock.', { 
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      onClose();
    } else {
      console.error("Invalid addProduct data");
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-content bg-white w-1/4 p-4 rounded shadow-lg text-center relative flex flex-col">
        <div className='w-8 h-8 rounded-full text-center bg-blue-400 absolute top-2 right-2'>
          <button
            onClick={onClose}
            className="text-white font-bold w-full h-full flex items-center justify-center focus:outline-none"
          >
            <CloseIcon />
          </button>
        </div>
        <h3 className='font-bold text-2xl pb-2'>{addProduct.name}</h3>
        <p>{addProduct.desc}</p>
        <p>Price: ${addProduct.price}/-</p>
        <p>Available: {addProduct.count}</p>
        <button
          onClick={() => {
            onClose();
            handleBuyClick();
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 my-4 px-4 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  ) : null;

};

export default ItemModal;
