import { Dot } from "lucide-react";

export const Page2 = () => {
	const styleMajor = "font-poppins bold text-[#002144] text-sm block text-center inline-block";

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
                <div className="w-full h-120 bg-blue-300 scroll-auto">
                    {scienceData.map((item) => (
                        <div className="flex flex-col h-1/2 pb-3 px-10">
                        <img src={item.grouping} className=" self-center"/>
                        {item.majors.map((major) => (
                            <div className="flex flex-row bg-pink-200/50" key={major}>
                                {/* <span className="text-sm">•</span> */}
                                <div className={`${styleMajor}`}>{major}</div>
                                <span className="flex-grow border-b border-blue-900 ml-2"></span>                            </div>
                            ))}
                        </div>
                        ))}
                </div>
            </div>
        </div>
	);
};
