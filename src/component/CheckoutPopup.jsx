import React, { useState, useEffect, useRef } from "react";
import {FaArrowRight} from "react-icons/fa6";
import Logo from "../assets/logo.png";
import { IoIosCloseCircleOutline } from "react-icons/io"
import moment from 'moment';
import CarFormEntry from "./CarFormEntry";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

const CheckoutModal = ({company1, company2, tripinfo, car, setElement} ) => {

	const topreference = useRef(null);

	const [topValue, setTop] = useState(null);
	const [opacityValue, setOpacity] = useState(null);

	const deleteSelf = (s, o) => {
		enableBodyScroll(topreference.current);
		console.log(topValue, opacityValue, setOpacity);
		s("30%");
		o("0%");
		setTimeout(() => {setElement([])}, 700);
	}

	useEffect(() => {

		disableBodyScroll(topreference.current);

		setTop("0");
		setOpacity("100%");
	}, []);

        return (
		<>
                <div ref={topreference} className="fixed flex z-50 p-4 px-4 sm:px-12 w-auto h-auto min-h-[75vh] mt-12 transition-all duration-700 top-[30%] opacity-0 -translate-x-2/4 left-2/4 bg-white z-50 rounded-xl shadow-2xl" style={{top: topValue, opacity: opacityValue}}>
                        <div className="relative flex flex-row w-full gap-4 mt-12">
				<section className="flex grow justify-between flex-col">
						<CarFormEntry from={tripinfo.pickupLoc}
								to={tripinfo.dropoffLoc}
								range={`${moment(tripinfo.from).format("MMM DD")} - ${moment(tripinfo.to).format("MMM DD")}`}
								makeLink={false}
								immediateStyles={{flexGrow: "1", width: "100%", paddingLeft: "0", paddingRight: "0"}}/>
					<p className="break-words text-sm"> Online payment currently unavailable... Please pay at pickup branch.</p>
				</section>
				<span className="h-full w-[1px] grow self-end border-r-2 border-solid rounded-sm"/>
				<section className="flex shrink justify-between flex-col items-center">
					<img className="shrink object-scale-down max-w-[6em] sm:max-w-[8em] md:max-w-[15rem] lg:max-w-[20rem] self-end" src={car.carImage}/>
					<div>
						<p className="text-sm text-center">
							Amount: 250.0 SAR
						</p>
						<button className="bg-cyan-500 text-[0.5rem] sm:text-base rounded-full p-2 px-8 w-auto self-center">Confirm</button>
					</div>
				</section>

                        </div>
			<IoIosCloseCircleOutline onClick={() => deleteSelf(setTop, setOpacity)} className="absolute cursor-pointer w-[2em] h-[2em] right-5 top-5" />
                </div>
		<span className="fixed z-40 w-full h-full opacity-0 transition-opacity duration-1000 bg-[#000a]" style={{opacity: opacityValue}}></span>
		</>
        );
}

export default CheckoutModal;
