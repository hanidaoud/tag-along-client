import React from "react";
import gnu from '../media/default.png';
import { useState } from "react";
import AutoPicture from "./AutoPicture";

const Agent = ({st, sc, name = 'Iron Maiden', ws = 0, seed}) => {
    const [isActive, setIsActive] = useState(false);
    const letters = name.split(' ');

    const handleClick = event => {
        // 👇️ toggle isActive state variable
        setIsActive(current => !current);
    };
    // <div className={isActive ? 'agent-active' : 'agent'} onClick={handleClick}>
    return (
        <div className={isActive ? 
            ((st === 'p') ? 'agent-p-active' : ((st === 'a') ? 'agent-a-active' : 'agent-r-active')) : 
            ((st === 'p') ? ((ws === 0) ? 'agent-p' : 'agent-p animate-pulse-color-p') : 
                ((st === 'a') ? ((ws === 0) ? 'agent-a' : 'agent-a animate-pulse-color-a') : 
                                ((ws === 0) ? 'agent-r' : 'agent-r animate-pulse-color-r')))} 
            onClick={handleClick}>

            <center>
            <Picture src={sc} s={seed} ltrs={letters[0][0] + letters[1][0]} className="flex-row" />
            <h3 className='text-darkText flex-row py-3'>{name}</h3>
            <State status={st}/>
            </center>
        </div>
    )
}

const Picture = ({src=null, s, ltrs}) => {
    return (
        <div className='w-[40%] aspect-square'>
            {src == null ? 
            <AutoPicture seed={s} letters={ltrs}/> :
            <img alt="" src={src != null ? src : gnu} className='rounded-full border-[1px] border-[#ebf2f4]'></img>}
        </div>
    )
}

const State = ({status}) => {
    return (
        <div className='flex px-6'>
            {(status === 'p') ? 
            <div className='flex-col bg-taGreen rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4] dark:border-taMidDark'>P</div> :
            <div className='flex-col bg-taPlatinum text-black font-normal 
                dark:bg-taMidDark dark:text-taPlatinum dark:border-taMidDark
                rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4]'>P</div> }
            {(status === 'a') ? 
            <div className='flex-col bg-taRed rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4] dark:border-taMidDark'>A</div> :
            <div className='flex-col bg-taPlatinum text-black font-normal 
                dark:bg-taMidDark dark:text-taPlatinum dark:border-taMidDark
                rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4]'>A</div> }
            {(status === 'r') ? 
            <div className='flex-col bg-taOrange rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4] dark:border-taMidDark'>R</div> :
            <div className='flex-col bg-taPlatinum text-black font-normal
                dark:bg-taMidDark dark:text-taPlatinum dark:border-taMidDark
                rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4]'>R</div> }
        </div>
    )
}

export default Agent;