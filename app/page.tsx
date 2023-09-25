import { Container, Col } from "@citrica/objects";
import Card from "@/components/citrica-ui/card";
import Navbar from "@/components/citrica-ui/navbar";

export default function Home() {
	return (
		<>
			<Navbar/>
			<section className="hero-section">
				<h1 className="display"> DISPLAY TEXT</h1>
			</section>
		</>
	);
}
