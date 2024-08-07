import { Container, Col } from "@citrica/objects";
import Card from "@/components/citrica-ui/card";
import Navbar from "@/components/citrica-ui/navbar";

export default function Home() {
	return (
		<>
			<section className="hero-section">
				<h1 className="display"> DISPLAY TEXT</h1>
				<div className="only-xs">
					ONLY XS
				</div>
				<div className="only-sm">
					ONLY SM
				</div>
				<div className="only-md">
					ONLY MD
				</div>
				<div className="only-lg">
					ONLY LG
				</div>
				<section className="pb-10">
					<Container>
						<Col cols={{lg:4, md:2, mdPush: 1, sm:2,xs:2}}>
							<div className="bg-teal-300 center p-4">
								I
							</div>
						</Col>
						<Col cols={{lg:4,md:2,sm:2,xs:2}}>
							<div className="bg-teal-300 center p-4">
								II
							</div>
						</Col>
						<Col cols={{lg:4,md:2,sm:2,xs:2}}>
							<div className="bg-teal-300 center p-4">
								III
							</div>
						</Col>
					</Container>
				</section>
				<Container>
					<Col cols={{lg:3,md:2,sm:2,xs:2}}>
						<div className="bg-teal-300 center p-4">
							1
						</div>
					</Col>
					<Col cols={{lg:3,md:2,sm:2,xs:2}}>
					<div className="bg-teal-100 center p-4">
						2
						</div>
					</Col>
					<Col cols={{lg:3,md:2,sm:2,xs:1}}>
					<div className="bg-teal-600 center p-4">
						3
						</div>
					</Col>
					<Col cols={{lg:3,md:2,sm:2,xs:1}}>
					<div className="bg-teal-800 center p-4">
						4
						</div>
					</Col>
				</Container>
			</section>
		</>
	);
}
