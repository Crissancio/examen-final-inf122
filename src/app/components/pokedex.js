'use client'

import style from './pokedex.module.css';
import { useState,useEffect } from 'react';
import Image from 'next/image';

export default function Pokedex(){
    const [pokeImagen, setPokeImagen]=useState("./vercel.svg")
    const [name, setName] = useState("");
    const[id,setId]=useState(0);

    const [typeOne,setTypeOne]=useState("");
    const [typeTwo, setTypeTwo]=useState("");
    const [height, setHeight]=useState(0);
    const [weight, setWeight]=useState(0);
    const [abilitiesOne, setAbilitiesOne]= useState("");
    const [abilitiesTwo, setAbilitiesTwo]= useState("");

    const [hp, setHp] = useState(0);
    const [attack, setAttack]= useState(0);
    const [defense, setDefense]=useState(0);
    const [speed, setSpeed] = useState(0);
    

    const url = 'https://pokeapi.co/api/v2/pokemon/75';

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data=>{
            setPokeImagen(data.sprites.front_default),
            setName(data.species.name), 
            setId(data.id),
            setTypeOne(data.types[0].type.name),
            setTypeTwo(data.types[1].type.name),

            setHeight(data.height),
            setWeight(data.weight),
            setAbilitiesOne(data.abilities[0].ability.name),
            setAbilitiesTwo(data.abilities[1].ability.name),

            setHp(data.stats[0].base_stat),
            setAttack(data.stats[1].base_stat),
            setDefense(data.stats[2].base_stat),
            setSpeed(data.stats[3].base_stat)
        });
    },[]);


    return(
        <div className={style.appContainer}>
            <div className={style.principalInfo}>
                <div className={style.header}>
                    <h2 className={style.myPokemon}>
                            My Pokemon
                    </h2>
                    <h1 className={style.pokeName}>
                        {name}
                    </h1>
                    <h3 className={style.pokeId}>
                        #{id}
                    </h3>
                </div>
                <div className={style.imageContainer}>
                    <Image src={pokeImagen} width={325} height={325} alt='imagenPokemon'/>
                </div>
            </div>
            {/*---------------------*/}
            <div className={style.generalInfoContainer}>
                <div className={style.about}>
                    <h3>About</h3>
                    <hr className={style.rayitaUwu}/>
                </div>
                <div className={style.descriptionOne}>
                    <p className={style.tag}>Type</p>
                    <p className={style.cap}>{typeOne},{typeTwo}</p>
                    <p className={style.tag}>Height</p>
                    <p>{height/10} m</p>
                    <p className={style.tag}>Weight</p>
                    <p>{weight/10 } kg</p>
                    <p className={style.tag} >Abilities</p>
                    <p  className={style.cap}>{abilitiesOne},{abilitiesTwo}</p>
                </div>
                <div className={style.about}>
                    <h3>Stats</h3>
                </div>
                <div className={style.descriptionTwo}>
                    <p className={style.tag}>HP</p>
                    <p>{hp}</p>
                    <p className={style.tag}>Attack</p>
                    <p>{attack}</p>
                    <p className={style.tag}>Defense</p>
                    <p>{defense}</p>
                    <p className={style.tag}>Speed</p>
                    <p>{speed}</p>
                </div>
            </div>
        </div>
    );
}