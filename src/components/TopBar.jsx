import React, { useState } from "react";
import { useEffect } from "react";
import {MdViewModule, MdViewList} from 'react-icons/md';
import {TfiViewGrid, TfiViewList} from 'react-icons/tfi';
import { Link, useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";

const TopBar = ({view=false}) => {
    return (
        <div className="bg-gray-100 h-20 w-[calc(100%-5rem)] fixed ml-20 grid grid-flow-col grid-cols-7 shadow-md 
            dark:bg-taDark dark:text-taPlatinum">
            <Count inside={71} outside={19}/>
            {view ? <View /> : ''}
        </div>
    )
}

const View = () => {
    const [page, setPage] = useState('/');
    return (
    <div className="w-24 h-12 my-auto mx-auto grid grid-flow-col grid-cols-2 bg-black rounded-2xl col-start-7">
        <Link to="/" onClick={() => setPage('/')} >
            <TfiViewGrid className={page === '/' ?
                "rounded-2xl h-12 w-12 py-3.5 bg-slate-700 text-taPlatinum" :
                "rounded-2xl h-12 w-12 py-3.5 text-taPlatinum" } />
        </Link>
        <Link to="/listview" onClick={() => setPage('/listview')} >
            <TfiViewList className={page === '/listview' ?
                "rounded-2xl h-12 w-12 py-3.5 bg-slate-700 text-taPlatinum" :
                "rounded-2xl h-12 w-12 py-3.5 text-taPlatinum" } />
        </Link>
    </div>
    )
}

const Count = ({inside, outside}) => {
    return (
        <div className="grid grid-cols-4 h-20 ml-[4rem] col-span-2">
            <div className="w-24 px-4 my-auto flex flex-col col-span-1">
                <span className="font-regular text-2xs text-center">PRESENTS</span>
                <span className="font-medium text-4xl text-center">{inside}</span>
            </div>
            <div className="w-24 px-4 my-auto flex flex-col col-span-1">
                <span className="font-regular text-2xs text-center">ABSENTS</span>
                <span className="font-medium text-4xl text-center">{outside}</span>
            </div>
        </div>
    )
}

export default TopBar;