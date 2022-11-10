import React, { useState } from 'react';
import Default from '../media/default.png'

const Line = ({nom, prenom, etat, isrc}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };
    return (
        <tr className={(etat == 'Present' ? 
            "h-16 border-y-2 font-semibold dark:bg-taDark dark:text-taPlatinum hover:font-bold hover:text-taPlatinum hover:bg-taGreen dark:hover:bg-taGreen group" : 
            "h-16 border-y-2 font-semibold dark:bg-taDark dark:text-taPlatinum hover:font-bold hover:text-taPlatinum hover:bg-taRed dark:hover:bg-taRed group")}>
            <td className="px-8 py-4 border-r-0 grid grid-cols-3"><img src={isrc} className="rounded-3xl aspect-square mx-auto shadow-md col-start-2"></img></td>
            <td className="px-8 border-r-0">{nom}</td>
            <td className="px-8 border-r-0">{prenom}</td>
            <td className="px-8 border-r-0 text-sm group-hover:text-base">
                <div className={(etat == 'Present') ? "w-min px-2 py-0.5 rounded-3xl text-white bg-taGreen" : "w-min px-2 py-0.5 rounded-3xl text-white bg-taRed"}> 
                    {etat}
                </div>
            </td>
        </tr>
    )
}

export default Line;