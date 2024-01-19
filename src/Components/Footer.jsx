import React from 'react';
import { Link } from 'react-router-dom';
import idh from '../../src/images/DH.png';
import  imageFacebook from '../../src/images/ico-facebook.png';
import imageInstagram from '../../src/images/ico-instagram.png';
import imageTiktok from '../../src/images/ico-tiktok.png';
import imageWhatsap from '../../src/images/ico-whatsapp.png';

const Footer = () => {
  return (
    <div>
      <div className='lineaFooter'>Fronted3-React</div>
      <footer className='footer'>
       
        <img className='digital' src={idh} alt="facebook" />
        <Link to='/'><img className='facebook' src={imageFacebook} alt="facebook" /></Link>
        <Link to='/'><img className='instagram' src={imageInstagram} alt="facebook" /></Link>
        <Link to='/'> <img className='tiktok' src={imageTiktok} alt="facebook" /></Link>
        <Link to='/'> <img className='whatsap' src={imageWhatsap} alt="facebook" /></Link>
        
    </footer>
    </div>
  )
}

export default Footer
