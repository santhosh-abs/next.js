import React from "react"
import Carousel from "react-elastic-carousel"
import Header from './HomeHeader'



const HomeMain = ()=> {
    const card = [
        {
            img:<img src="/Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="/Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'AYANEO 2: Completely Different AMD 6800U Handheld',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day.svg"/>,
            daysleft:'98 days left',
        },
        {
            img:<img src="/Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'BLUETTI AC500 & B300S - Super Capacity Home Backup Power',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day.svg"/>,
            daysleft:'98 days left',
        },
        {
            img:<img src="/Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'Kineon Move +: Targeted Treatment, Effective Relief`',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="/Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="/Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="/Rectangle.svg" alt="store" />,
            head:'Funding',
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'AMD 6800U, 6` 1080P, 16GB/32GB Memory, Comes Standard With 1TB/2TB SSD, USB4 Supporting eGPU, 4G LTE',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day.svg"/>,
            daysleft:'98 days left',

        },
    ]
    const cards = [
        {
            img:<img src="/Rec-big.svg" alt="store" />,
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            percent:'55%',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day-white.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="/Rec-big.svg" alt="store" />,
            bold:'AYANEO 2: Completely Different AMD 6800U Handheld',
            para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            percent:'55%',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day-white.svg"/>,
            daysleft:'98 days left',
        },
        {
            img:<img src="/Rec-big.svg" alt="store" />,
            bold:'BLUETTI AC500 & B300S - Super Capacity Home Backup Power',
            para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            percent:'55%',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day-white.svg"/>,
            daysleft:'98 days left',
        },
        {
            img:<img src="/Rec-big.svg" alt="store" />,
            bold:'Kineon Move +: Targeted Treatment, Effective Relief`',
            para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            percent:'55%',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day-white.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="/Rec-big.svg" alt="store" />,
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            percent:'55%',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day-white.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="/Rec-big.svg" alt="store" />,
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            percent:'55%',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day-white.svg"/>,
            daysleft:'98 days left',

        },
        {
            img:<img src="/Rec-big.svg" alt="store" />,
            bold:'GPD WIN 4: Smallest 6800U handheld console',
            para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
            tech:'Technology',
            dollar:'$3,809 USD raised',
            percent:'55%',
            bar:<img src="/bar.svg"/>,
            day:<img src="/day-white.svg"/>,
            daysleft:'98 days left',

        },
    ]
    const breakpoints = [
        {width: 1, itemsToShow:1},
        {width: 550, itemsToShow:2},
        {width: 768, itemsToShow:3},
        {width: 1200, itemsToShow:4},
    ]
    const breakpoint = [
        {width: 1, itemsToShow:1},
        {width: 550, itemsToShow:1},
        {width: 768, itemsToShow:1},
        {width: 1200, itemsToShow:1},
    ]
    const icon = [
        {
            img:<img className="py-3" src="/Home.svg"/>,
            head:'Home'
        },
        {
            img:<img className="py-3" src="/Vector (1).svg"/>,
            head:'Phone & Accessories'
        },
        {
            img:<img className="py-3" src="/Bag.svg"/>,
            head:'Travel & Outdoor'
        },
        {
            img:<img className="py-3" src="/Vector (3).svg"/>,
            head:'Health & Fitness'
        },
        {
            img:<img className="py-3" src="/Vector (4).svg"/>,
            head:'Audio'
        },
        {
            img:<img className="py-3" src="/Group (2).svg"/>,
            head:'Film'
        },
    ]
    return(
        <> 
            <div>
                <Header/>
            </div>
            <div>
                <div className="relative">
                    <img className="w-[100%]" src="/clip.svg" alt="clip1"/>
                    <div className="absolute top-[70px] right-0 pr-20 ">
                        <h1 className="text-[#FFFFFF] text-right text-[42px] leading-[57px] font-black font-sans pb-2">CROWDFUNDING</h1>
                        <h4 className="text-[#FFFFFF] text-right text-[28px] leading-[38px] font-black font-sans pb-5">How Does it Work?</h4>
                      
                            <p className="justify-end text-[#FFFFFF] text-right text-[16px] leading-[21px] font-light font-sans pb-10 w-[405px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                                laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
                                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis 
                                nostrud exerci tation ullamcorper suscipit 
                            </p>
                       
                        <div className="text-right">
                            <button className="text-[#03396D] bg-white py-2 px-8 rounded-2xl">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-[#03396D] text-center text-[36px] leading-[49px] font-black font-sans py-14" >
                        Find it first on VK Investments
                    </h1>
                    <p className="text-black text-center text-[16px] leading-[21px] font-light font-sans px-48">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                        suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in 
                        vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan 
                        et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    </p>
                    <div className="flex justify-center py-10 gap-x-32">
                        <div className="">
                            <button className="bg-[#03396D] border-2 border-[#03396D] text-white text-[16px]
                            leading-[21px] font-semibold px-7 py-2 hover:border-3 hover:border-[#8008b8]">SIGN UP NOW</button>
                        </div>
                        <div className="" >
                            <button className="border-2 border-[#03396D] bg-white text-[#03396D] text-[16px]
                            leading-[21px] font-semibold px-7 py-2 hover:border-3 hover:border-[#8008b8]">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className="pl-10 pr-10 pt-5 pb-10 ftd-deals">
                    <h1 className=" text-[#03396D] text-[24px] leading-[32px] font-bold pb-6 ">Recently Launched Funding</h1>
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
                                            <div className="text-black text-[16px] leading-[21px] font-bold pl-3 pb-3">
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
                <div className="flex justify-between px-10 py-10">
                    <div className="flex flex-col relative">
                        <img src="/Group 29.svg"/>
                        <h3 className="text-white text-[36px] leading-[48px] font-bold absolute top-[40%] left-1/2 -translate-x-1/2 w-[343px]">Technology Funding</h3>
                        <div className="flex justify-between py-3">
                            <h4 className="">Our roundup of standout projects</h4>
                            <h4>SEE THE COLLECTION</h4>
                        </div>
                    </div>
                    <div className="flex flex-col relative" >
                        <img src="/Group (1).svg"/>
                        <h3 className="text-white text-[36px] leading-[48px] font-bold absolute top-[40%] left-1/2 -translate-x-1/2">Spend Under $500</h3>
                        <div className="flex justify-between py-3">
                            <h4 className="">Our roundup of standout projects</h4>
                            <h4>SEE THE COLLECTION</h4>
                        </div>
                    </div>
                </div>
                <div className="pt-10">
                    <h1 className="text-[#03396D] text-center text-[32px] leading-[43px] font-semibold pb-5">Which categories interest you?</h1>
                    <p className="text-black text-center text-[16px] leading-[21px] font-light pb-5">Discover projects just for you and get great recommendation when you select your interests</p>
                    <div className="text-center">
                        <button className="border-2 border-[#3f3e3e] text-black text-[16px] leading-[21px] font-light py-3 px-12">SIGN UP AND SELECT INTEREST</button>
                    </div>
                    <h4 className="text-black text-center text-[16px] leading-[21px] font-light pt-5 pb-5">Or explore our categories</h4>
                </div>
                
                <div className="flex justify-between p-10">
                {icon.map((item => {
                    return(
                    <div className="flex flex-col items-center">
                        {item.img}
                        <h4 className="text-black text-[16px] leading-[21px] font-normal ">{item.head}</h4>
                    </div>
                     )}))}
                </div>
               
                <div className="text-center py-10">
                    <h1 className="text-[#03396D] text-[32px] leading-[43px] font-black pb-10">OFFERS</h1>
                    <div className="px-48">
                        <p className="text-black text-[14px] leading-[19px] font-light ">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
                    <div className="px-14">
                    <Carousel breakPoints={breakpoint} >
                            {cards.map((item) =>{return(
                                <item>
                                    <div className="text-center">
                                        <div className="">
                                            <div className="flex justify-center  py-10">
                                                {item.img}
                                            </div>
                                            <div className="text-white text-[24px] leading-[32px] text-center font-black uppercase pb-3">
                                                {item.bold}
                                            </div>
                                            <div>
                                                <p className="text-white text-[18px] leading-[24px] font-normal px-56 pb-3">{item.para}</p>
                                            </div>
                                            <div className="flex justify-end text-black text-[14px] leading-[19px] font-semibold pr-32 pb-1">
                                                {item.percent}
                                            </div>
                                            <div className="flex justify-end pr-32 pb-3">
                                                {item.bar}
                                            </div>
                                            <div className="flex justify-between pb-3">
                                                <div className="text-white text-[18px] leading-[24px] font-bold pl-32">
                                                    {item.dollar}
                                                </div>
                                                <div className="flex items-center pr-32">
                                                    <div className="text-white">
                                                        {item.day} 
                                                    </div>
                                                    <div className="text-white text-[14px] leading-[19px] font-light ml-2">
                                                        {item.daysleft}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </item>
                                )})}
                    </Carousel>
                    </div>
                </div>
                <div>
                    <h1 className="text-[#03396D] text-center text-[32px] leading-[43px] font-black font-sans py-14" >
                        Registration for Entrepreneurs
                    </h1>
                    <p className="text-black text-center text-[16px] leading-[21px] font-light font-sans px-48">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
                        suscipit lobortis nisl ut aliquip ex ea commodo.
                    </p>
                    <div className="flex justify-center py-10 gap-x-32">
                        <div className="">
                            <button className="bg-[#03396D] border-2 border-[#03396D] text-white text-[16px]
                            leading-[21px] font-semibold px-7 py-2 hover:border-3 hover:border-[#8008b8]">SIGN UP NOW</button>
                        </div>
                        <div className="" >
                            <button className="border-2 border-[#03396D] bg-white text-[#03396D] text-[16px]
                            leading-[21px] font-semibold px-7 py-2 hover:border-3 hover:border-[#8008b8]">LEARN MORE</button>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default HomeMain;