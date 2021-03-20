import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h2 className='header__logo'>FlatsMeet</h2>
      </Link>
      <div className='header__center'>
        <input type='text' />
        <SearchIcon />
      </div>
      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
