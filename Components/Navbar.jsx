import Image from "next/image";

function Navbar() {
	return (
		<div className="flex justify-evenly bg-white items-center pt-2 pb-2">
			<div className="font-bold text-lg">LOGO</div>
			<ul className="flex space-x-3 text-sm font-semibold">
				<li>Dashboard</li>
				<li className="text-blue-600">Option chain</li>
				<li>Strategy builder</li>
				<li>Position</li>
				<li>Order book</li>
			</ul>

			<div className="flex space-x-1">
				<div className="text-xs text-green-600 self-end font-semibold">
					0.35%
				</div>
				<div>
					<div className="text-gray-500 text-xs">NIFTY</div>
					<div className="font-semibold">18254.32</div>
				</div>
			</div>
			<div className="flex space-x-1">
				<div className="text-xs text-green-600 self-end font-semibold">
					0.7%
				</div>
				<div>
					<div className="text-gray-500 text-xs">BANKNIFTY</div>
					<div className="font-semibold">39,156.1</div>
				</div>
			</div>
			<div className="flex space-x-1">
				<div className="text-xs text-red-600 self-end font-semibold">
					-10.9%
				</div>
				<div>
					<div className="text-gray-500 text-xs">INDIA VIX</div>
					<div className="font-semibold">12.12</div>
				</div>
			</div>

			<div className="font-semibold flex space-x-2">
				<div>Profile</div>
				<img src="/down-arrow.svg" className="w-4 font-semibold" />
			</div>
		</div>
	);
}

export default Navbar;
