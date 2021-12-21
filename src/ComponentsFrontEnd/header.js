import React from 'react'
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialTumbler } from 'react-icons/ti';


const Header = ({text, followus, support, image}) => {
    return (
        <>
         <div className="header"> <p> {text}</p>   <p> {support} </p>  <p className= "icon"> {followus} <TiSocialTwitter/>  </p> 
        </div> </>
    )
}

export default Header
