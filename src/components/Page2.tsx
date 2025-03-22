import { Dot } from "lucide-react";

export const Page2 = () => {
	const styleMajor =
		"font-poppins font-bold text-[#0e1979] text-md block text-center mb-2";

	const scienceData = [
		{
			grouping: "/page2/PHYS.png",
			majors: [
				{ name: "Mathematics and Computer Science", routing: "mathcom" },
				{ name: "Chemistry", routing: "chem" },
				{ name: "BSAC", routing: "bsac" },
				{ name: "Physics", routing: "phys" },
			],
		},
		{
			grouping: "/page2/BIO.png",
			majors: [
				{ name: "Biology", routing: "bio" },
				{ name: "Botany", routing: "bg" },
				{ name: "Biochemistry", routing: "biochem" },
				{ name: "Microbiology", routing: "micro" },
			],
		},
		{
			grouping: "/page2/TECH.png",
			majors: [
				{ name: "Chemical Technology", routing: "cht" },
				{ name: "Materials Science", routing: "matsci" },
				{ name: "Imaging and Printing Technology", routing: "imprint" },
				{ name: "Food Technology", routing: "foodtech" },
			],
		},
		{
			grouping: "/page2/NATURE.png",
			majors: [
				{ name: "Geology", routing: "geo" },
				{ name: "Marine Science", routing: "marine" },
				{ name: "Environmental Science", routing: "en" },
			],
		},
		{
			grouping: "/page2/SIS.png",
			majors: [
				{ name: "BBTech", routing: "bbtech" },
				{ name: "BISTech", routing: "bistech" },
			],
		},
	];

	return (
		<div className="flex flex-col items-center relative py-[70px] bg-plan max-w-md mx-0 my-auto rounded-xl bg-cover bg-top overflow-x-hidden h-full w-full overflow-hidden ">
			<div className="h-22"></div>
			<div className="flex flex-col justify-center items-center">
				<img src="/page2/SciCU.png" className="w-100 " />
				<div className="w-full h-120 overflow-y-auto">
					{scienceData.map((item) => (
						<div className="flex flex-col pb-2 px-10 mt-3">
							<img src={item.grouping} className=" self-center mb-2 px-1" />
							{item.majors.map((major) => (
								<div
									className="flex flex-row items-center px-2"
									key={major.name}
								>
									<a
										href={`/depart/${major.routing}`}
										className={`${styleMajor}`}
									>
										{major.name}
									</a>
									<a
										href={`/depart/${major.routing}`}
										className="flex-grow border-b-2 border-[#002144] ml-2 mx-auto"
									></a>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
