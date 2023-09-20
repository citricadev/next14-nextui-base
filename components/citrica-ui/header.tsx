import { Container } from "@citrica/objects"
import NavbarCUI from "../next-ui/navbar"

const HeaderCUI = () => {
	return (
		
			<Container className="flex justify-start items-center grow">
				<div className="flex flex-col items-start ml-[15%] gap-12">
					<img src="/logo-corp-jordi-gold-white 1.svg" alt="" />
					<h1 className=" font-normal text-6xl leading-[66px]">Exportacion, importacion <br />y distribucion de carnes <br />y menudencias</h1>
				</div>
			</Container>
		
	)
}

export default HeaderCUI