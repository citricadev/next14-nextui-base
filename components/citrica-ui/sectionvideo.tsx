"use client";
import { Container, Col } from "@citrica/objects";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "../utils/modal_video";
import { Link } from "@nextui-org/link";

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
				<Col cols={{ lg: 12, md: 6, sm: 4 }} className="flex flex-col justify-center items-center">
					<a onClick={() => setshowModal(true)} href="#about-us">
						<picture className=" flex justify-center">
          		<img src="/img/play_circleplay-btn.png" alt="black"/>
        		</picture>
					</a>
					<Button onPress={() => setshowModal(true)} className="flex w-[200px] justify-center items-center p-4 pt-2">
						<h2 className=" flex items-center justify-center title">
							Ver video
						</h2>
					</Button>
				</Col>
			</Container>

		</>
	);
}
