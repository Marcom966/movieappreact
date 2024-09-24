import React, { useCallback, useState, Component, componentWillUpdate, useEffect } from "react";
import "./Cerd.css";
import { Model } from "../Modal/Modal";
import Modal from 'react-modal';
    
const Cerd = ({name, year, image}) =>{

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = ()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = ()=>{
        setModalIsOpen(false)
    }
        
    
    return(

        <div className="containerCerd2">
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <p id="pmodal">{year}</p>
            <button type="button" style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "3px 3px 3px 3px #ffffff", color: "white"}} onClick={setModalIsOpenToTrue}>Più Dettagli</button>

            <Modal className="containerModall" isOpen={modalIsOpen} ariaHideApp={false}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <Model search={JSON.stringify(name)}/>
            </Modal>
        </div>
    )
    
}
export default Cerd;
    