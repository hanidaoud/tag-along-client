import React from "react";
import {BsUiChecksGrid, BsUiChecks, BsGithub, BsSun, BsMoon} from 'react-icons/bs';
import {CiLight} from 'react-icons/ci';
import {MdOutlineDescription} from 'react-icons/md';
import {AiOutlineLogout, AiOutlineHome, AiOutlineFileSearch, AiOutlineNumber, AiOutlineSetting, AiOutlineWifi} from 'react-icons/ai' // search: file
import {IoSettingsOutline} from 'react-icons/io5'
import {HiOutlineSun} from 'react-icons/hi2'
import tag from '../media/tag-along.png'
//<BsMoon className="rounded-2xl h-12 w-12 py-[14px] px-auto bg-black text-taPlatinum mx-auto my-4"/>

const SideBar = () => {
    return (
        /*<div className="h-screen w-64 fixed bg-[#4459e8] flex flex-col shadow-xl">
            <img alt="" src={tag} className="mt-4 px-6" />
            <hr class="line" />
            <Item output='Accueil' icon={<AiOutlineHome size="18" className="my-auto mx-auto"/>} />
            <Item output='Logs' icon={<HiOutlineInboxStack size="18" className="my-auto mx-auto"/>} />
            <Item output='Parametres' icon={<IoSettingsOutline size="18" className="my-auto mx-auto"/>} />
        </div>*/

        <div className="h-screen w-20 fixed bg-black flex flex-col">
            <AiOutlineWifi className="rounded-2xl h-12 w-12 py-3 px-auto bg-black text-taPlatinum mx-auto my-4 hover:cursor-pointer"/>
            <AiOutlineHome className="rounded-2xl h-12 w-12 py-3 px-auto text-black bg-taPlatinum mx-auto my-4 hover:cursor-pointer"/>
            <AiOutlineFileSearch className="rounded-2xl h-12 w-12 py-3 px-auto text-taPlatinum bg-black mx-auto my-4 
                hover:cursor-pointer hover:bg-taPlatinum hover:text-black"/>
            <AiOutlineNumber className="rounded-2xl h-12 w-12 py-3 px-auto bg-black text-taPlatinum mx-auto my-4 
                hover:cursor-pointer hover:bg-taPlatinum hover:text-black"/>
            <div className="h-blank py-auto px-auto mx-auto"></div>
            <AiOutlineSetting className="rounded-2xl h-12 w-12 py-3 px-auto bg-black text-taPlatinum mx-auto my-4 
                hover:cursor-pointer hover:bg-taPlatinum hover:text-black"/>
            <BsSun className="rounded-2xl h-12 w-12 py-3 px-auto bg-black text-taPlatinum mx-auto my-4 
            hover:cursor-pointer hover:bg-taPlatinum hover:text-black"/>
            <AiOutlineLogout className="rounded-2xl h-12 w-12 py-3 px-auto bg-black text-taPlatinum mx-auto my-4 
            hover:cursor-pointer hover:bg-taPlatinum hover:text-black"/>
        </div>
        
        /*
            <div className="h-screen w-64 bg-slate-600 fixed grid grid-flow-col grid-cols-4 shadow-xl">
            <div className="bg-taGreen flex flex-col text-white items-center justify-start">
                <BsGithub className="h-12 py-auto my-20 text-black" />
                <BsUiChecksGrid className="h-12 py-auto" />
                <BsUiChecks className="h-12 py-auto" />
                <MdOutlineDescription className="h-12 py-auto" />
                <BsUiChecks className="h-12 py-auto" />
                <BsUiChecks className="h-12 py-auto" />
            </div>
            <div className="bg-white col-span-3 flex flex-col text-black items-left pl-4 pr-4">
                <h1 className="h-12 py-auto my-20 pt-3 border-b-2 border-black">Tag Along</h1>
                <h1 className="h-12 pt-3">Accueil</h1>
                <h1 className="h-12 pt-3">Liste</h1>
                <h1 className="h-12 pt-3">Logs</h1>
                <h1 className="h-12 pt-3">Parametres</h1>
                <h1 className="h-12 pt-3">Parametres</h1>
            </div>
        </div>
        */
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