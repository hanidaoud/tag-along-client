import React from "react";
import {MdViewModule, MdViewList} from 'react-icons/md';
import {TfiViewGrid, TfiViewList} from 'react-icons/tfi';

const TopBar = () => {
    return (
        <div className="bg-gray-100 h-20 w-[calc(100%-5rem)] fixed ml-20 grid grid-flow-col grid-cols-7 shadow-md">
            <Count inside={71} outside={19}/>
            <View />
            
        </div>
    )
}

const View = () => {
    return (
    <div className="w-24 h-12 my-auto mx-auto grid grid-flow-col grid-cols-2 bg-black rounded-2xl col-start-7">
        <TfiViewGrid className="rounded-2xl h-12 w-12 py-3.5 bg-gray-500 text-taPlatinum border-gray-500 border-l-2 hover:bg-slate-600" />
        <TfiViewList className="rounded-2xl h-12 w-12 py-3.5 text-taPlatinum hover:bg-slate-600" />
    </div>
    )
}

const Count = ({inside, outside}) => {
    return (
        <div className="flex flex-row h-20 ml-[4.5rem] col-span-2">
            <div className="w-24 px-auto my-auto flex flex-col">
                <span className="font-regular text-2xs text-center">PRESENTS</span>
                <span className="font-medium text-4xl text-center">{inside}</span>
            </div>
            <div className="w-24 px-auto my-auto flex flex-col">
                <span className="font-regular text-2xs text-center">ABSENTS</span>
                <span className="font-medium text-4xl text-center">{outside}</span>
            </div>
        </div>
    )
}

export default TopBar;