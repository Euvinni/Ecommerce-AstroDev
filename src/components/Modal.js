import React, { Children, useState } from 'react'





const Modal = ({ isOpen, children, setModalOpen }) => {

    

    if (isOpen) {
      return (
        <div className='fixed inset-0 flex items-center justify-center z-10 bg-colorlogo text-black   transform scale-50 mx-auto mt-8 '>
            <p>SOMOS UMA LOJA CONCEITUDA NO RAMO DE KDASKDAKSD</p>
          <div className=' p-4  rounded-10 text-white '>
            {children}
          </div>
          <button className=' cursor-pointer text-black' onClick={setModalOpen}><ion-icon name="close-outline">Fechar</ion-icon></button>
        </div>
      );
    }
  };
  
  export default Modal;