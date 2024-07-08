import { Container, Col } from "@citrica/objects";

export default function Docs() {
	return (
		<>
			<section className="hero-section">
				<h1 className="display">Display</h1>
				<h2 className="headline">Headline</h2>
				<h3 className="title">Title</h3>
				<h3 className="subtitle">Subtitle</h3>
				<p className="copy">Copy</p>
				<p><span className="body">Body</span></p>
        <p className="label">Label</p>
				<p><span className="label">Label</span></p>
				<div className="bg-slate-500 text-cyan-600 center title only-xs">
					ONLY XS
				</div>
				<div className="bg-slate-500 center title only-sm">
					ONLY SM
				</div>
				<div className="bg-slate-500 center title only-md">
					ONLY MD
				</div>
				<div className="bg-slate-500 center color-primary title only-lg">
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
