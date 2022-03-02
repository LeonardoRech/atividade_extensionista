import { IconHome, IconUser, IconLogout, ArrowLeft, IconTablet } from '../../../icons'
import MenuItem from './MenuItem'

export default function MenuLateral() {
    return (
        <aside className={`
            flex flex-col
            bg-neutral-300 text-neutral-700
            dark:bg-neutral-700 dark:text-neutral-200
        `}>
            <a href="/">
                <div className={`
                    flex flex-col items-center justify-center
                    h-14 w-full shadow bg-yellow-500 hover:bg-yellow-400
                `}>
                    
                        {ArrowLeft}
                    
                </div>
            </a>
            <ul className=' flex-grow '>
                <MenuItem href="/admin" text="Início" icon={IconHome} />
                <MenuItem href="/eletronicsadmin" text="Eletrônicos" icon={IconTablet} />
                <MenuItem href="/studentsadmin" text="Estudantes" icon={IconUser} />
            </ul>
            <ul>
                <MenuItem 
                    text="Sair" 
                    icon={IconLogout} 
                    className={`
                    text-red-600 dark:text-red-400
                    hover:bg-red-400 
                    hover:text-white
                    dark:hover:bg-neutral-800
                    `}
                />
            </ul>
        </aside>
    )
}