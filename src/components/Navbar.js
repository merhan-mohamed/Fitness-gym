import React from 'react';
import { Stack } from '@mui/material';
import Logo from '../assets/Logo.png';
import {Link as LinkS} from 'react-scroll' ;
import {Link} from 'react-router-dom' ;


const Navbar = () => (

  <Stack  direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to='/'>
    <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
     direction="row"
     gap="40px"
     fontFamily="Alegreya"
     fontSize="24px"
     alignItems="flex-end">
      <Link to='/' className={'navitems'}>Home</Link>
      <LinkS to='exercises' className={'navitems'} spy={true} smooth={true} offset={30} duration={500 }  >Exercises</LinkS>
    </Stack>
  </Stack>
)


export default Navbar
