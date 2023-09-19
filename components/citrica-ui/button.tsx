'use client'
type ButtonProps = {
  onClick: ()=> void
  label: string
}

const ButtonCUI = ({onClick, label}: ButtonProps) => {
  return (
    <button onClick={onClick} className=" flex justify-center items-center bg-gold-brand px-4 py-1">
      <span className="text-black btn ">
        {label}
      </span>
    </button>
  )
}

export default ButtonCUI