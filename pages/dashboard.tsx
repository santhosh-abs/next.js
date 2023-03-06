import React from "react"
import Carousel from "react-elastic-carousel"
import Sidenav from './sidenav'

const Figma = ()=> {
    const card = [
        {
            img:<img src="Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="bar.svg"/>,
            day:<img src="day.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="bar.svg"/>,
            day:<img src="day.svg"/>,
            daysleft:'98 days left',
        },
        {
            img:<img src="Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="bar.svg"/>,
            day:<img src="day.svg"/>,
            daysleft:'98 days left',
        },
        {
            img:<img src="Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="bar.svg"/>,
            day:<img src="day.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="bar.svg"/>,
            day:<img src="day.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="bar.svg"/>,
            day:<img src="day.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="bar.svg"/>,
            day:<img src="day.svg"/>,
            daysleft:'98 days left',

        },
    ]
    const breakpoints = [
        {width: 1, itemsToShow:1},
        {width: 550, itemsToShow:2},
        {width: 768, itemsToShow:3},
        {width: 1200, itemsToShow:4},
    ]
    return(
        <>
            <div className="flex  bg-[#F2F5F7] pb-12">
                <div className="basis-2/12 bg-white pt-12">
                    <Sidenav/>
                </div>
                <div className="grow bg-[#F2F5F7] font-sans">
                    <div className="flex justify-between items-center px-10 py-5">
                        <div className=" text-[#03396D] text-[24px] leading-[32px] font-bold">
                            VK Investments
                        </div>
                        <div className="justify-end">
                            <div className="flex items-center relative">
                                <input className="rounded-[3px] placeholder:text-black border border-black 
                                text-black text-[14px] leading-[19px] font-semibold w-[271px] pl-7 py-2.5 focus:outline-none" placeholder="Search"/>
                                <div className="absolute pl-2">
                                    <img className="w-[14px]" src="search.svg" alt="search" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex pl-10 py-5">
                        <div className="pl-2 pr-10">
                            <button className="bg-[#03396D] text-white text-center text-[14px]
                            leading-[19px] font-bold px-7 py-2 hover:border-3 hover:border-[#8008b8]">Explore Deals</button>
                        </div>
                        <div className="pl-10">
                            <button className="bg-[#03396D] text-white text-center  text-[14px] 
                            leading-[19px] font-bold px-7 py-2 hover:border-3 hover:border-[#8008b8]">Raise Fund</button>
                        </div>
                    </div>
                    <div className="pl-10 pr-28 pt-5 pb-10 ftd-deals">
                        <h1 className=" text-black text-[24px] leading-[32px] font-bold pb-6 ">Featured Deals</h1>
                        <Carousel breakPoints={breakpoints} >
                                {card.map((item) =>{return(
                                    <item>
                                        <div className="flex flex-wrap justify-between">
                                            <div className=" border border-[#808080] w-[262px] h-[466]">
                                                <div className="pb-3">
                                                    {item.img}
                                                </div>
                                                <div className=" text-[#03396D] text-[18px] leading-[24px] font-semibold pl-3 pb-3">
                                                    {item.head}
                                                </div>
                                                <div className="text-black text-[16px] leading-[21px] font-bold pl-3 pb-3 ">
                                                    {item.bold}
                                                </div>
                                                <div>
                                                    <p className="text-black text-[14px] leading-[19px] font-normal pl-3 pb-3">{item.para}</p>
                                                </div>
                                                <div className="text-black text-[14px] leading-[19px] font-semibold pl-3 pb-3">
                                                    {item.tech}
                                                </div>
                                                <div className="text-black text-[14px] leading-[19px] font-semibold pl-3 pb-3">
                                                    {item.dollar}
                                                </div>
                                                <div className="pl-3 pb-3">
                                                    {item.bar}
                                                </div>
                                                <div className="flex pl-3 pb-3">
                                                    <div>
                                                        {item.day} 
                                                    </div>
                                                    <div className="text-[#828282] text-[12px] leading-[16px] font-light ml-2">
                                                        {item.daysleft}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </item>
                                    )})}
                        </Carousel>
                    </div>  
                </div>
            </div>
            <div className="font-sans">
                <h1 className="text-[#03396D] text-center text-[32px] leading-[43px] font-bold py-5">Educational Videos for guiding</h1>
                    <div className="flex flex-wrap justify-between pl-24 pr-28  py-10">
                        <div>
                            <img className="" src="Group 8.svg" alt="group 8"/>
                        </div>
                        <div className="text-justify text-[14px] leading-[19px] font-light w-[533px] h-[252px]">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
                                consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla 
                                facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                                nulla facilisi.
                            </p>
                            <br/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
                                ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between pl-24 pr-28  py-10">
                        <div className="text-justify text-[14px] leading-[19px] font-light w-[533px] h-[252px]">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
                                consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla 
                                facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                                nulla facilisi.
                            </p>
                            <br/>  
                            <p> 
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
                                ex ea commodo consequat.
                            </p>
                        </div>
                        <div>
                            <img  className="" src="Group 8.svg" alt="group 8"/>                    
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between pl-24 pr-28 py-10">
                        <div>
                            <img className="" src="Group 8.svg" alt="group 8"/>
                        </div>
                        <div className="text-justify text-[14px] leading-[19px] font-light w-[533px] h-[252px]">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
                                consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla 
                                facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                                nulla facilisi.
                            </p>
                            <br/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
                                ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
            </div>
            <div className="bg-[#F2F5F7] py-20 px-10">
                <div className="bg-[#03396D] rounded-[15px] text-white">
                    <h2 className="text-center text-[32px] leading-[43px] font-black py-5">How It Works</h2>
                    <div className="flex justify-between px-10 py-10">
                        <div className="flex flex-col items-center gap-y-4 p-10">
                            <img src="/signup.svg"/>
                            <h4 className="text-[18px] leading-[24px] font-bold ">Start Up - Sign Up</h4>
                            <p className="text-[12px] leading-[16px] font-light text-center">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
                                commodo consequat.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-y-4 p-10">
                            <img src="/idea.svg"/>
                            <h4 className="text-[18px] leading-[24px] font-bold ">Create Business Idea</h4>
                            <p className="text-[12px] leading-[16px] font-light text-center">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
                                commodo consequat.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-y-4 p-10">
                            <img src="/fund.svg"/>
                            <h4 className="text-[18px] leading-[24px] font-bold ">Rise Business Funding</h4>
                            <p className="text-[12px] leading-[16px] font-light text-center">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea 
                                commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Figma;