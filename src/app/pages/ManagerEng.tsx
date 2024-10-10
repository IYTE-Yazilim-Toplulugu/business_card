"use client"
//src/pages/ManagerEng.jsx

import Image, { StaticImageData } from "next/image";
import React from 'react';

import LogoCanvas from "../components/LogoCanvas";

import CircleLogo from "../assets/circle.png";

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';

interface ManagerEngProps {
  name: string;
  surname: string;
  title: string;
  insta: string;
  github: string;
  linkedin: string;
  school: string;
  department: string;
  grade: string;
  email: string[];
  phone: string;
  coolImage: StaticImageData;
}

const ManagerEng: React.FC<ManagerEngProps> = ({ name, surname, title, insta, github, linkedin, school, department, grade, email, phone, coolImage }) => {
  return (
    <div className="container mx-auto max-w-md min-h-screen h-full bg-blue-900 text-white pb-10 backGround">

      <div className="absolute z-0">
        <Image className="relative z-10  pointer-events-none w-48 mt-10 left-10 rounded-3xl border-orange-600 border-4" src={coolImage} alt={name} />
      </div>

      <div className="flex flex-col justify-end items-end z-20 px-6 ">
        <div className="w-32 mt-1">
          <LogoCanvas />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center z-20 px-6">

        <div className="flex flex-col items-center justify-center mb-10 z-20 mt-10">
          <p className="font-bold text-sm">Phone Number:</p>
          <p className="font-extralight text-xl">{phone}</p>
        </div>

        <div className="flex flex-col items-center justify-center mb-10 z-20">
          <p className="font-bold text-sm">Emails:</p>
          {
            email.map((e, i) => {
              return (
                <p key={i} className="font-extralight text-lg">{e}</p>
              );
            })
          }
        </div>

        <div className="flex flex-col items-center justify-center mb-10 z-20">
          <p className="font-bold text-sm">Department / Grade:</p>
          <p className="font-extralight text-sm">{school}</p>
          <p className="font-extralight text-sm">{department}</p>
          <p className="font-extralight text-sm">{grade}</p>
        </div>

        <div className="flex flex-col items-center justify-center mb-10 z-20">
          <h1 className="font-extrabold text-3xl">{name + " " + surname}</h1>
          <p className="mt-1 text-sm font-light">{title}</p>
          <div className="flex justify-center items-center mt-2">
            <a href={insta} className="ml-1"><InstagramIcon /></a>
            <a href={linkedin} className="ml-1"><LinkedInIcon /></a>
            <a href={github} className="ml-1"><GitHubIcon /></a>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center px-4 mt-8 z-20">
        <Image className="w-24" src={CircleLogo} alt='iztech software society' />

        <div className='z-20'>
          <h2 className="font-extrabold text-xl">Iztech Software Society</h2>
          <p className="text-sm font-thin -mt-1">İzmir Institute of Technology</p>
          <p className="text-sm font-thin -mt-1.5">Department of Computer Engineering</p>

          <p className="font-bold text-lg mt-3">yazilim@iyte.edu.tr</p>

          <div className="flex justify-start mt-2">
            <a href='https://www.instagram.com/iyte_yazilim/' className="mr-2.5"><InstagramIcon /></a>
            <a href='https://www.linkedin.com/company/iyteyazilim/' className="mr-2.5"><LinkedInIcon /></a>
            <a href='https://www.facebook.com/IYTESS' className="mr-2.5"><FacebookIcon /></a>
            <a href='https://github.com/IYTE-Yazilim-Toplulugu' className="mr-2.5"><GitHubIcon /></a>
            <a href='https://www.reddit.com/r/IztechSoftwareSociety/' className="mr-2.5"><RedditIcon /></a>
            <a href='https://www.youtube.com/@iyteyazilimtoplulugu' className="mr-2.5"><YouTubeIcon /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerEng