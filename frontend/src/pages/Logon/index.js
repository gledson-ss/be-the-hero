import React from 'react';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    return (
       <div className="logon-cantainer">
           <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form >
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button type="submit">Entrar</button>
                    <a href="/registrer">
                        Não tenho cadastro
                    </a>
                </form>
           </section>

           <img src={heroesImg} alt="Heroes"/>
       </div>
    );
};