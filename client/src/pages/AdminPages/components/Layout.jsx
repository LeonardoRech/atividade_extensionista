import MenuLateral from "./MenuLateral"
import Header from './Header'
import Content from './Content' 


export default function Layout(props){
    return (
        <div className={`
            flex h-screen w-screen 
        `}>
            <MenuLateral />
            <div className={`
                flex flex-col w-full p-7 
                bg-neutral-200
                dark:bg-neutral-800
            `}>
                <Header title={props.title} subtitle={props.subtitle}/>
                <Content>
                    {props.children}
                </Content>
            </div>

        </div>
    )
}