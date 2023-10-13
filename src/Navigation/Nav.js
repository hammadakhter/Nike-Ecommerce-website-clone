import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom"
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'



const Nav = ({ handleInputChange, query }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
      

        <Button
          id="basic-button"
          className="cart-btn"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <AiOutlineShoppingCart className="nav-icons carts"  />
        </Button>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {
        
        <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
          <AiOutlineClose
            onClick={handleClose}
            style={{ position: "absolute", top: 2, right: 20, fontSize: 25, cursor: "pointer" }}/>
          <p style={{ fontSize: 27 }}>Your carts is empty</p>
          <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
        </div>
      }

    </Menu >


      </div>
    </nav>
  );
};

export default Nav;
