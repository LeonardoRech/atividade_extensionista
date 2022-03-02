import axios from 'axios'
import { baseApiUrl } from '../../../services/api'
import { IconTrash} from '../../../icons'
import { useEffect, useState } from 'react'

export default function EletronicTemplate(){
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get(`${baseApiUrl}/students`).then(resp => {
            setList(resp.data.data)
        })
    })

    function getUpdatedList(eletronic, add = true) {
        const list = list.filter(u => u.id !== eletronic.id)
        if(add) list.unshift(eletronic)
        return list
    }

    function remove(eletronic) {
        axios.delete(`${baseApiUrl}/students/${eletronic.id}`).then(res => {
            const list = getUpdatedList(eletronic, false)
            setList(list)
        })

        alert("Estudante Excluído da Lista!")
    }

    function renderTable(){
        return (
            <div className='flex flex-col'>
                <table className={`
                    w-full rounded-md mt-5
                    bg-gray-700
                    text-center text-white
                `}>
                    <thead className={`
                        border-b border-black
                        text-xl
                    `}>
                        <th className='p-2 font-light'>Nome</th>
                        <th className='p-2 font-light'>Email</th>
                        <th className='p-2 font-light'>Eletrônico</th>
                        <th className='p-2 font-light'>Ações</th>
                    </thead>
                    <tbody>
                        {list.map((eletronic, i) => {
                            return (
                                <tr key={eletronic.id} className={`
                                    ${i % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'}
                                    hover:bg-gray-900
                                `}>
                                    <td className='p-2'>{eletronic.name}</td>
                                    <td className='p-2'>{eletronic.email}</td>
                                    <td className='p-2'>{eletronic.eletronic}</td>
                                    <td className='p-2'>
                                        <button 
                                        onClick={() => remove(eletronic)}
                                        className={`
                                            text-red-600 p-1 ml-1 h-10 w-10
                                            hover:bg-gray-200 hover:rounded-full
                                        `}
                                        >
                                            {IconTrash}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            {renderTable()}
        </div>
    )
}