
import React, { useEffect, useState } from 'react';

import Image from "next/image";
import { members } from '../data';

import BasicLogo from "../assets/png-colorful.png";
import { useLocation, useNavigate } from 'react-router-dom';


const Home = () => {
    const [lang, setLang] = useState(true);
    const navigation = useNavigate();
    const location = useLocation();

    useEffect(() => setLang(location.pathname === "/"), [location]);

  return (
    <div className='container mx-auto max-w-md min-h-screen h-full bg-blue-900 text-white pb-10 backGround'>

        <div className='relative top-4 left-0'>

            {
                lang ? (
                    <p className='py-2 cursor-pointer'><span className='font-bold px-2 pl-4 text-green-300' onClick={() => navigation("/")}>Türkçe</span> | <span className='font-bold px-2'  onClick={() => navigation("/en")}>English</span></p>
                ) : (
                    <p className='py-2 cursor-pointer'><span className='font-bold px-2 pl-4' onClick={() => navigation("/")}>Türkçe</span> | <span className='font-bold px-2 text-green-300'  onClick={() => navigation("/en")}>English</span></p>
                )
            }
            
        </div>
        
        <div className='flex justify-end items-center pt-10 -mt-16 mr-16'>
    <Image src={BasicLogo} alt="Iztech Software Society Logo" className='h-12' />
</div>

        {
            lang ? (
                <h1 className='text-center mt-4 font-extrabold text-2xl'>Yönetim Kurulu Üyeleri</h1>
            ) : (
                <h1 className='text-center mt-4 font-extrabold text-2xl'>Society Board Members</h1>
            )
        }


        <div className='grid grid-cols-2 px-4 my-4'>

            {
                members.map((member, i) => (
                    <div className='cursor-pointer my-2 flex flex-col items-center' key={i} onClick={() => lang ? navigation(`/tr/${member.url}`) : navigation(`/en/${member.url}`) }>
                        <div className='flex justify-center w-5/6 rounded-xl items-center p-1 bg-orange-500'>
                        </div>
                        <div className='flex flex-col justify-center items-center z-20 mt-2'>
                            <h2 className='font-bold text-lg text-center'>{member.name + " " + member.surname}</h2>
                            <p className='font-light text-sm -mt-1.5 text-center'>{lang ? member.title.tr : member.title.en}</p>
                        </div>
                    </div>
                ))
            }
            
        </div>

        <div>
        <p className="my-6 text-white/60 text-center text-sm">Copyright 2023 © Yazılım Topluluğu</p>
        </div>
    </div>
  )
}

export default Home