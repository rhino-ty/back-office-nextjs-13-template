'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { closeModal, openModal, setInputValue } from '../../store/modal';

export default function Popup() {
  const dispatch = useDispatch();
  const showModal = useSelector((state: RootState) => state.showModal);
  const inputValue = useSelector((state: RootState) => state.inputValue);

  const openModalHandler = () => {
    dispatch(openModal());
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <button
        onClick={openModalHandler}
        className='text-xl w-40 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center 
                   dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
      >
        Modal
      </button>
      {showModal && (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-80 my-6 mx-auto max-w-3xl dark:bg-gray-800'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none dark:border-gray-600'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t dark:border-gray-600'>
                  <h3 className='text-3xl font-semibold dark:text-white'>
                    Modal Title
                  </h3>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <p className='my-4 text-slate-500 text-lg leading-relaxed dark:text-gray-300'>
                    HI! I&apos;m modal
                  </p>
                  <input
                    type='text'
                    name='text'
                    id='text'
                    value={inputValue}
                    onChange={inputChangeHandler}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-window-bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  />
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b dark:border-gray-600'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={closeModalHandler}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black dark:bg-gray-200'></div>
        </>
      )}
    </div>
  );
}
