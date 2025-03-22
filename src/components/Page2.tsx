
export const Page2 = () => {
	const styleMajor =
		"font-poppins font-bold text-[#0e1979] text-md block text-center mb-2";

	const scienceData = [
		{
			grouping: "./src/image/page2/PHYS.png",
			majors: [
				{ name: "Mathematics and Computer Science", routing: "mathcom" },
				{ name: "Chemistry", routing: "chem" },
				{ name: "BSAC", routing: "bsac" },
				{ name: "Physics", routing: "phys" },
			],
		},
		{
			grouping: "./src/image/page2/BIO.png",
			majors: [
				{ name: "Biology", routing: "bio" },
				{ name: "Botany", routing: "bg" },
				{ name: "Biochemistry", routing: "biochem" },
				{ name: "Microbiology", routing: "micro" },
			],
		},
		{
			grouping: "./src/image/page2/TECH.png",
			majors: [
				{ name: "Chemical Technology", routing: "cht" },
				{ name: "Materials Science", routing: "matsci" },
				{ name: "Imaging and Printing Technology", routing: "imprint" },
				{ name: "Food Technology", routing: "foodtech" },
			],
		},
		{
			grouping: "./src/image/page2/NATURE.png",
			majors: [
				{ name: "Geology", routing: "geo" },
				{ name: "Marine Science", routing: "marine" },
				{ name: "Environmental Science", routing: "en" },
			],
		},
		{
			grouping: "./src/image/page2/SIS.png",
			majors: [
				{ name: "BBTech", routing: "bbtech" },
				{ name: "BISTech", routing: "bistech" },
			],
		},
	];

	return (
		<div className="relative min-h-screen bg-plan">
			{/* Background images */}
			<img
				src="./src/image/header.png"
				className="w-full absolute top-0 left-0 z-10 pointer-events-none"
			/>
			<img
				src="./src/image/footer.png"
				className="w-full absolute bottom-0 left-0 z-10 pointer-events-none"
			/>
			<div className="flex flex-col items-center relative py-[70px] max-w-md mx-0 my-auto rounded-xl bg-cover bg-top overflow-x-hidden h-dvh w-full overflow-hidden bg-no-repeat">
				<div className="flex flex-col justify-center items-center mt-20">
					<img src="./src/image/page2/SciCU.png" className="w-100" />
					<div className="w-full h-120 overflow-y-auto pb-16">
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
		</div>
	);
};
