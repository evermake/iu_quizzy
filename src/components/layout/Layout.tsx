import React from 'react';
import Header from "../Header";
import {Outlet} from "react-router-dom";
import {Wrapper} from "./styled";

const Layout = () => {
    return (
        <Wrapper>
            <Header/>
            <Outlet/>
        </Wrapper>
    );
};

export default Layout;
