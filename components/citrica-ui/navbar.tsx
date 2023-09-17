import { Container } from "@citrica/objects"

const NavbarCUI = () => {
  return (
    <div className="p-5 absolute w-full bg-transparent">
      <Container className="flex flex-row justify-between">
          <div>
            Logo
          </div>
          <div>
            Burguer
          </div>
      </Container>
    </div>
  )
}

export default NavbarCUI