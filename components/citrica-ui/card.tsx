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
    <div className="flex flex-col justify-between bg-black-brand p-10 mb-8 rounded-2xl">
      {imageUrl && (
        <picture>
          <img src={imageUrl} alt=""/>
        </picture>
      )}
      {description && (
        <p className="copy text-white mt-10">{description}</p>
      )}
      {btnAction && btnLabel && (
        <div>
          <ButtonCUI label={btnLabel} onClick={btnAction}/>
        </div>
      )}

    </div>
  )
}

export default Card