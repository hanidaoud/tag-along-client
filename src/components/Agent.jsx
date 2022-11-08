import React from "react";
import gnu from '../media/default.png';
import { useState } from "react";

const Agent = ({st, sc, name = 'Iron Maiden'}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state variable
        setIsActive(current => !current);
    };
    // <div className={isActive ? 'agent-active' : 'agent'} onClick={handleClick}>
    return (
        <div className={isActive ? 'agent-active' : ((st === 'p') ? 'agent-p' : ((st === 'a') ? 'agent-a' : 'agent-r'))} onClick={handleClick}>
            <center>
            <Picture src={sc} className="flex-row" />
            <h3 className='text-darkText flex-row py-3'>{name}</h3>
            <State status={st}/>
            </center>
        </div>
    )
}

const Picture = ({src=gnu}) => {
    return (
        <div className='w-[40%]'>
            <img alt="" src={src} className='rounded-full border-[1px] border-[#ebf2f4]'></img>
        </div>
    )
}

const State = ({status}) => {
    return (
        <div className='flex px-6'>
            {(status === 'p') ? 
            <div className='flex-col bg-taGreen rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4]'>P</div> :
            <div className='flex-col bg-taPlatinum text-black font-normal
                rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4]'>P</div> }
            {(status === 'a') ? 
            <div className='flex-col bg-taRed rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4]'>A</div> :
            <div className='flex-col bg-taPlatinum text-black font-normal
                rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4]'>A</div> }
            {(status === 'r') ? 
            <div className='flex-col bg-taOrange rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4]'>R</div> :
            <div className='flex-col bg-taPlatinum text-black font-normal
                rounded-full py-[6px] mx-2 w-10 h-10 border-2 border-[#ebf2f4]'>R</div> }
        </div>
    )
}

export default Agent;