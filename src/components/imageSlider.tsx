import { useState } from "react";

const images = [
	{
		id: 1,
		src: "https://via.placeholder.com/300",
		label: "Pathway Camp",
		text: "55th Memory",
	},
	{
		id: 2,
		src: "https://via.placeholder.com/300",
		label: "Biochem Linkage",
		text: "Special Content",
	},
	{
		id: 3,
		src: "https://via.placeholder.com/300",
		label: "More Content",
		text: "Additional Info",
	},
];

export default function ImageSlider() {
	const [activeTab, setActiveTab] = useState(1);

	return (
		<div className="flex items-end gap-4 w-full max-w-md h-56 px-6 py-2">
			{images.map((item) => (
				<button
					type="button"
					key={item.id}
					onClick={() => setActiveTab(item.id)}
					className={`h-full relative overflow-hidden transition-all duration-500 ease-in-out ${
						activeTab === item.id
							? "flex-grow basis-3/4 rounded-xl" // Expanded state
							: "flex-shrink basis-12 rounded-4xl" // Collapsed state
					}`}
				>
					{/* Image Content */}
					<div className="absolute inset-0 w-full h-full">
						<img
							alt="content"
							src={item.src}
							className="w-full h-full object-cover bg-gray-700"
						/>
						<div className="absolute bottom-0 left-0 right-0 w-full bg-gray-300 flex justtify-start items-center p-4">
							<p className="text-black text-xs font-semibold">{item.text}</p>
						</div>
					</div>

					{/* Collapsed State Label */}
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
			))}
		</div>
	);
}
