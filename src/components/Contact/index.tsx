"use client"
import React, { useState } from 'react';
import Layout from '../Layout';
import Image from 'next/image';
import copyIcon from '../../../public/copy-icon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
  const [email, setEmail] = useState<string>('bytebusters@gmail.com');
  const [isCopied, setIsCopied] = useState<boolean | undefined>(false);

  const notify = () => toast.info('Email copied to clipboard', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });;

  const handleCopyClick = () => {
    notify();
    navigator.clipboard.writeText(email);
    setIsCopied(true);

    // Reset the copied state after 3 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className='flex justify-center gap-x-12'>
        <a id="contact" className='border-2 rounded-xl p-4 text-xl border-black transition duration-500  hover:border-white hover:text-white' href={`mailto:${email}`}>{email}</a>

      <button onClick={handleCopyClick} disabled={isCopied}>
        <div className='w-10'>
          <Image src={copyIcon} alt='Copy Icon' width={40} height={40}/>
        </div>
       <ToastContainer />
      </button>
    </div>
  );
};

export default Contact;