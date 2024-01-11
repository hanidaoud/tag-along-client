import {React, useEffect, useState} from "react";
import Agent from "./Agent";
import img0 from '../media/0.jpg';
import img1 from '../media/1.jpg';
import img2 from '../media/2.jpg';
import img3 from '../media/3.jpg';
import img4 from '../media/4.jpg';
import img5 from '../media/5.jpg';
import img6 from '../media/6.png';
import axios from "axios";
import { data } from "autoprefixer";
import { render } from "@testing-library/react";

const Bulk = ()  => {
    const lista = Array(100).fill(1)
    let lista2 = 0 // Mapper2();
    const list3 = lista2
    console.log(1);
    console.log(list3);
    return (

        <div className="bulk ml-20 pl-12 grid md:grid-cols-7 pt-4 bg-gray-100 right-0 mt-20">
            {Object.values(lista)[0].map(x => <Agent key="uniqu" st={x.present_status == 1 ? 'p' : 'a' } 
                sc={[img0, img1, img2, img3, img4, img5, img6][Math.floor(Math.random()*7)]}
            />)}
        </div>
    )
}

export default Bulk;
