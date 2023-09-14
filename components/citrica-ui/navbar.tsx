import { Container } from "@citrica/objects"

const NavbarCUI = () => {
  return (
    <div className=" relative bg-[url('/ScreenShot2023-08-04.png')] h-[982px] bg-center flex items-center">
      <Container className="flex flex-row justify-between">
          <div className="flex flex-col items-start">
            <img src="/logo-corp-jordi-gold-white 1.svg" alt="" />
            <h1 className=" font-normal text-5xl leading-[66px]">Exportacion, importacion <br />y distribucion de carnes <br />y menudencias</h1>
          </div>
          <div className="">
            Burguer
          </div>
      </Container>
    </div>
  )
}

export default NavbarCUI