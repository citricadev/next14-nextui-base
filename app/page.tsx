import { Container, Col } from "@citrica/objects";
import Image from "next/image";

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
							alt="logo"/>
						<h2 className="display text-white">
							Exportacion, importacion y distribucion de carnes y menudencias
						</h2>
					</Col>
				</Container>
			</section>

			<Container className="bg-black text-white bg-">
				<Col cols={{ lg: 4, md: 6, sm: 4 }}>
					<h3 className="display">Header 3</h3>
				</Col>
				<Col cols={{ lg: 4, md: 6, sm: 4 }}>
					<h2>Header 3</h2>
				</Col>
				<Col cols={{ lg: 4, md: 6, sm: 4 }}>
					<h1 className="display">Header 1</h1>
				</Col>
			</Container>
			<Container className="bg-yellow-300">
				<Col cols={{ lg: 12, md: 6, sm: 4 }}>
					<div>
						Otra Fila
					</div>
				</Col>
			</Container>
			<Container>
				<Col cols={{ lg: 12, md: 6, sm: 4 }} className="flex flex-1 justify-center items-center h-screen bg-slate-300">
					<h1> TEXT CENTER </h1>
				</Col>
			</Container>
		</>
	);
}
