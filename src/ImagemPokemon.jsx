import React, { useEffect, useState } from "react";
import axios from "axios"

function ImagemPokemon(props){
    const [pokemon, setPokemon] = useState(null)

   
        axios.get("https://pokeapi.co/api/v2/pokemon/"+props.nome)
            .then(response => {
                setPokemon(response.data)
                
            })
            .catch(error =>{
                console.log(error)
            })
   

    if (!pokemon){
        return(<div>Carregando...</div>);
    }

    return(
        <div>
            <img src={pokemon.sprites.front_default} alt="" />
        </div>
    )
}

export default ImagemPokemon;