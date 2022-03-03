import React from 'react'
import './css/Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import TinderLogo from './images/tinder.png'
import ForumIcon from '@material-ui/icons/Forum'


const Header = () => {
    return (
        <div className='header'>
         
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>

            <img className="header__logo" src={TinderLogo} alt="tinder" />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>

        </div>
    )
}

export default Header
