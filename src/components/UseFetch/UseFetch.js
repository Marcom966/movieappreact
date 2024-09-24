import React, { useEffect, useState } from "react";
import axios, * as others from 'axios';
import Row from 'react-bootstrap/Row';
import Cerd from "../Cerd/Cerd";

const UseFetch = ({updated, updatedYear, emptyFirstButton}) =>{
    const [movies, setMovies] = useState([]);
    let toObj = JSON.parse(updated)
    let name = toObj['updated'];
    let yearToSeach = JSON.parse(updatedYear);
    let year = yearToSeach['udatedYear'];
    let empty = JSON.parse(emptyFirstButton);
    let emptyName = empty['toSend'];
    if(emptyName===""){
        emptyName = "vuoto";
    }
    let Url = 'https://www.omdbapi.com/?';
    let key = 'ed143ea3';
    useEffect(()=>{
        function clearError(){
            let rowButton = document.getElementById('rowButtons');
            let error = document.getElementById('error');
            if(error && rowButton){
                rowButton.removeChild(error);
            }
        }

        function sendError(){
            let rowButton = document.getElementById('rowButtons');
            if(!rowButton){
                return;
            }
            let error = document.getElementById('error');
            if(error){
                return;
            }else{
                console.log("null");
                let newError = document.createElement('div');
                newError.id="error";
                newError.className="container";
                newError.innerHTML="inserisci il titolo di un film da cercare";
                console.log(rowButton.appendChild(newError));
            }
        }
        if(name && !year){
            const urlDefinitivo = `${Url}apikey=${key}&s=${name}`;
                async function axiosFunc(urlDefinitivo){
                    const resp = await axios.get(urlDefinitivo);
                    const resp2 = resp.data;
                    const search = resp2.Search;
                setMovies(search);
                }
            axiosFunc(urlDefinitivo);
            clearError();
        }

        if ((!name && year) || (emptyName === "vuoto")){
            console.log(emptyName);
            sendError();
        }
        if (name && year){
            const urlDefinitivo = `${Url}apikey=${key}&s=${name}&y=${year}`;
                async function axiosFunc(urlDefinitivo){
                    const resp = await axios.get(urlDefinitivo);
                    const resp2 = resp.data;
                    const search = resp2.Search;
                setMovies(search);
                }
            axiosFunc(urlDefinitivo);
            clearError();
        }
        if (!name && !year){
            sendError();
        }
        
    }, [updated, updatedYear, emptyFirstButton]);
        


    return(
        <div className="row-wrapper" style={{marginRight: "400px"}}>
            <Row style={{width: "200rem", height: "20rem", display: "inline", marginRight: "400px"}}>
                {Array.isArray(movies) ?
                movies.map((movie, index)=>{
                    return <Cerd name={movie.Title} year={movie.Year} image={movie.Poster} key={index}/>
                }): null}
                
            </Row>
        </div>
    )
        
}

export default UseFetch;
    