import React,{useState} from 'react'
import PokemonDisplay from '../components/PokemonDisplay'
import axios from "axios"

const PokemonDemo = () => {
    const [pokemon, setPokemon] = useState()



    const fetchPokemonWithAxiosAsync = async() =>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        setPokemon(response.data.results)
    }



    return (
        <div>
            <button onClick={fetchPokemonWithAxiosAsync}>Axios.get with async</button>

            {
                pokemon?
                <PokemonDisplay pokemon = {pokemon}/>
                :<h4>Fetch a pokemon by clicking one of the buttons</h4>
            }
        </div>
    )
}

export default PokemonDemo
