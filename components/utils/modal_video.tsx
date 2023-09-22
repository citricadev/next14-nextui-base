
// modal componente 

"use client";
import React from "react";

export default function ModalVideo( props: {showModal: any; onClose: any;}) {

	const { showModal, onClose } = props;

	return (
		<>
			{
				showModal && (
					<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-[rgba(0,0,0,0.5)]">
						<div className="flex flex-col fixed bg-[#fffaf4] top-0 left-0 w-full h-full p-4 rounded-2xl z-10">
							<div className="flex justify-end text-3xl z-20" >
								<a onClick={() => onClose(event)} className="">
									x
								</a>
							</div>
							<div className="h-full flex justify-center items-center">
								<iframe
									className=" h-[480px] w-[854px]"
									src={`https://www.youtube.com/embed/1rI8z07U50M`}
									allow="acelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									title="youtube"
								/>
							</div>
						</div>
					</div>
				)
			}
		</>
	);
}
