import Logo from "../assets/logo.png";


const Footer = () => {
	return (
		<footer className="flex z-20 flex-col justify-center text-white bg-white">
			<div className="flex justify-center items-center px-16 py-14 w-full bg-black max-md:px-5 max-md:max-w-full">
				<div className="flex flex-col w-full max-w-[1206px] max-md:max-w-full">
					<img src={Logo} alt="Company Logo" className="max-w-full aspect-[3.85] w-[210px]"/>
					<hr className="shrink-0 mt-24 h-px bg-white border border-white border-solid max-md:mt-10 max-md:max-w-full"/>
					<nav className="flex gap-5 justify-between self-start mt-4 text-sm font-medium">
						<a href="/privacy-policy">Privacy Policy</a>
						<a href="/tos">Terms & Conditions</a>
					</nav>
					<div className="mt-3.5 text-xs max-md:max-w-full">
						© 2024 All Rights Reserved
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
