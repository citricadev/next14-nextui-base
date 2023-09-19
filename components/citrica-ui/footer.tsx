import Link from "next/link"
const FooterCUI = () => {
  return (
    <>
      <footer className="w-full flex items-center justify-center py-10 bg-neutral-950 text-white">

        <section className='flex justify-around w-screen h-[192px] items-center'>

          <div className="flex gap-[13px] flex-col flex-row flex-wrap">
            <span className="flex justify-start text-white gap-[16px] items-center">
              <picture>
                <img src={'/img/mail.svg'} alt="mail logo" />
              </picture>
              info@corporacionjordi.com
            </span>
            <span className="flex justify-start text-white gap-[16px] items-center ">
              <picture>
                <img src={'/img/call.svg'} alt="call logo" />
              </picture>
              946 351 770
            </span>
          </div>
          <div className='' >
            <img className='w-[150px] h-[65px]' src="img/logo-corporacion-jordi.png" />
          </div>
          <div className="flex justifi-end flex-col">
            <div className="flex justify-end gap-7  mb-3">
              <Link href="#">
                <img className="h-8" src="img/inde.svg" alt="inde icon" />
              </Link>
              <Link href="#">
                <img className="h-8" src="img/face.svg" alt="face icon" />
              </Link>
            </div>
            <span className="">
              Corporación Jordi - 2023 © Copyrights.</span>
            <span className="flex justify-end items-start">All rights reserved.</span>
          </div>
        </section>

      </footer>
    </>
  )
}

export default FooterCUI