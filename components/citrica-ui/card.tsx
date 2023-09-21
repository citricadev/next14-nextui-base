'use client'
import ButtonCUI from "./button"

type CardProps = {
  imageUrl?:string | null
  title?:string | null
  description?:string | null
  btnLabel?:string | null  
  btnAction?: ()=> void | null
}
const Card = ({imageUrl, title, description, btnLabel, btnAction}: CardProps) => {
  return (
    <div className="flex flex-col bg-black-brand p-10 mb-8 rounded-2xl">
      {imageUrl && (
        <picture>
          <img src={imageUrl} alt=""/>
        </picture>
      )}
      {description && (
        <p className="copy text-white mt-10 text-sm font-medium leading-6 tracking-wider">{description}</p>
      )}
      {btnAction && btnLabel && (
        <div className="mt-8 flex justify-stard items-end flex-auto">
          <ButtonCUI label={btnLabel} onClick={btnAction}/>
        </div>
      )}

    </div>
  )
}

export default Card