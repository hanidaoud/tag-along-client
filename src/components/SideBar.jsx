import React from "react";
import {BsUiChecksGrid, BsUiChecks, BsGithub, BsSun, BsMoon} from 'react-icons/bs';
import {CiLight} from 'react-icons/ci';
import {MdOutlineDescription} from 'react-icons/md';
import {AiOutlineLogout, AiOutlineHome, AiOutlineFileSearch, AiOutlineNumber, AiOutlineSetting, AiOutlineWifi} from 'react-icons/ai' // search: file
import {IoSettingsOutline} from 'react-icons/io5'
import {HiOutlineSun} from 'react-icons/hi2'
import tag from '../media/tag-along.png'
//<BsMoon className="rounded-2xl h-12 w-12 py-[14px] px-auto bg-black text-taPlatinum mx-auto my-4"/>
import {Link, useLocation} from 'react-router-dom';
import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const SideBar = () => {
    const [page, setPage] = useState(useLocation().pathname);
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (

        <div className="h-screen w-20 fixed bg-black flex flex-col">
            <AiOutlineWifi className="rounded-2xl h-12 w-12 py-3 px-auto bg-black text-taPlatinum mx-auto my-4 hover:cursor-pointer" />
            <Link to='/' onClick={() => setPage('/')} className="hover:cursor-default" >
                <AiOutlineHome className={page === '/' ? "sidebar-item-active": "sidebar-item"} />
            </Link>
            <Link to='/logs' onClick={() => setPage('/logs')} className="hover:cursor-default" >
                <AiOutlineFileSearch className={page === '/logs' ? "sidebar-item-active": "sidebar-item"} />
            </Link>
            {/*<Link to='/' onClick={() => setPage('/id')} >
                <AiOutlineNumber className={page === '/id' ? "sidebar-item-active": "sidebar-item"} />
            </Link>*/}
            <div className="h-blank w-12 mx-auto"></div>
            <Link to='/settings' onClick={() => setPage('/settings')} className="hover:cursor-default" >
                <AiOutlineSetting className={page === '/settings' ? "sidebar-item-active": "sidebar-item"} />
            </Link>
            <BsSun className="sidebar-item dark:hidden" onClick={handleMode} />
            <BsMoon className="sidebar-item hidden dark:inline pl-1" onClick={handleMode} />
            <AiOutlineLogout className="sidebar-item" />
        </div>
        
    )
}

const Item = ({output, icon}) => {
    return (
        <div className="grid grid-flow-row grid-cols-5 h-16 text-[#c4d2ff] hover:bg-[#3c50cb] hover:text-[#fafffc] hover:cursor-pointer rounded-lg mx-4">
            {icon}
            <span className="col-span-4 font-bold text-lg my-auto ml-2">{output}</span>

        </div>
    )
}

export default SideBar;