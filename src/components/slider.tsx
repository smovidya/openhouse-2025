import { useState } from "react";

interface ImageProps {
	id: number;
	src: string;
	label: string;
	text: string;
}

interface SliderProps {
	images: ImageProps[];
}

export default function ImageSlider({ images }: SliderProps) {
	const [activeTab, setActiveTab] = useState(1);
	const activeContent = images.find((item) => item.id === activeTab)?.text;

	return (
		<div className="relative w-full max-w-md">
			<div className="flex items-end gap-4 h-56 px-6">
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
			<div className="mx-6 h-[87px] mt-[12px] w-[400px] bg-[#0058b63e] rounded-xl">
				<p className="text-sm font-notothai p-2 text-[#0157b6]">
					{activeContent}
				</p>
			</div>
		</div>
	);
}
