export const Major = () => {
	const styleMajor =
		"font-poppins font-bold text-[#002144] text-md block text-center mb-2";

	const scienceData = [
		{
			grouping: "/page2/PHYS.png",
			majors: [
				{name:"Mathematics & Computer Science",routing:"mathcom"},
				{name:"Chemistry",routing:"chem"},
				{name:"BSAC",routing:"bsac"},
				{name:"Physics",routing:"phys"},
			],
		},
		{
			grouping: "/page2/BIO.png",
			majors: [
				{name:"Biology", routing:"bio"},
				{name:"Botany", routing:"bg"},
				{name:"Biochemistry", routing:"biochem"},
				{name:"Microbiology",routing:"micro"},
			],
		},
		{
			grouping: "/page2/TECH.png",
			majors: [
				{name:"Chemical Technology",routing:"cht"},
				{name:"Materials Science",routing:"matsci"},
				{name:"Imaging and Printing Technology",routing:"imprint"},
				{name:"Food Technology",routing:"foodtech"},
			],
		},
		{
			grouping: "/page2/NATURE.png",
			majors: [
				{name:"Geology", routing:"geo"},
				{name:"Marine Science", routing:"marine"},
				{name:"Environmental Science",routing:"en"},
			],
		},
		{
			grouping: "/page2/SIS.png",
			majors: [
				{name:"BBTech",routing:"bbtech"},
				{name:"BISTech",routing:"bistech"},
			],
		},
	];

	return (
			<div className="flex flex-col justify-center items-center gap-5">
				<div className="w-full h-160 overflow-y-auto">
					{scienceData.map((item) => (
						<div className="flex flex-col pb-3 px-10 py-3">
							<img src={item.grouping} className=" self-center mb-2" />
							{item.majors.map((major) => (
								<div className="flex flex-row items-center px-2" key={major.name}>
									<a href={`/depart/${major.routing}`} className={`${styleMajor}`}>
										{major.name}
									</a>
									<a
										className="flex-grow border-b-2 border-[#002144] ml-2 mx-auto"
									></a>
								</div>
							))}
						</div>
					))}
				</div>
				<img src="/assets/logo.webp" className="mt-10 w-25" />
			</div>
	);
};
