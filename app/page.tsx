import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Container, Col } from "@citrica/objects"

export default function Home() {
	return (
		<section>
			<div className="bg-lime-400">
				<Container className="flex flex-row h-36 justify-around items-center">
					<h1 className="display">HERO BANER</h1>
					<h2>Tagline</h2>
				</Container>
			</div>
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
		</section>
	);
}
