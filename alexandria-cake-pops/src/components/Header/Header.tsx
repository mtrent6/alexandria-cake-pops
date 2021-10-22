import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


const Header = () => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: '#9C528B',
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));
      



    return (
        <div className="header">
            <div ><h1><i>Alexandria Cake Pops</i></h1></div>
            <div className="buttonRow">
                <ColorButton variant="text">ORDER</ColorButton>
                <ColorButton variant="text">GALLERY</ColorButton>
                <ColorButton variant="text">SOCIAL MEDIA</ColorButton>
                <ColorButton variant="text">OUR STORY</ColorButton>
                <ColorButton variant="text">CONTACT</ColorButton>
                <ColorButton variant="text">FAQ</ColorButton>


            </div>
        </div>
    )
}

export default Header