import React from 'react';
import {NavLink} from "react-router-dom";

const defaultStyle = {
    textDecoration: "none",
    color: "#F7D8C5",
    fontSize: '68px',
    backgroundColor: 'transparent'
};

const Home = () => {
    return (
        <div className="wrapper">
            <NavLink to="/about" exact style={defaultStyle}>
                ...
            </NavLink>
        </div>
    );
};

export default Home;