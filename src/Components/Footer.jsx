import React from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import YouTubeIcon from '../assets/images/youtube.svg';
import FacebookIcon from '../assets/images/facebook.svg';

const Footer = () => {



  return (
    <>
      <div className='bg-[#7DA148] text-center p-4 text-white'> {/* Added padding */}
        <h1 className=' text-3xl font-bold'>DUSUN KARANGLOR</h1>
        <p className='mt-2 font-light text-xs'>Karanglor adalah dusun yang tenang dan harmonis di pesisir Gunung Kidul. Terkenal karena kerukunan warganya, semangat gotong royong yang kuat, dan suasana pedesaan yang penuh kedamaian. Datanglah dan rasakan kehangatan kerukunan yang murni di setiap sudutnya.</p>
        <div className='flex justify-center m-4'>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={YouTubeIcon} alt="YouTube" className="w-8 h-8 mx-2" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" className="w-8 h-8 mx-2" />
            </a>
          </div>
        <p className='mt-4 font-med text-xs'>Karang Lor, Jepitu, Kec. Girisubo, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta.</p>
        <p className='my-6 font-med text-xs'> ©︎ 2024 Dusun Karanglor. All Rights Reserved</p>
       
        </div>
    </>
  );
};

export default Footer;
