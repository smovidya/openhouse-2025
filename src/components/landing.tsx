import React from "react";

const Main = () => {
	return (
		<a href="/faculty">
			<div className="flex flex-col relative justify-center items-center p-6 max-w-md mx-auto my-auto bg-gradient-to-b from-[#e6e6e6] via-[#ffffff] to-[#e6e6e6] rounded-xl shadow-md min-h-screen">
				<div className="flex flex-col items-center gap-2">
					<img className="w-[125.93px] h-[40px]" src="/assets/logo.webp"></img>
					<h1 className="font-soloisthalf text-[32px] text-center text-[#0E1979]">
					SCIENCE CHULA <br/> OPEN HOUSE 2025
					</h1>
				</div>
				<div className="flex items-center justify-center ">
					<img
						src="assets/date.png"
						className="w-[97.26px] h-auto -mr-12"
					></img>
					<img src="assets/window.webp" className="w-[367.41] h-auto"></img>
				</div>
				<div className="text-left -ml-20 -mt-4">
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
				<img
					className="absolute right-[4px] bottom-[100px] w-[180px]"
					src="assets/taptolearn.png"
				></img>
			</div>
		</a>
	);
};

export default Main;
