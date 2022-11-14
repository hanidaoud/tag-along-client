import React from 'react'

function AutoPicture({seed = 0, letters}) {
    const color = Math.floor(Math.abs(seed) % 10);
    return (
        <div className={`${color == 0 ? 'bg-indigo-300' : 
            color == 1 ? 'bg-teal-300' :
            color == 2 ? 'bg-cyan-300' : 
            color == 3 ? 'bg-blue-300' : 
            color == 4 ? 'bg-pink-300' : 
            color == 5 ? 'bg-red-300' : 
            color == 6 ? 'bg-lime-300' : 
            color == 7 ? 'bg-green-300' : 
            color == 8 ? 'bg-yellow-300' : 
            'bg-emerald-300'} h-full rounded-full flex font-normal text-3xl aspect-square`} >
            <span className="m-auto text-taDark">{letters}</span>
        </div>
  )
}

export default AutoPicture