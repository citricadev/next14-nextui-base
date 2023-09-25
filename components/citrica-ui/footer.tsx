import { Container, Col } from "@citrica/objects";
import Link from "next/link"
const FooterCUI = () => {
  return (
    <>
      <footer className=" py-10 bg-black-brand">
        <Container className="flex justify-between">
          <Col cols={{lg:12, md:6, sm:4}}>
            FOOTER
          </Col>
        </Container>
      </footer>
    </>
  )
}

export default FooterCUI