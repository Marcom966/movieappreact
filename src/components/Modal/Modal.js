import React, { useState, useEffect } from "react";
import axios from "axios";

export function Model({search}){
    const [movies, setMovies] = useState([]);
    let nameNew = search.replace(/\s/g, '+');
    let newName = JSON.parse(nameNew)
    let Url = 'https://www.omdbapi.com/?'
    let key = 'ed143ea3'
    useEffect(()=>{
        if(newName){
            const urlDefinitivo = `${Url}apikey=${key}&t=${newName}`;
            async function axiosFunc(urlDefinitivo){
                const resp = await axios.get(urlDefinitivo);
                const resp2 = resp.data;
                setMovies(resp2);
            }
            axiosFunc(urlDefinitivo);
        }
    }, [search]);

    return(
        <div className="containerModal" id="modal">
            <center>
                <img src={movies?.Poster} alt={movies?.Title} style={{border: "1px solid white", boxShadow: "0 0 15px #fff"}}></img>
                <h1>{movies?.Title}</h1>
                <p>Trama: {movies?.Plot}</p>
                <p>Attori: {movies?.Actors}</p>
                <p>Direttore/ice: {movies?.Director}</p>
                <p>Genere: {movies?.Genre}</p>
                <p>Durata: {movies?.Runtime}</p>
            </center>
        </div>
    )
}

