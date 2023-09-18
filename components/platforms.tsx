'use client'
import { Col } from "@citrica/objects";
import Card from "./citrica-ui/card";

const Platforms = () => {
  return (
    <>
      <Col cols={{ lg: 4, md: 6, sm: 4 }}>
        <Card
          imageUrl={'/img/greater-omaha-logo.png'}
          description={'Desarrollo y mejoramiento de productos alimenticios congelados y refrigerados'}
        />
      </Col>
      <Col cols={{ lg: 4, md: 6, sm: 4 }}>
        <Card
          imageUrl={'/img/greater-omaha-logo.png'}
          description={'Desarrollo y mejoramiento de productos alimenticios congelados y refrigerados'}
        />
      </Col>
      <Col cols={{ lg: 4, md: 6, sm: 4 }}>
        <Card
          imageUrl={'/img/greater-omaha-logo.png'}
          description={'Desarrollo y mejoramiento de productos alimenticios congelados y refrigerados'}
          btnLabel={'Click acá'}
          btnAction={() => console.log('BTN')}
        />
      </Col>
    </>
  )
}

export default Platforms