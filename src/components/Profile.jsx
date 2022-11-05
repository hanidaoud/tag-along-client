import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import img0 from '../media/0.jpg';

const Profile = () => {
    var id = '191931012345'
    return (
        <div className="ml-20 profile-canvas mt-20 p-12">
            <SearchBox />
            <div className="my-12 profile-body flex flex-col mx-auto shadow-xl rounded-2xl bg-taPlatinum">
                <div className="w-full bg-black h-16 rounded-t-2xl text-taPlatinum text-center">
                    <div className="mt-5 font-medium">id#{id}</div>
                </div>
                <div className="rounded-b-2xl h-full relative ">
                    <div className="profile-info mt-20 mx-60 border-t-0 border-gray-300 flex flex-row">
                        <img alt="" src={img0} className="h-60 aspect-square rounded-full  mt-16 ml-16 bg-slate-500" />
                        <div className="mt-16 px-16 py-8 flex flex-col w-64">
                            <div className="h-16"><b>Nom:</b></div>
                            <div className="h-16"><b>Prenom:</b></div>
                            <div className="h-16"><b>Matricule:</b></div>
                            <div className="h-16"><b>Specialite:</b></div>
                            <div className="h-16"><b>Status:</b></div>
                        </div>
                        <div className="mt-16 px-16 py-8 flex flex-col w-64">
                            <div className="h-16">Something</div>
                            <div className="h-16">Maiden</div>
                            <div className="h-16">191931038127</div>
                            <div className="h-16">M1 ESE</div>
                            <div className="h-16 text-taGreen font-bold">Active</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SearchBox = () => {
    return (
        <div className="h-[3.5rem] w-[48rem] rounded-full text-white flex flex-row-reverse mx-auto relative group">
            <input className="my-auto text-left relative w-full h-[3.5rem] text-black text-lg
                bg-white rounded-full pl-6 ring-2 ring-gray-300 group-hover:ring-gray-400" placeholder="Matricule" />
            <AiOutlineSearch size={40} className="py-2.5 h-[3.5rem] w-20 absolute right-0 text-gray-300 hover:text-black hover:cursor-pointer" />
        </div>
    )
}

export default Profile;