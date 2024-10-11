'use client';

import { useState, useEffect } from 'react';
import AddClassBody from "../elements/AddClassBody";
import BackToTop from '../elements/BackToTop';
import ModalLogin from "../elements/ModalLogin";
import ModalRegister from "../elements/ModalRegister";
import OffcanvasMenu from "./OffcanvasMenu";
import OffcanvasFilter from "./OffcanvasFilter";
import OffcanvasMobileFilter from "./OffcanvasMobileFilter";

export default function ClientLayout() {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const [isRegister, setRegister] = useState(false);
    const [isOffcanMenu, setOffcanMenu] = useState(false);
    const [isOffcanFilter, setOffcanFilter] = useState(false);
    const [isOffcanAdvanceFilter, setOffcanAdvanceFilter] = useState(false);
    const [isOffcanMobile, setOffcanMobile] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        document.body.classList.toggle("mobile-menu-visible", isMobileMenu);
    };
    const handleLogin = () => {
        setLogin(!isLogin);
        document.body.classList.toggle("modal-open", isLogin);
    };
    const handleRegister = () => {
        setRegister(!isRegister);
        document.body.classList.toggle("modal-open", isRegister);
    };

    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({ live: false });
        window.wow.init();

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            setScroll(scrollCheck);
        };
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <AddClassBody />
            <BackToTop target="#top" />
            <ModalLogin isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} />
            <ModalRegister isRegister={isRegister} handleRegister={handleRegister} isLogin={isLogin} handleLogin={handleLogin} />
            <OffcanvasMenu
                isOffcanMenu={isOffcanMenu}
                handleOffcanMenu={setOffcanMenu}
                isLogin={isLogin}
                handleLogin={handleLogin}
                isRegister={isRegister}
                handleRegister={handleRegister}
            />
            <OffcanvasFilter
                isOffcanFilter={isOffcanFilter}
                handleOffcanFilter={setOffcanFilter}
                isLogin={isLogin}
                handleLogin={handleLogin}
                isRegister={isRegister}
                handleRegister={handleRegister}
            />
            <OffcanvasMobileFilter />
        </>
    );
}
