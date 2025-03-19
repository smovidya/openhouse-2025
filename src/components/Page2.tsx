import { Dot } from "lucide-react";

export const Page2 = () => {
	const styleMajor = "font-poppins font-bold text-[#002144] text-md block text-center inline-block";

	const scienceData = [
		{
			grouping: "/page2/PHYS.png",
			majors: [
				"Mathematics & Computer Science",
				"Chemistry",
				"BSAC",
				"Physics",
			],
		},
		{
			grouping: "/page2/BIO.png",
			majors: ["Biology", "Botany", "Biochemistry", "Microbiology"],
		},
		{
			grouping: "/page2/TECH.png",
			majors: [
				"Chemical Technology",
				"Materials Science",
				"Imaging and Printing Technology",
				"Food Technology",
			],
		},
		{
			grouping: "/page2/NATURE.png",
			majors: ["Geology", "Marine Science", "Environmental Science"],
		},
        {
            grouping: "/page2/SIS.png",
			majors: ["BBTech", "BISTech"],
        }
	];

	return (
		<div className="bg-[url(/page2/new_bg_2.webp)] bg-cover min-h-screen">
            <div className="h-40"></div>
            <div className="flex flex-col justify-center items-center">
            <img
                        src="/page2/SciCU.png"
                        className="w-100"
                    />     
                <div className="w-full h-130 overflow-y-auto">
                    {scienceData.map((item) => (
                        <div className="flex flex-col pb-3 px-10 py-3">
                        <img src={item.grouping} className=" self-center mb-2"/>
                        {item.majors.map((major) => (
                            <div className="flex flex-row items-center px-2" key={major}>
                                {/* <span className="text-sm">•</span> */}
                                <a href="" className={`${styleMajor}`}>{major}</a>
                                <a href=""className="flex-grow border-b-2 border-[#002144] ml-2"></a>                            </div>
                            ))}
                        </div>
                        ))}
                </div>
            </div>
        </div>
	);
};
