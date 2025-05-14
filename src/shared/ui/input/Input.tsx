import "./Input.scss"

type InputProps = {
    placeholder: string
}

const Input = ({placeholder}: InputProps)  => {
    return (
        <input className='input bg-white h-4 title-7 w-full rounded-xl' placeholder={placeholder}/>
    )
}

export default Input