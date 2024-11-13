import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";

const CarCollection = () => {


	return (
		<>
		  <div className="w-full flex flex-col items-center gap-16 mt-200 md:mt-40 mb-20">
		    <div className="w-full flex flex-col items-center gap-4">
		      <h1 className="text-[#7F778F] text-lg md:text-2xl font-bold px-3">
			Our Collection of Destinated Cars
		      </h1>
		      <p className="text-sm font-medium text-[#333333] px-6">
			Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience.
		      </p>
		    </div>
		    <div className="w-full relative">
		      <div className="cursor-pointer absolute rounded-full z-20 left-[20%] md:left-[20.5%]  top-[22%] md:top-[20%] bg-white flex items-center justify-center p-2 md:p-4">
			<FaArrowLeft/>
		      </div>
		      <div className="w-full min-h-[200px] relative">
			<span></span>
		      </div>
		      <div className="cursor-pointer absolute rounded-full z-20 right-[20.5%] top-[22%] md:top-[20%] bg-white flex items-center justify-center p-2 md:p-4">
		        <FaArrowRight/>
		      </div>
		    </div>
		  </div>
		</>
	);
}

export default CarCollection;
