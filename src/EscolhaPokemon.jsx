import React, { useState }from "react";
import ImagemPokemon from "./ImagemPokemon"

function EscolhaPokemon() {
    const [nomePokemon, setNomePokemon] = useState("")

    function handleOnChange(event){
        setNomePokemon(event.target.value)
        console.log(nomePokemon)
    }
    return (
    <div>
        <input 
        value={nomePokemon}
        type="text" 
        onChange={handleOnChange}/>
        { nomePokemon && <ImagemPokemon nome={nomePokemon} />}
    </div>
    )
}

export default EscolhaPokemon;