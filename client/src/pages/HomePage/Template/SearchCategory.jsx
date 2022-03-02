export default function SearchCategory() {

    return(
        <div className="bg-gray-100 h-full">
            <div className={`
                flex items-center justify-center
                h-40 px-5 text-center
            `}>
                <h1 className={`
                    text-2xl uppercase
                `}>Escolha Uma Opção para Doar ou Receber Eletrônicos</h1>
            </div>
            <div className={`
                flex flex-col justify-evenly items-center
                h-12 w-full py-20
            `}>
                <a href="/eletronics">
                    <button className={`
                        w-32 h-10 mb-20  rounded shadow uppercase 
                        text-white font-semibold
                        bg-yellow-400 hover:bg-yellow-300
                    `}>Doador</button>
                </a>
                <a href="/student">
                    <button className={`
                        w-32 h-10 rounded shadow uppercase 
                        text-white font-semibold
                        bg-yellow-400 hover:bg-yellow-300
                    `}>Estudante</button>
                </a>
            </div>
        </div>
    )
}