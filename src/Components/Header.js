import React, { useContext } from 'react'
import '../css/Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import TinderLogo from '../images/tinder.png'
import ForumIcon from '@material-ui/icons/Forum'
import { Link } from 'react-router-dom'
import { SwipedContext } from '../Context/SwipedContext'


const Header = () => {

    const { swipedRight } = useContext(SwipedContext);
    return (
        <div className='header'>

            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>

            <IconButton>
                <Link to="/">
                    <img className="header__logo" src={TinderLogo} alt="tinder" />
                </Link>
            </IconButton>

            <IconButton>
                {swipedRight ? <Link to="/chats">
                    <ForumIcon fontSize="large" className="header__icon" />
                </Link> :
                    <ForumIcon fontSize="large" className="header__icon" />
                }
            </IconButton>

        </div>
    )
}

export default Header
