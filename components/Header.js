const Header = ()=> {
    return(
        <>
            <div className="bg-[#F2F5F7] top-0 sticky z-10 font-sans">
                <div className="bg-white shadow-md flex flex-row justify-center px-10">
                    <div className="basis-1/2 p-3">
                        <img className="" src="/VK-Logo-blue 1.svg" alt="logo"/>
                    </div>
                    <div className="basis-1/2 flex flex-row justify-end items-center gap-x-10 p-3">
                        <div className="flex flex-row justify-center items-center relative px-2">
                            <div className="text-[#6F6F6F] pr-2">
                                <img className="w-5 h-4" src="/Vector.svg" alt="vector"/>
                            </div>
                            <div className="text-[#6F6F6F] text-[14px] leading-[19px] font-semibold">
                                Notification
                            </div>
                            <div className=" absolute -top-0.5 right-0 ">
                                <div className="relative flex items-center justify-center">
                                    <img className="w-2.5" src="/Ellipse 15.svg" alt="15"/>
                                    <div className="absolute ">
                                        <img className="fill-[white] w-1 h-1" src="/11.svg" alt="11"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center px-2">
                            <div className="text-[#6F6F6F] text-[14px] leading-[19px] font-semibold pr-2">
                                FAQ  
                            </div>
                            <div className="stroke-black">
                                <img className="w-4 h-4" src="/Vector (2).svg" alt="vector2"/>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center px-2">
                            <div className="pr-2">
                                <img src="/Ellipse 1.svg" alt="profile"/>
                            </div>
                            <div className="text-black text-[12px] leading-[16px] font-normal">
                                Darron Kulikowski
                            </div>
                        </div>
                        <div className="flex justify-center px-2">
                            <img className="w-[18px]" src="/Group 4.svg" alt="group4"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;