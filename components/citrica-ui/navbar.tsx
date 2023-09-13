import { Container } from "@citrica/objects"

const NavbarCUI = () => {
  return (
    <div className="bg-amber-600 p-5">
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