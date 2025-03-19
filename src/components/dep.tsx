export const Deptest = () => {
    return(
        <div className="flex flex-col max-w-[440px] h-screen items-center rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('/backPlane.png')" }}>
            <div className="flex flex-col mt-16 mx-8 h-screen items-center gap-3">
                <div className=" flex my-3 items-center justify-center">
                    <img src="navLogo.png" className="h-8"></img>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl">Foodtech</h1>
                    <h1 className="text-3xl">ภาควิชาเทคโนโลยีอาหาร</h1>
                </div>
                <div className="flex flex-col items-center w-10/12">
                    <div className="grid grid-cols-2 gap-6 w-full">
                        <div className="bg-gray-200 h-40 flex items-center justify-center">
                            <p>context1</p>
                        </div>
                        <div className="bg-white rounded-xl h-40 flex items-center justify-center shadow-md">
                            <p>context2</p>
                        </div>
                    </div>

                    <div className="flex items-center mt-6 gap-4">
                        <img src="mathcom.PNG" className="h-26" alt="Mathcom" />
                        <div className="bg-gray-200 h-32 w-56 flex items-center justify-center">
                            <p>context mid</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="text-lg font-semibold bg-white h-26 w-70 rounded-xl">content bot</div>
                    </div>
                </div>
                <img src="backIcon.png" className="h-6 w-6"></img>
            </div>
            
        </div>
    );
}