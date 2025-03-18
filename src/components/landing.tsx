import React from "react";

const Main = () => {
	return (
		<div className="flex flex-col relative justify-center items-center p-6 max-w-[440px] mx-auto my-auto bg-gradient-to-b from-[#DAD9D9] via-[#F0F0F0] to-[#DAD9D9] rounded-xl shadow-md space-y-4 min-h-screen">
			<div className="flex flex-col items-center gap-[16px]">
				<img src="assets/logo.png"></img>
				<h1>SCIENCE CHULA</h1>
				<h1>OPEN HOUSE</h1>
			</div>
			<div className="flex justify-center items-center gap-[-32px]">
				<img src="assets/Date.png"></img>
				<img src="assets/Window.png"></img>
			</div>
			<p>SCI AIRWAY</p>
			<p>
				INSTAGRAM: SCICHULAOPENHOUSE FACEBOOK: SCIENCE CHULA OPEN HOUSE 2025
			</p>
			<img
				className="absolute right-[4px] bottom-[30px]"
				src="assets/taptolearn.png"
			></img>
		</div>
	);
};

export default Main;
