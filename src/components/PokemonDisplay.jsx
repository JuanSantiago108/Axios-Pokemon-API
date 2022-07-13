import React from 'react'

const PokemonDisplay = (props) => {
    const {pokemon} = props


    return (
        <div>
            {
                pokemon.map((p) =>
                <div>
                    {p.name}
                </div>)
            }
        </div>
    )
}

export default PokemonDisplay
