// pages/index.js veya istediğiniz sayfanın dosyası

"use client"

import React,{ useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [phoneNumber] = useState('+994773109988');

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div className='font-custom hover:bg-green-500 hover:text-white hover:shadow-2xl hover:scale-110 transition-all duration-500 z-50'
      style={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70px',
        height: '70px',
        position: 'fixed',
        bottom: 30,
        right: 30,
        background: 'indigo',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      }}
      onClick={openWhatsApp}
    >
      <FaWhatsapp size={70} />
    </div>
  );
};


export default WhatsAppButton;