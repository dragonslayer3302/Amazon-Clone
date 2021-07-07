import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [State, dispatch] = useStateValue();

  const handleAuthentication = () => {
      if (State.user) {
          auth.signOut();
      }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
           className="header__logo"
           src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
         />
      </Link>
      
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon
        className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!State.user && '/login'}> {/*only redirect to login page when there is no user*/}
            <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineOne">
                    Hello Guest
                </span>
                <span className="header__optionLineTwo">
                    {State.user ? 'Sign Out': 'Sign In'}
                </span>
            </div>
        </Link>
        

        <div className="header__option">
            <span className="header__optionLineOne">
                Returns
            </span>
            <span className="header__optionLineTwo">
                Orders
            </span>
        </div>

        <div className="header__option">
            <span className="header__optionLineOne">
                Your
            </span>
            <span className="header__optionLineTwo">
                Prime
            </span>
        </div>

        <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo 
                header_basketCount">{State.basket?.length}</span>
            </div>
        </Link>
      </div>
    </div>
  );
}

// basket?.length, ? is called optional chaining, it means that
// if for some reason basket becomes undefined or you don't get the correct
// value it will handle the error

export default Header;
