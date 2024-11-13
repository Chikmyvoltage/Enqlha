const Root = ({children}) => {
	return (
		<div id="approot" className="bg-white antialiased selection:bg-cyan-300 selection:text-cyan-900 poppins">
		  {children}
		</div>
	);
}

export default Root;
