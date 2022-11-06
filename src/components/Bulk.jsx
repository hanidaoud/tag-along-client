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
    const lista = Array(100).fill(1) //foo('http://192.168.122.89:6868/tags');
    //const [lista, setLista] = useState(0);
    /*axios({
        method: 'get',
        url: 'http://192.168.122.89:6868/tags'
    })*/
    /*const [liste, setListe] = useState([]);
    axios
        .get('http://192.168.122.89:6868/tags')
        .then(res => {
            console.log(res.data);
            setListe(Object.values(res.data)[0]);
            console.log(Object.values(res.data)[0]);
        })
        .catch(err => console.error(err));*/
    let lista2 = 0 // Mapper2();
    const list3 = lista2
    console.log(1);
    console.log(list3);
    //console.log(lista2);
    /*console.log(2);
    console.log([1, 2, 3]);
    Object.values(lista2)[0].map(x => console.log(x));*/
    return (

        <div className="bulk ml-20 pl-12 grid md:grid-cols-7 pt-4 bg-gray-100 right-0 mt-20">
            {/*fetch('http://192.168.122.89:6868/tags')
            .then(res => res.json())
            .then(json => console.log(json.data))
            .then(json => json.data.map( 
                <Agent st={['a', 'p', 'r'][Math.floor(Math.random()*3)]} 
                sc={[img0, img1, img2, img3, img4, img5, img6][Math.floor(Math.random()*7)]} />))
            .catch(err => console.error(err))*/}
            {Object.values(lista)[0].map(x => <Agent key="uniqu" st={x.present_status == 1 ? 'p' : 'a' } 
                sc={[img0, img1, img2, img3, img4, img5, img6][Math.floor(Math.random()*7)]}
                /*name={Object.values(x)[1]}*/  />)}
        </div>
    )
}

export default Bulk;


{/*      Agents            } 
            {lista.map(x => <Agent key="uniqu" st={['a', 'p', 'r'][Math.floor(Math.random()*3)]} 
                sc={[img0, img1, img2, img3, img4, img5, img6][Math.floor(Math.random()*7)]}
name={Object.values(x)[1]}  />)} */}

/*function Mapper() {
    const [liste, setListe] = useState([]);
    useEffect(() => {
        axios
            .get('http://192.168.122.89:6868/tags')
            .then(res => {
                console.log(res.data);
                setListe(res.data);
            })
            .catch(err => console.error(err));
    }, []);
    console.log(liste);
    return liste;
}

function Mapper2() {
    const [liste, setListe] = useState([]);
    axios
        .get('http://192.168.122.89:6868/tags')
        .then(res => {
            //console.log(res.data);
            setListe(Object.values(res.data)[0]);
            //console.log(Object.values(res.data)[0]);
        })
        .catch(err => console.error(err));
    return liste;
}*/