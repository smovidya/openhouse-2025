import React from "react";

const Main = () => {
	return (
		<a href="/faculty">
			<div className="flex flex-col relative justify-center items-center p-6 bg-gradient-to-b from-[#e6e6e6] via-[#ffffff] to-[#e6e6e6] rounded-xl shadow-md h-svh overflow-hidden w-full">
				<div className="flex flex-col items-center gap-2">
					<img className="h-9 w-auto" src="/assets/logo.webp"></img>
					<h1 className="font-soloisthalf text-[32px] text-center text-[#0E1979]">
						SCIENCE CHULA <br /> OPEN HOUSE 2025
					</h1>
				</div>
				<div className="flex items-center justify-center ">
					<img src="assets/date.png" className="w-[65px] h-auto -mr-5"></img>
					<img src="assets/window.png" className="w-[260px] h-auto"></img>
				</div>
				<div className="text-left -ml-10">
					<p className="font-soloistextra text-[20px] text-left text-[#0E1979] mb-4">
						OUR CONTACT
					</p>
					<p className="font-poppins italic text-[#0E1979] text-[12px]">
						<span className="font-bold">INSTAGRAM :</span> SCICHULAOPENHOUSE
						<br />
						<span className="font-bold">FACEBOOK :</span> SCIENCE CHULA OPEN
						HOUSE 2025
						<br />
						<span className="font-bold">TIKTOK :</span> SCICHULAOPENHOUSE
					</p>
				</div>
			</div>
		</a>
	);
};

export default Main;
