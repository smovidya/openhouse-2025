import { Dot } from "lucide-react";

export const Page2 = () => {
	const styleMajor = "font-poppins italic text-[#002144] text-xs block text-center";
    const styleGroup = "font-soloistextra text-sm text-white text-center p-2"

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
                <div className="w-full h-1/2">
                    {scienceData.map((item) => (
                        <div className="">
                        <img src={item.grouping} className=""/>
                        {item.majors.map((major) => (
                            <div className="flex flex-row items-center justify-center" key={major}>
                                <span className="text-sm">•</span>
                                <div className={`${styleMajor}`}>{major}</div>
                            </div>
                            ))}
                        </div>
                        ))}
                </div>
            </div>
        </div>
	);
};
