import React from "react";
import Agent from "./Agent";
import img0 from '../media/0.jpg';
import img1 from '../media/1.jpg';
import img2 from '../media/2.jpg';
import img3 from '../media/3.jpg';
import img4 from '../media/4.jpg';
import img5 from '../media/5.jpg';
import img6 from '../media/6.png';

const Bulk = ()  => {
    const lista = Array(100).fill(1)
    return (
        <div className="bulk ml-20 pl-12 grid md:grid-cols-7 pt-4 bg-gray-100 right-0 mt-20">
            {/*      Placeholders      
            <div className="h-20 col-span-4"></div>
            <div className="h-12 my-5 col-span-2 bg-taGreen mr-8 ml-1 rounded-lg"></div>
            {/*      Agents            */}
            {lista.map(x => <Agent st={['a', 'p', 'r'][Math.floor(Math.random()*3)]} sc={[img0, img1, img2, img3, img4, img5, img6][Math.floor(Math.random()*7)]} />)}
        </div>
    )
}

export default Bulk;