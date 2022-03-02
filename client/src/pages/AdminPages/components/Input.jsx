export default function Input(props){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-1 text-white">
                {props.text}
            </label>
            <input 
                type={props.type ?? 'text'}
                value={props.value} 
                readOnly={props.readOnly}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border border-yellow-500 rounded-lg 
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}