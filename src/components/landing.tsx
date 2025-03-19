import React from "react";

const Main = () => {
	return (
		<a href="">
		<div className="flex flex-col relative justify-center items-center p-6 max-w-md mx-auto my-auto bg-gradient-to-b from-[#DAD9D9] via-[#F0F0F0] to-[#DAD9D9] rounded-xl shadow-md space-y-4 min-h-screen">
			<div className="flex flex-col items-center gap-4">
			<img className="w-[125.93px] h-[40px]" src="assets/logo.webp"></img>
				<h1 className="font-soloisthalf text-[32px] text-center text-[#504D4D]">SCIENCE CHULA <br/> OPEN HOUSE</h1>
			
			</div>
			<div className="flex items-center justify-center ">
				<img src="assets/date.webp" className="w-[97.26px] h-auto mr-[-35px]"></img>
				<img src="assets/window.webp" className="w-[367.41] h-auto"></img>
			</div>
			<div className="text-left ml-[-80px]">
			<p className="font-soloistextra text-[20px] text-left text-[#504D4D] mb-4">SCI CONTACTS</p>
			<p className="font-poppins italic text-[#504D4D] text-[12px]">
			<span className="font-bold">INSTAGRAM :</span> SCICHULAOPENHOUSE <br />
			<span className="font-bold">FACEBOOK :</span> SCIENCE CHULA OPEN HOUSE 2025
			</p>
			</div>
			<img
				className="absolute right-[4px] bottom-[100px] w-[180px]"
				src="assets/taptolearn.webp"
			></img>
		</div>
		</a>
	);
};

export default Main;
