import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <img
                className="header__icon"
                /*src="https://miro.medium.com/max/2678/0*NChTo-XqLOxLabIW"*/
                 src="https://cdn-images-1.medium.com/max/282/1*aA4QwgsTkdSMSAEhh_qreQ@2x.png"
               
                alt=""
            />
            </Link>
           <div className='header__center'>
               <input type="text" />
               <SearchIcon /> 
            </div>

             <div className='header__right'>
                 <p>Become a host</p>
                 <LanguageIcon />
                 <ExpandMoreIcon />
                 <Avatar />
             </div>
            
        </div>
    )
}

export default Header
