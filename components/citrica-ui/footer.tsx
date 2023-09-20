import { Container, Col } from "@citrica/objects";
import Link from "next/link"
const FooterCUI = () => {
  return (
    <>
      <footer className=" w-full  first-letter: py-10 bg-neutral-950 ">
        <Container >
          <Col cols={{ lg: 4, md: 2, sm: 2 }} className="center">
            <div className="">
              <span className="flex gap-5 h- mb-1 flex-wrap copy text-[color:_var(--Gray-mid,_#B3B3B2)] ">
                <picture className="">
                  <img src={'/img/mail.svg'} alt="mail logo" />
                </picture>
                info@corporacionjordi.com
              </span>
              <span className="flex gap-4 flex-wrap copy text-[color:_var(--Gray-mid,_#B3B3B2)] ">
                <picture>
                  <img src={'/img/call.svg'} alt="call logo" />
                </picture>
                <span>946 351 770</span>
              </span>
            </div>
          </Col>
          <Col cols={{ lg: 4, md: 2, sm: 2 }} className="center">
            <div className='' >
              <img className='center w-40 h-16' src="img/logo-corp-jordi-gold-white1.svg" />
            </div>
          </Col>
          <Col cols={{ lg: 4, md: 2, sm: 4 }} className="center">
            <div className="mt-[2px] w-[100%]">
              <div className="flex gap-8 mb-[16px]  justify-end">
                <Link href="#">
                  <img className="h-8" src="img/inde.svg" alt="inde icon" />
                </Link>
                <Link href="#">
                  <img className="h-8" src="img/face.svg" alt="face icon" />
                </Link>
              </div>
              <span className="flex flex-wrap-reverse justify-end copy  text-[color:_var(--Gray-mid,_#B3B3B2)]">
                Corporación Jordi - 2023 © Copyrights.
              </span>
              <span className="flex justify-end items-center flex-wrap copy text-[color:_var(--Gray-mid,_#B3B3B2)] ">
                All rights reserved.
              </span>
            </div>
          </Col>
        </Container>
      </footer>
    </>
  )
}
export default FooterCUI