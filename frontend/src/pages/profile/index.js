import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profiles(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="buttom" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="buttom">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strog>CASO</strog>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 100</p>

                    <button type="buttom">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strog>CASO</strog>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 100</p>

                    <button type="buttom">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strog>CASO</strog>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 100</p>

                    <button type="buttom">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strog>CASO</strog>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 100</p>

                    <button type="buttom">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}