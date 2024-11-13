import Logo from "../assets/logo.png";
import {Link} from "react-router-dom";

const CarFormEntry = (props) => {
	const from_loc = props.from ? props.from : "Unknown";
	const to_loc = props.to ? props.to : "Unknown";
	const timerange = props.range ? props.range : "Unknown range";

	const company1 = props.logo1 ? props.logo1 : Logo;
	const company2 = props.logo2 ? props.logo2 : Logo;
	const cID = props.id;

	const ConditionalLink = (props) => {
		if (props.makeLink) {
			return (
			<Link to={`/trips/${cID}`} className={"w-full " + (props.innerClass || "")}>
			  <div className="w-full flex flex-col">
				<span className="md:hidden block self-center text-nowrap">Available {timerange}</span>
				<div className="flex flex-row justify-around w-max self-center">
					<img src={company1} className="h-[2em] sm:h-[3em] aspect-[3]"/>
					<span className="hidden md:block">Available <br/>{timerange}</span>
					<img src={company2} className="h-[2em] sm:h-[3em] aspect-[3]"/>
				</div>
				<div className="justify-around flex flex-row gap-3">
					<span>{from_loc}</span>
					<hr className="w-full self-center border-t-4 border-slate-400 border-dotted"/>
					<span>{to_loc}</span>
				</div>
			  </div>
			</Link>
			);
		} else {
			return (
			  <div className={"w-full flex flex-col " + (props.innerClass || "")}>
				<span className="md:hidden block self-center text-nowrap">Available {timerange}</span>
				<div className="flex flex-row justify-around w-max">
					<img src={company1} className="h-[2em] sm:h-[3em] aspect-[3] object-scale-down"/>
					<span className="hidden md:block">Available<br/>{timerange}</span>
					<img src={company2} className="h-[2em] sm:h-[3em] aspect-[3] object-scale-down"/>
				</div>
				<div className="justify-around flex flex-row gap-3">
					<span>{from_loc}</span>
					<hr className="w-full self-center border-t-4 border-slate-400 grow border-dotted"/>
					<span>{to_loc}</span>
				</div>
			  </div>
			);
		}
	}
	return (
		<div className={`flex w-full p-6 px-4 xl:px-24 shadow-slate-200 rounded-2xl ${ props.makeLink ? "mt-10 shadow-xl hover:border-slate-500 hover:border-2 transition-colors cursor-pointer" : props.className || ""}`} style={{...props.immediateStyles}}>
			<ConditionalLink {...props}/>	
		</div>
	);
};

export default CarFormEntry;
