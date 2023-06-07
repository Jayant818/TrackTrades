"use client";

import { useState } from "react";

function Main() {
	const [showFilter, setShowFilter] = useState(false);
	const [showBasket, setShowBasket] = useState(false);

	const onFilterClick = () => {
		setShowFilter(true);
	};

	const onFilterClose = () => {
		setShowFilter(false);
	};
	const onBasketClick = (e) => {
		e.preventDefault();
		setShowBasket(true);
	};

	const onBasketClose = () => {
		setShowBasket(false);
	};
	return (
		<div className="bg-gray-200 pt-6 flex flex-col space-y-6">
			<form className="flex space-x-2 justify-evenly">
				<div className="flex space-x-4">
					<div>
						<label
							htmlFor="Scrip"
							className="relative  text-gray-500 text-xs top-[-15px] left-16 bg-white pl-2 pr-2"
						>
							Scrip
						</label>
						<input
							type="text"
							name="Scrip"
							value="NIFTY"
							className="px-2 py-1 font-semibold border-2 border-gray-400"
						/>
					</div>

					<div>
						<label
							htmlFor="Exp"
							className="relative text-gray-500 text-xs top-[-15px] left-16 bg-white pl-2 pr-2"
						>
							Exp
						</label>
						<input
							type="text"
							name="Exp"
							value="18 May 2023"
							className="px-2 py-1 font-semibold  border-2 border-gray-400"
						/>
					</div>

					<div className="flex space-x-1">
						<div>
							<div className="text-gray-500 text-xs">Spot</div>
							<div className="font-semibold">18,245.3</div>
						</div>
						<div className="text-xs text-green-600 self-end font-semibold">
							0.35%
						</div>
					</div>
					<div className="flex space-x-1">
						<div>
							<div className="text-gray-500 text-xs">Fut</div>
							<div className="font-semibold">18,251.1</div>
						</div>
						<div className="text-xs text-green-600 self-end font-semibold">
							0.35%
						</div>
					</div>
				</div>

				<div className="flex space-x-3">
					<div className="flex space-x-1">
						<div>
							<div className="text-gray-500 text-xs">Max pain</div>
							<div className="font-semibold">18,200</div>
						</div>
					</div>
					<div className="flex space-x-1">
						<div>
							<div className="text-gray-500 text-xs">PCR</div>
							<div className="font-semibold">0.92</div>
						</div>
					</div>
					<div>
						<div className=" flex text-gray-500 text-xs space-x-1">
							<div>Support</div>
							<div>
								<img src="/upload.png" className="w-2" />
								<img src="/down-arrow.svg" className="w-2" />
							</div>
						</div>
						<div className="font-semibold">18,100</div>
					</div>
					<div>
						<div className=" flex text-gray-500 text-xs space-x-1">
							<div>Resistance</div>
							<div>
								<img src="/upload.png" className="w-2" />
								<img src="/down-arrow.svg" className="w-2" />
							</div>
						</div>
						<div className="font-semibold">18,500</div>
					</div>
				</div>

				<div className="flex space-x-5 items-center ">
					<div className="flex space-x-2" onClick={onFilterClick}>
						<img src="setting-lines.png" alt="filter" className="w-8 " />
						<div>Filter</div>
						{showFilter && (
							<div className="p-2 shadow-lg absolute bg-white left-[54%]">
								<div className="flex justify-between items-center pt-2 pb-4">
									<div className="font-semibold">Filters</div>
									<button onClick={onFilterClose}>X</button>
								</div>
								<form className="space-y-4">
									<div className="space-y-2">
										LTP range
										<div className="flex justify-around items-center space-x-2">
											<input
												type="text"
												name="LTP"
												value="Minimum LTP"
												className="px-2 py-1 rounded-sm border-2"
											/>
											<div>-</div>
											<input
												type="text"
												name="LTP"
												value="Maximum LTP"
												className="px-2 py-1 rounded-sm border-2"
											/>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<div>LTP change % by</div>
										<input
											type="text"
											value="Today Open"
											name="LTP"
											className="px-2 py-1 rounded-sm border-2"
										/>
									</div>
									<div className="flex justify-between items-center">
										<div>Specific strike</div>
										<input
											type="text"
											value=" "
											name="LT"
											className="px-2 py-1 rounded-sm border-2"
										/>
									</div>
									<div className="flex justify-between items-center">
										<div>Display</div>
										<div className="flex space-x-3">
											<div>
												<input
													type="checkbox"
													value="calls"
													className="px-2 py-1 rounded-sm border-2"
												/>
												Calls
											</div>
											<div>
												<input
													type="checkbox"
													value="Puts"
													className="px-2 py-1 rounded-sm border-2"
												/>
												Puts
											</div>
										</div>
									</div>
									<div className="flex justify-end space-x-4">
										<button
											type="Submit"
											onClick={onFilterClose}
											className="bg-white text-blue-700 px-8 py-2 border-2 border-blue-700"
										>
											Reset
										</button>
										<button
											type="Submit"
											onClick={onFilterClose}
											className="text-white bg-blue-700 px-8 py-2"
										>
											Apply
										</button>
									</div>
								</form>
							</div>
						)}
					</div>
					<button
						onClick={onBasketClick}
						// type="Submit"
						className="text-white bg-blue-700 px-8 py-2"
					>
						Basket
					</button>
					{showBasket && (
						<div className="absolute  left-[25%] bottom-0  bg-gray-100">
							<ul className="flex justify-evenly bg-[#2c57f5] text-white font-semibold pt-4 pb-4">
								<li>
									Max profit
									<br />
									24,000/
								</li>
								<li>
									Max loss
									<br />
									Unlimited/
								</li>
								<li>
									Risk Reward
									<br />
									NA/
								</li>
								<li>
									Probablity
									<br />
									32%/
								</li>
								<li>
									Breakeven
									<br />
									38124.2
								</li>
							</ul>

							<table className="table-auto">
								<thead>
									<tr>
										<th className="bg-gray-100 px-4 py-2">Instrument</th>
										<th className="bg-gray-100 px-4 py-2">B/S</th>
										<th className="bg-gray-100 px-4 py-2">Type</th>
										<th className="bg-gray-100 px-4 py-2">Qty</th>
										<th className="bg-gray-100 px-4 py-2">Price</th>
										<th className="bg-gray-100 px-4 py-2">Trigger</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-gray-100">
										<td className="px-4 py-2">NIFTY 18MAY23 18200 CE</td>
										<td className="px-4 py-2">
											<button className="bg-green-200 text-black px-2 py-1 rounded">
												B
											</button>
										</td>
										<td className="px-4 py-2">
											<button className="bg-blue-500 text-white px-2 py-1 rounded">
												MIS
											</button>
										</td>
										<td className="px-4 py-2">
											<input
												type="text"
												value="50"
												className="w-12 px-2 py-1 text-black"
											/>
										</td>
										<td className="px-4 py-2">
											<input
												type="text"
												value="120.5"
												className="w-16 px-2 py-1 text-black"
											/>
										</td>
										<td className="px-4 py-2 flex space-x-7 items-center">
											<input
												type="text"
												className="w-16 px-2 py-1 text-black"
												placeholder="Trigger"
											/>
											<button className="text-blue-500 flex">
												<img
													src="/plus.png"
													className="w-4 text-blue-500"
													alt=""
												/>
												SL
											</button>
											<button className="text-blue-500 flex">
												<img
													src="/plus.png"
													className="w-4 text-blue-500"
													alt=""
												/>
												Tgt
											</button>
											<button>
												<img
													src="/delete.png"
													className="w-4 text-red-500"
													alt=""
												/>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />

							<hr />
							<div className="flex justify-around mt-2 pb-4">
								<div>
									<div>Margin required : $2,728,892</div>
									<div>Available Funds : $3,728,8892</div>
								</div>
								<button className="px-2 py-1 bg-yellow-500 font-semibold flex items-center space-x-2">
									<img src="/plus.png" alt="btn" className="w-4" />
									Auto hedge
								</button>
								<button
									type="Submit"
									onClick={onBasketClose}
									className="bg-white text-blue-700 px-8 py-2 border-2 border-blue-700"
								>
									Close basket
								</button>
								<button
									type="Submit"
									onClick={onBasketClose}
									className="text-white bg-blue-700 px-8 py-2"
								>
									Place Order
								</button>
							</div>
						</div>
					)}
				</div>
			</form>

			<div className="flex space-x-4 self-end pr-12">
				<button
					type="Submit"
					className="text-white bg-blue-700 px-6 py-2 rounded-md"
				>
					LTP
				</button>
				<button
					type="Submit"
					className="text-black bg-white px-6 py-2 rounded-md"
				>
					Geeks
				</button>
			</div>
		</div>
	);
}

export default Main;
