import { Container } from "@citrica/objects"
import NavbarCUI from "./navbar"

const HeaderCUI = () => {
	return (
		
			<Container className="flex justify-start items-center grow">
				<div className="flex flex-col items-start ml-[15%]">
					<img src="/logo-corp-jordi-gold-white 1.svg" alt="" />
					<h1 className=" font-normal text-5xl leading-[66px]">Exportacion, importacion <br />y distribucion de carnes <br />y menudencias</h1>
				</div>
			</Container>
		
	)
}

export default HeaderCUI