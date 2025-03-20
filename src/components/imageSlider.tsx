import { useState } from "react";

const images = [
	{
		id: 1,
		src: "https://via.placeholder.com/300",
		label: "Pathway Camp",
		text: "55th Memory - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
	},
	{
		id: 2,
		src: "https://via.placeholder.com/300",
		label: "Biochem Linkage",
		text: "Special Content - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
	},
	{
		id: 3,
		src: "https://via.placeholder.com/300",
		label: "More Content",
		text: "Additional Info - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	},
];

export default function ImageSlider() {
	const [activeTab, setActiveTab] = useState(1);
	const activeContent = images.find((item) => item.id === activeTab)?.text;

	return (
		<div className="relative w-full max-w-md">
			<div className="flex items-end gap-4 h-56 px-6 py-2">
				{images.map((item) => (
					<div
						key={item.id}
						className={`h-full transition-all duration-500 ease-in-out relative ${
							activeTab === item.id
								? "flex-grow basis-3/4"
								: "flex-shrink basis-12"
						}`}
					>
						<button
							type="button"
							onClick={() => setActiveTab(item.id)}
							className={`h-full w-full relative overflow-hidden transition-all duration-500 ease-in-out ${
								activeTab === item.id ? "rounded-xl" : "rounded-4xl"
							}`}
						>
							<div className="absolute inset-0 w-full h-full">
								<img
									alt="content"
									src={item.src}
									className="w-full h-full object-cover bg-gray-700"
								/>
								<div className="absolute bottom-0 left-0 right-0 w-full flex justify-start items-center p-4">
									<p className="text-white text-xs font-semibold">
										{item.label}
									</p>
								</div>
							</div>

							<div
								className={`absolute inset-0 flex flex-col items-center transition-opacity duration-300 ${
									activeTab === item.id ? "opacity-0" : "opacity-100"
								} bg-navyblue`}
							>
								<span className="text-white font-bold text-sm absolute rotate-270 top-1/3 w-40">
									{item.label}
								</span>
								<span className="text-navyblue font-bold text-sm rounded-full w-8 h-8 bg-white absolute bottom-2 flex justify-center items-center">
									{item.id}
								</span>
							</div>
						</button>
					</div>
				))}
			</div>
			<div className="absolute mx-6 mt-2 bg-blue-300 p-4 rounded-lg shadow-lg">
				<p className="text-sm text-gray-600">{activeContent}</p>
			</div>
		</div>
	);
}
