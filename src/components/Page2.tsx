import { Dot } from "lucide-react";

export const Page2 = () => {
	const styleMajor = "font-poppins font-bold text-[#0e1979] text-md block text-center mb-2";

	const scienceData = [
		{
			grouping: "/page2/PHYS.png",
			majors: [
				"Mathematics and Computer Science",
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
		<div style={{
            backgroundImage: "url('/page2/bg.webp')",
          }}
            className="flex flex-col items-center h-screen w-full min-h-full relative py-[70px] bg-contain bg-center bg-no-repeat overflow-x-hidden">
            <div className="h-20"></div>
            <div className="flex flex-col justify-center items-center">
                <img
                        src="/page2/SciCU.png"
                        className="w-100 "
                />     
                <div className="w-full h-120 overflow-y-auto">
                    {scienceData.map((item) => (
                        <div className="flex flex-col pb-2 px-10 mt-3">
							<img src={item.grouping} className=" self-center mb-2 px-1"/>
							{item.majors.map((major) => (
								<div className="flex flex-row items-center px-2" key={major}>
									<a href="" className={`${styleMajor}`}>{major}</a>
									<a href=""className="flex-grow border-b-2 border-[#002144] ml-2 mx-auto"></a>                            
								</div>
								))}
                        </div>

                        ))}
                </div>
            </div>
        </div>
	);
};
