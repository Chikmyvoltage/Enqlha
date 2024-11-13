import { useLoaderData, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { getCars } from "../services/carService";
import CheckoutPopup from "../component/CheckoutPopup";
import NavbarHamburger from "../component/NavbarHamburger";
import Navbar from "../component/Navbar";
import Root from "../component/Root";
import Footer from "../component/Footer";
import Logo from "../assets/logo.png"

export const loader = async ({params}) => {

	const contextData = await getCars(Number(params.tripID));
	return contextData;
}


const TripsPage = () => {
	const contextData = useLoaderData();
	const params = useParams();

	const [checkout_element, setElement] = useState([]);

	const checkoutPopup = (car_index) => {

		const elm = <CheckoutPopup company1={contextData.pickupCompany}
					company2={contextData.dropoffCompany}
					tripinfo={contextData.trip}
					car={contextData.pickupCompany.cars[car_index]}

					setElement={setElement}/>;
		setElement(elm);

	};

	const hamburgerref = useRef(null);
	const Trips = () => (
		<div className="w-full flex flex-col min-h-screen h-full">
		  <div className="container mx-auto mt-48 px-8 relative grow mb-24">
		    <h1 className="text-2xl">Cars in company {contextData.pickupCompany.name}</h1>
		    <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 px-12 rounded-lg justify-between">
		{contextData.pickupCompany.cars.map((car, index) => { return (
			<div key={index} onClick={() => checkoutPopup(index)} className="border-2 aspect-[1] border-solid m-2 md:m-4 lg:m-12 rounded-2xl p-2 shadow-lg flex flex-col cursor-pointer">
				<img src={car.carImage} draggable={false} className="select-none aspect-[1] h-[80%]"/>
				<hr/>
				<h2 className="self-center text-lg lg:text-2xl">{car.carName}</h2>
				<p className={car.available ? "self-center text-green-500" : "self-center text-red-500"}>{car.available ? "Available" : "Unavailable"}</p>
			</div>);
		})}
		    </span>
		  </div>
		  <Footer/>
		</div>
	)
	return (
		<Root>
		  <NavbarHamburger hamburgerref={hamburgerref}/>
		  <Navbar dark={true} hamburgerref={hamburgerref}/>
		  {checkout_element}
		  <Trips/>
		</Root>
	);
}

export default TripsPage;
