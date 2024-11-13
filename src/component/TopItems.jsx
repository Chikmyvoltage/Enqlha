const TopItems = (children) => {
	return (
		<>
		  <div className="w-full relative h-[50vh] md:h-[65vh] bg-slate-950">
			{children.children}
		  </div>
		</>
	);

}

export default TopItems;
