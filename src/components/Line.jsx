import React, { useState } from 'react';
import Default from '../media/default.png'
import AutoPicture from './AutoPicture';


const Line = ({nom, prenom, etat, ws = 0, src = null, ltrs = 'AB', s}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };
    return (
        <tr className={(etat == 'Present' ? 
            (ws === 0 ? "taRow hover:bg-taGreen dark:hover:bg-taGreen group" : 
                "taRow hover:bg-taGreen dark:hover:bg-taGreen group animate-pulse-color-p") : 
            (ws === 0 ? "taRow hover:bg-taRed dark:hover:bg-taRed group" : 
                "taRow hover:bg-taRed dark:hover:bg-taRed group animate-pulse-color-a"))}>
            <td className="aspect square px-8 py-4 border-r-0 grid grid-cols-3"><div className='col-start-2'>{src == null ? 
                <AutoPicture seed={s} letters={prenom[0]+nom[0]} className="mx-auto shadow-md aspect-square" /> :
                <img src={src} className="rounded-full mx-auto"></img> }</div>
            </td>
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