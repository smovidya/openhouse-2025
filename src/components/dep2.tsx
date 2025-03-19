

export const  Deptest2 = () => {
    return(
        <div className="flex flex-col max-w-[440px] h-screen items-center rounded-xl bg-cover bg-center bg-top-100" style={{ backgroundImage: "url('/backPlane.png')" }}>
            <div className="flex flex-col items-center justify-center mt-[84px]">
                <div className=" flex my-3 items-center justify-center">
                    <img src="navLogo.png" className="h-8"></img>
                </div>
                <div className="flex flex-col items-center justify-center mt-[100px] font-poppins">
                    <h1 className="text-5xl font-poppins uppercase drop-shadow-[5px_5px_5px_#ffffff]" style={{color:'#19478B'}}>Foodtech</h1>
                    <h1 className="text-3xl font-poppins h-[35px]" style={{color:'#FFFCE5'}}>ภาควิชาเทคโนโลยีอาหาร</h1>
                    <h1 className="">
                        <span className="relative text-5xl font-poppins uppercase text-white texl-bold">
                            FOODTECH
                            <span className="text-5xl absolute inset-0 z-10 mt-[9px]" style={{color:'#19478B'}}>FOODTECH</span>
                        </span>
                    </h1>
                    <div className="relative">
                        {/* เงาสีแรก */}
                        <h1 className="absolute text-blue-300 text-4xl md:text-5xl font-extrabold tracking-wide">
                        FOODTECH
                        </h1>
                        {/* ตัวอักษรสีหลัก */}
                        <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide">
                        FOODTECH
                        </h1>
                    </div>
                </div>
                <div className="flex mt-[10px] items-center justify-center px-[9px] py-[6px]">
                    <div className="w-[24px]">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                        </svg>
                    </div>
                    <div className="">
                        <img  src="note.png" className="h-[380px] w-[384px]"></img>
                    </div>
                    <div className="w-[24px]">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                    </div>
                </div>
                <div className="mt-[130px]">
                    <img src="backIcon.png" className="w-[32px]" />
                </div>
            </div>
        </div>
    );
}