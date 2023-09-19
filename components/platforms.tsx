'use client'
import { Col } from "@citrica/objects";
import Card from "./citrica-ui/card";

const Platforms = () => {
  return (
    <>
      <Col cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/jds-food-logo.png'}
          description={'Desarrollo y mejoramiento de productos alimenticios congelados y refrigerados'}
          btnLabel={'Button'}
          btnAction={() => console.log('BTN')}
        />
      </Col>
      <Col cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/jordi-logo.png'}
          description={'Importación, distribución, y procesado de carnes angus americana y uruguaya, productos premium procesados y venta de vinos, licores e implementos  para la parrilla.'}
          btnLabel={'Button'}
          btnAction={() => console.log('BTN')}
        />
      </Col>
      <Col cols={{ lg: 4, md: 3, sm: 4 }}>
        <Card
          imageUrl={'/img/hollyfood-logo.png'}
          description={'Restaurante temático, interactivo y dinámico de comida americana.'}
          btnLabel={'Button'}
          btnAction={() => console.log('BTN')}
        />
      </Col>
    </>
  )
}

export default Platforms