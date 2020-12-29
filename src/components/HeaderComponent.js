import React from 'react';
import  '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="amazon logo"
                className="header-logo"
                />

            <div className="header-search">
                <input
                className="'header-search-input"
                type="text"
                />
                <SearchIcon className="header-search-icon" />
            </div>

            <div className="header-nav">

                <div className="header-option">
                    <span className="header-option-lineone">

                    </span>
                </div>

                <div className="header-option">
                    <span className="header-option-lineone">
                        Returns
                    </span>
                    <span className="header-option-lineone">
                        & Orders
                    </span>
                </div>

                <div className="header-option">
                    <span className="header-option-lineone">
                        Your
                    </span>
                    <span className="header-option-lineone">
                        Prime
                    </span>
                </div>

                {/* <div className="header-option">
                    <span className="header-option-lineone">
                        
                    </span>
                </div> */}
                
            </div>
        </div>
    )
}

export default Header;
