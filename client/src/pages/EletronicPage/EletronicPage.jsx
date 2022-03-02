import axios from "axios"
import { baseApiUrl } from "../../services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function ImovelById(){
    const {id} = useParams()
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get(`${baseApiUrl}/eletronics/${id}`).then(eletronicsRes => {
            setList(eletronicsRes.data)
        })
    })

    function getImovel(){
        console.log(list)
    }

    return (
        <div className="h-screen">
            <Header />
            <div className={`
                h-full w-full bg-gray-100 px-20 py-10
                flex flex-col items-center
            `}>
                <h1 className="text-3xl font-light uppercase">Descrição do Eletrônico</h1>
                <div className={`
                    w-full bg-gray-100 flex flex-col p-5
                `}>
                    <div className={`
                        w-full py-3 px-5 bg-white shadow my-7
                    `}>
                        <div className="flex flex-row my-1"><h1 className="mr-3 uppercase w-1/3 text-lg font-light">Nome do Doador:</h1>{list.name}</div>
                        <hr />
                        <div className="flex flex-row my-1"><h1 className="mr-3 uppercase w-1/3 text-lg font-light">Email do Doador:</h1>{list.email}</div>
                        <hr />
                        <div className="flex flex-row mt-1"><h1 className="mr-3 uppercase w-1/3 text-lg font-light">Eletrônico Doado:</h1>{list.eletronic}</div>
                    </div>
                    <div className={`
                        w-full py-5 px-2 mt-5 bg-white shadow
                    `}>
                        <h1 className="text-lg font-light uppercase">Descrição do Eletrônico</h1>
                        <hr />
                        <div className="mt-2 px-10">
                            <div dangerouslySetInnerHTML={{ __html: list.description}} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}