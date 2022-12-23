import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component
{
    render(){
        return(
            <div className='Pokedex'>
                <h1>Total Experience: {this.props.exp}</h1>
                <p className={this.props.isWinner ? 'Pokedex-isWinner' : 'Pokedex-isLoser'}>{this.props.isWinner ? 'WINNER!' : 'LOSER'}</p>
                <div className="Pokedex-cards">
                {
                    this.props.pokemon.map((p) =>(
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
                    ))
                }
                </div>                
            </div>
        )
    }
}

export default Pokedex;