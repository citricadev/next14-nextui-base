"use client";
import { Container, Col } from "@citrica/objects";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "../utils/modal_video";

export default function Sectionvideo() {
	const [showModal, setshowModal] = useState(false);
	
	
	return (
		<>
			<ModalVideo showModal={showModal} onClose={() => setshowModal(false)}/>
			<Container className="flex flex-col h-screen justify-between">
				<Col cols={{ lg: 12, md: 6, sm: 4 }}>
					<h2 className="headline text-gold-brand">
						Quiénes somos
					</h2>
				</Col>
				<Col cols={{ lg: 12, md: 6, sm: 4 }} className="flex flex-row justify-center">
					
					<Button onPress={() => setshowModal(true)} className="flex flex-col items-center">
						<Image
							className="mb-4"
							width={257}
							height={117}
							src="/img/play_circleplay-btn.png"
							alt="logo" />
						<h2 className="title">
							Ver video
						</h2>
					</Button>
				</Col>
			</Container>

		</>
	);
}
