const HomeHeader = ()=> {
    return(
        <>
            <div>
            <div className="header-section shadow-md flex items-center px-10 pt-5 pb-1
            text-black text-[16px] leading-[21px] font-semibold font-sans">
                <div className="basis-2/6 pl-5">
                    <img src="/Group 17.svg" alt="logo"/>
                </div>
                <div className="basis-3/4 flex gap-x-10 pl-5">
                    <div>Explore</div>
                    <div>Our Top Finds</div>
                    <div className="flex items-center gap-x-3">
                        Category Search
                        <img className="w-[14px] h-[14px]" src="/search.svg" alt="search"/>
                    </div>                  
                </div>
                <div className="basis-11/12 flex justify-end gap-x-10">
                    <div>
                        Start a Campaign
                    </div>
                    <div>
                        What We Do
                    </div>
                    <div>
                        Sign In
                    </div>
                    <div className="pr-5">
                        Sign Up
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default HomeHeader;