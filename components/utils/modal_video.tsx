
// modal componente 

"use client";
import React from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function ModalVideo(props: { showModal: any; onClose: any; }) {

	const { showModal, onClose } = props;

	return (
		<>
			<Modal isOpen={showModal} onOpenChange={() => null}>
				<ModalContent className="flex flex-col items-center bg-[rgba(23,29,27,0.9)] top-0 left-0 w-full p-4 z-50">
					<ModalBody className=" top-0 left-0 w-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] " >
						<iframe
							className=""
							src={`https://www.youtube.com/embed/H8-Umg2T3p8`}
							allow="acelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="youtube"
						/>
						<Button onPress={() => onClose()} className="flex justify-center">
							<a className="" href="#">
								Cerrar
							</a>
						</Button>

					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
