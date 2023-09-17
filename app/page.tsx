import { Container, Col } from "@citrica/objects";
import Image from "next/image";
import Timeline from "@/components/timeline";

export default function Home() {
	return (
		<>
			<section className="hero-section">
				<Container className="flex flex-col h-screen justify-center">
					<Col cols={{ lg: 8, md: 6, sm: 4 }}>
						<Image
							className="mb-10"
							width={257}
							height={117}
							src="/img/logo-corporacion-jordi.png"
							alt="logo" />
						<h2 className="display text-white">
							Exportacion, importacion y distribucion de carnes y menudencias
						</h2>
					</Col>
				</Container>
			</section>
			<section className="about-us">
				<Container className="flex flex-col h-screen justify-between py-24">
					<Col cols={{ lg: 12, md: 6, sm: 4 }}>
						<h2 className="headline text-gold-brand">
							Quiénes somos
						</h2>
					</Col>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} className="flex flex-row justify-center">
						<button className="flex flex-col items-center">
							<Image
								className="mb-4"
								width={257}
								height={117}
								src="/img/play_circleplay-btn.png"
								alt="logo" />
							<h2 className="title">
								Ver video
							</h2>
						</button>
					</Col>
				</Container>
			</section>
			<section className="history-section">
				<Container className="py-24">
					<Col cols={{ lg: 10, md: 6, sm: 4 }}>
						<h2 className="headline text-gold-brand">
							Nuestra Historia
						</h2>
						<p className="copy text-white">
							Nuestro desarrollo organizacional se ha basado en escalar durante estos años el mercado peruano, y dar pasos agigantados con una nueva visión de hacer empresa, nuestro mayor logro ha sido representar a muchos emprendedores que empezaron con un sueño, y que con su esfuerzo rindieron frutos, aquí les compartimos nuestra historia.
						</p>
					</Col>
				</Container>
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }}>
						<Timeline />
					</Col>
				</Container>
			</section>
			<section className="mision-vision">
				<Container noPadding noLimit>
					<Col cols={{ lg: 6, md: 6, sm: 4 }} className='bg-red-brand'>
						<div className="p-20">
							<h2 className="headline text-gold-brand">Mision</h2>
							<p className="title text-white py-10">Ofrecer los mejores productos congelados y refrigerados para satisfacer las necesidades del mercado peruano.</p>
						</div>
					</Col>
					<Col cols={{ lg: 6, md: 6, sm: 4 }} className='bg-white'>
						<div className="p-20">
							<h2 className="headline text-gold-brand">Vision</h2>
							<p className="title py-10">Ser reconocidos como una empresa pionera en el desarrollo de productos alimenticios de la más alta calidad.</p>
						</div>
					</Col>
				</Container>
			</section>
			<section className="our-companies">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }}>
						<h2 className="headline text-gold-brand pt-24">Nuestras Empresas</h2>
					</Col>
				</Container>
				<Container className="pb-24">
					<Col cols={{ lg: 4, md: 6, sm: 4 }}>
						<div className="pt-10">
							<Image
								src={"/img/jds-food-logo.png"}
								width={102}
								height={62}
								alt="jordi logo"
							/>
							<p className="copy text-white mt-10"> Broker internacional Líder en el desarrollo y mejoramiento de productos alimenticios congelados y refrigerados, de la mano con empresas americanas. Fue fundada el 2015 en New Jersey, Usa. Exporta diferentes productos bajo minuciosos procesos a diferentes países de Latinoamérica, principalmente al Perú.
							</p>
						</div>
					</Col>
					<Col cols={{ lg: 4, md: 6, sm: 4 }}>
						<div className="pt-10">
							<Image
								src={"/img/jordi-logo.png"}
								width={102}
								height={62}
								alt="jordi logo"
							/>
							<p className="copy text-white mt-10">
								Importación, distribución, y procesado de carnes angus americana y uruguaya, productos premium procesados y venta de vinos, licores e implementos  para la parrilla.
							</p>
						</div>
					</Col>
					<Col cols={{ lg: 4, md: 6, sm: 4 }}>
						<div className="pt-10">
							<Image
								src={"/img/hollyfood-logo.png"}
								width={102}
								height={62}
								alt="jordi logo"
							/>
							<p className="copy text-white mt-10">
								1er restaurante temático, interactivo y dinámico de comida americana en Peru
							</p>
						</div>
					</Col>
				</Container>
			</section>
			<section className="our-brands" >
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }}>
						<h2 className="headline text-gold-brand">Nuestras Marcas</h2>
					</Col>
				</Container>
				<Container>
					<Col cols={{ lg: 3, md: 6, sm: 4 }} className="center">
							LOGO A
					</Col>
					<Col cols={{ lg: 3, md: 6, sm: 4 }} className="center">
							LOGO A
					</Col>
					<Col cols={{ lg: 3, md: 6, sm: 4 }} className="center">
							LOGO A
					</Col>
					<Col cols={{ lg: 3, md: 6, sm: 4 }} className="center">
							LOGO A
					</Col>
				</Container>
				<Container>
					<Col cols={{ lg: 4, md: 6, sm: 4 }} className="center">
						A
					</Col>
					<Col cols={{ lg: 4, md: 6, sm: 4 }} className="center">
						B
					</Col>
					<Col cols={{ lg: 4, md: 6, sm: 4 }} className="center">
						C
					</Col>
				</Container>
			</section>
		</>
	);
}
