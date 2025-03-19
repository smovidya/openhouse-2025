export const Page2 = () => {
	return (
		<div className="flex flex-col items-center p-6 max-w-sm mx-auto my-auto bg-[url(/page2/background.webp)] bg-[auto_125%] bg-center rounded-xl shadow-md space-y-4 min-h-screen">
			<img
				src="/page2/logo.webp"
				className="w-22 object-cover absolute top-13"
			/>
            <div className="absolute top-35 items-center justify-center">
            <img
                    src="/page2/middleLine.webp"
                    className="w-3 object-cover fixed"
                />
            </div>
            <div className="flex flex-col justify-between absolute top-35 w-80 h-auto px-4 space-y-1">
                {/* PHYS */}
                <div className="w-1/2 text-left">
                    <p className="font-soloistextra text-[1.2vw] text-white text-right px-1">PHYSICAL SCIENCE</p>
                    <div className="flex flex-row items-start">
                        <span className="text-lg">•</span>
                        <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Mathematics & Computer Science</a>
                    </div>
                    <div className="flex flex-row items-start">
                        <span className="text-lg">•</span>
                        <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Chemistry</a>
                    </div>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">BSAC</a>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Physics</a>
                </div>
                {/* BIO */}
                <div className="w-1/2 text-left pl-40 -mt-3.5 ">
                    <p className="font-soloistextra text-[1.2vw] text-white whitespace-nowrap">BIOLOGICAL SCIENCE</p>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Biology</a>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Botany</a>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Biochemistry</a>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Microbiology</a>
                </div>
                {/* TECH */}
                <div className="w-1/2 text-left">
                    <p className="font-soloistextra text-[1.2vw] text-white text-right">TECHNOLOGICAL SCIENCE</p>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Chemical Technology</a>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Materials Science</a>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Imaging and Printing Technology</a>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Food Technology</a>
                </div>
                {/* Nature */}
                <div className="w-1/2 text-left pl-40 -mt-3.5 ">
                    <p className="font-soloistextra text-[1.2vw] text-white whitespace-nowrap">NATURAL SCIENCE</p>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Geology</a>
                    <a href="" className="font-poppins italic text-[#002144] text-[1vw] block">Marine Science</a>
                    <a href="" className="font-poppins italic text-[#002144] whitespace-nowrap text-[1vw] block">Environmental Science</a>
                </div>


            </div>
		</div>
	);
};
