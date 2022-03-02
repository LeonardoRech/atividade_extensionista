import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { ArrowDown } from "../../icons/index";

export default function Header(){
    const { authenticate ,logout } = useContext(AuthContext)

    const [dropMenu, setDropMenu] = useState('closeDropMenu')


    const handleLogout = () => {
        logout()
    }

    const showOrCloseDropMenu = () => {
        dropMenu === 'closeDropMenu' ? (setDropMenu('showDropMenu')):(setDropMenu('closeDropMenu'))
    }

    function renderDropMenu() {
        return (
            <div className={`
                mh-20 w-44 rounded
                flex flex-col absolute items-center 
                bg-red-300
            `}>
                <h1 className={`
                    w-full h-10 flex justify-center 
                    text-white text-md pt-2 rounded-t 
                    bg-gray-700 hover:bg-gray-600
                `}>
                    <a href="/admin">Admin</a>
                </h1>
                <h1 className={`
                    w-full h-10 flex justify-center
                    text-white text-md pt-2 rounded-b 
                    bg-gray-700 hover:bg-gray-600
                `}>
                    <button onClick={handleLogout}>Logout</button>
                </h1>
            </div>
        )
    }

    return(
        <div className={`
            h-28 py-7 flex flex-col justify-center items-center
            bg-gradient-to-r from-yellow-400 to-yellow-500
        `}>
            <h2 className={`
                text-3xl text-white font-light
                flex text-center mb-2
            `}
            >
                <a href="/">Tech Solidário</a>
            </h2>
            {localStorage.user ? (
                <div>
                    <div className={`
                        flex justify-center
                        h-10 w-44 rounded px-3 border-2
                        bg-yellow-400 hover:bg-amber-400
                    `}> 
                        <h1 className={`
                            flex flex-row justify-evenly items-center
                            w-full
                            text-white text-md
                        `}>{localStorage.userName} <button className="w-5" onClick={showOrCloseDropMenu}>{ArrowDown}</button></h1>
                    </div>
                    {dropMenu === 'closeDropMenu' ? (
                        false
                    ):(
                        <>
                            {renderDropMenu()}                        
                        </>
                    )}
                </div>
            ): (
                false
            )}
        </div>
    )
}