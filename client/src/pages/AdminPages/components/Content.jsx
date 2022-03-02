export default function Content(props){
    return (
        <div className={`
            flex flex-col mt-7
        `}>
            {props.children}
        </div>
    )
}