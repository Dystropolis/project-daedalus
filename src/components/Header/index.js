import React from 'react';
import  './Header.css';
import logo from './../../resources/Header/logo.png';


export class Header extends React.Component<props>{
    render() {
        return (
            <div className="Header">
                <header className="Header-header">
                    <img src={logo} className="Header-logo" alt="logo" />
                    <div className="Header-CompanyName">
                        <p className="Header-CompanyName-Title">FrenchyBoy</p>
                        <p className="Header-CompanyName-Subtitle">Studios</p>
                    </div>    
                </header>
            </div>
        );
    }
}