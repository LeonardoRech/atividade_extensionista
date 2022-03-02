import Title from "./Title"
export default function Header(props){

    return (
        <div className="flex">
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className="flex flex-grow justify-end">
                
            </div>
        </div>
    )
}