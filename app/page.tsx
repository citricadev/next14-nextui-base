import { Container, Col } from "@citrica/objects";
import Image from "next/image";
import Timeline from "@/components/timeline";
import Card from "@/components/citrica-ui/card";
import Platforms from "@/components/platforms";
import Sectionvideo from "@/components/citrica-ui/sectionvideo";

export default function Home() {
	return (
		<>
			
			<section id="hero-section" className="hero-section">
				<Container className="flex flex-col h-screen justify-center">
					<Col cols={{ lg: 8, md: 6, sm: 4 }} className="animate-fade-right">
						<Image
							className="mb-10"
							width={257}
							height={117}
							src="/img/logo-corporacion-jordi.png"
							alt="logo" />
						<h2 className="display text-white">
							Exportacion, importacion <br />y distribucion de carnes <br />y menudencias
						</h2>
					</Col>
				</Container>
			</section>
			<section id="about-us" className="about-us">
				<Sectionvideo/>
			</section>
			<section id="history-section" className="history-section">
				<Container>
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
			<section id="mision-vision" className="mision-vision">
				<Container noPadding>
					<Col cols={{ lg: 6, md: 6, sm: 4 }} className="mision-vision-item-left">
						<div className="py-6">
							<h2 className="headline text-gold-brand">Mision</h2>
							<p className="title text-white">Ofrecer los mejores productos congelados y refrigerados para satisfacer las necesidades del mercado peruano.</p>
						</div>
					</Col>
					<Col cols={{ lg: 6, md: 6, sm: 4 }}>
						<div className="pl-4 py-6">
							<h2 className="headline text-gold-brand">Vision</h2>
							<p className="title">Ser reconocidos como una empresa pionera en el desarrollo de productos alimenticios de la más alta calidad.</p>
						</div>
					</Col>
				</Container>
			</section>
			<section id="our-companies" className="our-companies">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }}>
						<h2 className="headline text-gold-brand mb-16">Nuestras Empresas</h2>
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
			<section id="our-brands" className="our-brands" >
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} className="mb-16">
						<h2 className="headline text-gold-brand">Nuestras Marcas</h2>
					</Col>
				</Container>
				<Container>
					<Col cols={{ lg: 3, md: 3, sm: 4 }} className="center mb-14">
						<Image width={194} height={165} src={'/img/angus-golden-beef.png'} alt="angus logo" />
					</Col>
					<Col cols={{ lg: 3, md: 3, sm: 4 }} className="center mb-14">
						<Image width={194} height={165} src={'/img/premium-black-angus.png'} alt="angus logo" />
					</Col>
					<Col cols={{ lg: 3, md: 3, sm: 4 }} className="center mb-14">
						<Image width={194} height={165} src={'/img/sur-meat-cow.png'} alt="angus logo" />
					</Col>
					<Col cols={{ lg: 3, md: 3, sm: 4 }} className="center mb-14">
						<Image width={194} height={165} src={'/img/american-golden-pork.png'} alt="angus logo" />
					</Col>
				</Container>
				<Container>
					<Col cols={{ lgPush: 2, lg: 8, md: 6, sm: 4 }}>
						<Container noPadding>
							<Col cols={{ lg: 4, md: 2, sm: 4 }} className="center mb-14">
								<Image width={194} height={165} src={'/img/sur-meat-pork.png'} alt="angus logo" />
							</Col>
							<Col cols={{ lg: 4, md: 2, sm: 4 }} className="flex justify-center items-center mb-14">
								<Image width={194} height={165} src={'/img/hollyfood.png'} alt="angus logo" />
							</Col>
							<Col cols={{ lg: 4, md: 2, sm: 4 }} className="center mb-14">
								<Image width={194} height={165} src={'/img/blanqui-roja.png'} alt="angus logo" />
							</Col>
						</Container>
					</Col>
				</Container>
			</section>
			<section id="our-partners" className="our-partners">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }} >
						<h2 className="headline text-gold-brand">Nuestros socios estratégicos</h2>
					</Col>
				</Container>
				<Container>
					<Col cols={{ lg: 6, md: 6, sm: 4 }} >
						<div className="h-44 flex flex-col-reverse">
							<picture>
								<img src={'/img/greater-omaha-logo.png'} alt="Grater Omaha logo" />
							</picture>
						</div>
						<p className="copy py-5">Greater Omaha es una empresa estadounidense ubicada en Omaha, Nebraska especializada en la producción de carne de res premium </p>
					</Col>
					<Col cols={{ lg: 6, md: 6, sm: 4 }} >
						<div className="h-44 flex flex-col-reverse">
							<picture>
								<img src={'/img/somave-logo.png'} alt="Somave logo" />
							</picture>
						</div>
						<p className="copy py-5">Grater Omaha es una empresa estadounidense ubicada en Omaha, Nebraska especializada en la producción de carne de res premium </p>
					</Col>
				</Container>
			</section>
			<section id="contact-section" className="contact-section">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }}>
						<div className="h-96 flex flex-col justify-center">
							<h2 className="headline text-gold-brand">Contáctanos</h2>
							<div className="flex gap-[32px] flex-row flex-wrap">
								<span className="flex  text-white gap-[16px] items-center ">
									<picture>
										<img src={'/img/call.svg'} alt="call logo" />
									</picture>
									946 351 770
								</span>
								<span className="flex  text-white gap-[16px] items-center">
									<picture>
										<img src={'/img/mail.svg'} alt="mail logo" />
									</picture>
									info@corporacionjordi.com
								</span>
							</div>
						</div>
					</Col>
				</Container>
			</section>
			<section id="platforms" className="platforms">
				<Container>
					<Col cols={{ lg: 12, md: 6, sm: 4 }}>
						<h2 className="headline text-gold-brand">Plataformas</h2>
					</Col>
				</Container>
				<Container>
					<Platforms />
				</Container>
			</section>
		</>
	);
}
