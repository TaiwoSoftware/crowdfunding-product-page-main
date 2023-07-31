import React from 'react';
import Button from './Button';
import Headerone from './Headerone';

function Header() {
    return <div className='displayFlex'>
            <Button name= "Open Account" />
            <Button name= "Close Account" />
            <Button name= "Log In" />
            <Button name= "Yoo! fam" />
            <Headerone title= "Taiwo Akerele" />
            <Headerone title= "Tech Bro" />
            <Headerone title= "Kehinde Akerele" />
        </div>
}

export default Header;