
const companies = [
	{
		name: "RentalCompany1",
		cars: [
			{
				carName: "Car1",
				carImage: "/src/assets/car1.png",
				available: false
			},
			{
				carName: "Car2",
				carImage: "/src/assets/car2.png",
				available: true
			},
			{
				carName: "Car3",
				carImage: "/src/assets/car3.png",
				available: true
			},
			{
				carName: "Car4",
				carImage: "/src/assets/car4.png",
				available: true
			},
			{
				carName: "Car5",
				carImage: "/src/assets/car5.png",
				available: true
			}
		],
		id: 1,
		location: "Riyadh West"

	},
	{
		name: "RentalCompany2",
		cars: [
			{
				carName: "Car6",
				carImage: "/src/assets/car6.png",
				available: true
			},
			{
				carName: "Car7",
				carImage: "/src/assets/car7.png",
				available: false
			}
		],
		id: 2,
		location: "Dammam South"
	},
	{
		name: "RentalCompany3",
		cars: [
			{
				carName: "Car8",
				carImage: "/src/assets/car8.png",
				available: true
			}
		],
		id: 3,
		location: "Dammam City Center"
	}
];

const trips = [
	{
		id: 1,
		companies: [1, 3], // from 1 to 3
		pickupLoc: "Riyadh West",
		dropoffLoc: "Dammam City Center",
		from: new Date("2024-10-31"),
		to: new Date("2024-11-24"),
	},
	{
		id: 2,
		companies: [3, 2],
		pickupLoc: "Dammam City Center",
		dropoffLoc: "Dammam South",
		from: new Date("2024-11-01"),
		to: new Date("2024-11-29")
	}

];

export const getCars = async (tripId) => {

	const trip = trips.find((t) => t.id === tripId);

	const [company1, company2] = trip.companies;

	const pickupCompany = companies.find((comp) => comp.id === company1);
	const dropoffCompany = companies.find((comp) => comp.id === company2);

	return {trip, pickupCompany, dropoffCompany};
};



