import { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { baseApiUrl } from '../../services/api'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Doador(){
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [eletronic, setEletronic] = useState('')

    function save() {
        axios.post(`${baseApiUrl}/students`, {
            name: name,
            email: email,
            eletronic: eletronic
        })
        
        alert("Obrigado pelo cadastro!")

        navigate("/") 
    }

    return(
        <div className='flex flex-col h-screen bg-gray-100'>
            <Header />
                <div className='flex flex-col bg-gray-600 h-full px-5 py-10'> 
                    <div className='flex flex-col'>
                        <div className='flex flex-col md:flex-row justify-center items-center mb-5'>
                            <input
                                className={`
                                    p-1 rounded-md border border-yellow-500
                                    w-60 mb-5
                                `} 
                                type="text"
                                name='name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Digite o seu Nome"
                            />
                            <input
                                className={`
                                    p-1 rounded-md border border-yellow-500
                                    w-60 mb-5 md:mx-10
                                `} 
                                type="text"
                                name='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Digite seu Email"
                                
                            />
                            <select 
                                className={`
                                    p-1
                                    w-60 mb-5
                                    border-solid border-2 border-gray-600 rounded-md 
                                `}
                                name="eletronic"
                                onChange={e => setEletronic(e.target.value)}>
                                <option value="">Qual Eletr??nico Desejas?</option>
                                <option value='Celular'>Celular</option>
                                <option value='Tablet'>Tablet</option>
                                <option value='Notebook'>Notebook</option>
                                <option value='Computador'>Computador</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-5 flex flex-row justify-center'>
                        <button className={`
                                bg-green-600
                                p-2 rounded-md mr-2 w-40
                            `}
                            onClick={save}
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            <Footer />
        </div>
    )
}