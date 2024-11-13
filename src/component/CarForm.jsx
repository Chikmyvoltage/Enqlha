import { useState, useRef } from 'react';
import {PiCaretDown} from "react-icons/pi";
import {CiSearch} from "react-icons/ci";
import Select from "react-select";
import Logo from "../assets/logo.png";
import DatePicker from "./DatePicker";
import CarFormEntry from "./CarFormEntry";

const CarForm = () => {

	const options = [
		{ value: "Riyadh South", label: "Riyadh South" },
		{ value: "Riyadh West", label: "Riyadh West" },
		{ value: "Riyadh East", label: "Riyadh East" },
		{ value: "Riyadh North", label: "Riyadh North" },
		{ value: "Riyadh City Center", label: "Riyadh City Center" },
		{ value: "Dammam South", label: "Dammam South" },
		{ value: "Dammam West", label: "Dammam West" },
		{ value: "Dammam East", label: "Dammam East" },
		{ value: "Dammam North", label: "Dammam North" },
		{ value: "Dammam City Center", label: "Dammam City Center" }
	];
	const dropoffOptions = [
		{ value: "Riyadh South", label: "Riyadh South" },
                { value: "Riyadh West", label: "Riyadh West" },
                { value: "Riyadh East", label: "Riyadh East" },
                { value: "Riyadh North", label: "Riyadh North" },
                { value: "Riyadh City Center", label: "Riyadh City Center" },
                { value: "Dammam South", label: "Dammam South" },
                { value: "Dammam West", label: "Dammam West" },
                { value: "Dammam East", label: "Dammam East" },
                { value: "Dammam North", label: "Dammam North" },
                { value: "Dammam City Center", label: "Dammam City Center" }
        ];
	const [available_entries, setEntries] = useState([]);
	const [select_data, setData] = useState([null, null, null, null]);
	const loader = useRef(null);

	const [destinatedStyle, setDStyle] = useState({color: "#AEADB5", backgroundColor: "#E7E7E7"});
	const [undestinatedStyle, setUStyle] = useState({color: "#FFF", backgroundColor: "#7F778F"});

	const FormItem = (props) => {
		const span_length = props.span_length ? props.span_length : "3";
		return (<>
		  <div className="flex flex-col gap-2 space-y-2" style={{gridColumn: `span ${span_length} / span ${span_length}`}}>
		    {props.children}
		  </div>
		</>);
	};

	const mutateData = (index, data) => {

		select_data[index] = data;
		console.log(select_data);
		setData(select_data);
	};

	// TODO: Use react hook forms + zod(?)
	const handleSearch = (e) => {
		e.preventDefault();
		setEntries([]);
		loader.current.classList.remove("hidden");
		setTimeout(() => {
			const entries = [];
			// TESTING
			const cities = ["DMM", "RYD", "HFF"];
			const cardinals = ["WEST", "SOUTH", "CENTRE", "EAST", "NORTH"].sort(() => 0.6 < Math.random() ? -1 : 1);
			for (let i = 0; i < 3; i++) {
				console.log((1-(i)) % 2);
				entries.push(<li key={i}><CarFormEntry id={i+1} makeLink={true} from={select_data[0].value} to={select_data[1].value} range={`${select_data[2].date.format("MMM DD")} - ${select_data[3].date.format("MMM DD")}`}/></li>);
			}
			loader.current.classList.add("hidden");
			setEntries(entries);
		}, 2000);
	}

	const destinatedButtons = (n) => {

		const activeStyle = {color: "#AEADB5", backgroundColor: "#E7E7E7"};
		const inactiveStyle = {color: "#FFF", backgroundColor: "#7F778F"};
		if (!n) {
			setUStyle(inactiveStyle);
			setDStyle(activeStyle);
		} else {
			setDStyle(inactiveStyle);
			setUStyle(activeStyle);
		}
	}
	return (
		<>
		  <div className="relative bottom-20 md:px-6 lg:px-24 w-full">
		    <div className="w-full flex flex-col">
		      <div className="w-fit flex items-center">
		        <div className="flex cursor-pointer items-center text-sm font-medium  justify-center p-4 rounded-t-lg" style={destinatedStyle} onClick={() => destinatedButtons(0)}>Destinated</div>
		        <div className="flex cursor-pointer items-center text-sm font-medium  justify-center p-4 rounded-t-lg" style={undestinatedStyle} onClick={() => destinatedButtons(1)}>Undestinated</div>
		      </div>
		      <form className="w-full md:grid p-8 md:grid-cols-11 flex flex-col gap-3 md:gap-6 backdrop-blur-md" style={{borderRadius: "0px 16px 16px", background: "#fffd"}} onSubmit={handleSearch}>
			<FormItem>
			  <label className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
			    Pick up location
			  </label>
			  <Select options={options} required={true} name="from" onChange={(newValue) => mutateData(0, newValue)} placeholder="Search a location"/>
			</FormItem>
			<FormItem>
			  <label className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
			    Drop-off location
			  </label>
			  <Select options={dropoffOptions} required={true} name="to" onChange={(newValue) => mutateData(1, newValue)} placeholder="Search a location"/>
			</FormItem>
			<FormItem span_length="2">
			  <label className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
			    Pick-up date
			  </label>
			  <DatePicker onChange={(newValue) => mutateData(2, newValue)} required={true}/>
			</FormItem>
			<FormItem span_length="2">
			  <label className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
			    Drop-off date
			  </label>
			  <DatePicker onChange={(newValue) => mutateData(3, newValue)} required={true}/>
			</FormItem>
			<div className="w-full flex items-center justify-center">
			  <button type="submit" className="rounded-full bg-[#7F778F]  p-4 cursor-pointer">
			    <CiSearch className="h-[1.5em] w-[1.5em]"/>
			  </button>
			</div>
			<ul className="flex flex-col w-full mt-4 justify-self-center self-center col-start-[span_7] col-end-[10] 2xl:col-start-[span_5] 2xl:col-end-[9]">
				<span ref={loader} className="animate-loader rounded-full w-[40px] h-[40px] self-center hidden"></span>
				{available_entries}
			</ul>
		      </form>
		    </div>
		  </div>
		</>
	);
}

export default CarForm;
