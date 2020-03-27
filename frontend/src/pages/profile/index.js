import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

import api from '../../services/api';

export default function Profiles(){
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
                headers : {
                authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncidents(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incidents => incidents.id !== id));
        }catch(err){
            alert("Erro ao deletar caso, tente novamente");
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="buttom" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="buttom">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incidents => (
                    <li key ={incidents.id}>
                    <strog>CASO</strog>
                    <p>{incidents.title}</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>{incidents.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style : 'currency', currency: 'BRL'}).format(incidents.value)}</p>

                    <button  onClick={() => handleDeleteIncidents(incidents.id)} type="buttom">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}