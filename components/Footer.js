const Footer = ()=> {
    return(
        <>
            <div className="bg-[#F2F5F7]">
                <div className="flex flex-wrap justify-between px-10 pt-10">
                    <div className="basis-1/4 px-5 pt-5">
                        <img className="pb-12" src="/VK-Logo-blue 1.svg" alt="logo"/>
                        <p className="text-black text-[14px] leading-[19px] font-light">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
                            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
                        </p>
                    </div>
                    <div className="basis-1/4 px-5 pt-5">
                        <h2  className="text-[#03396D] text-[14px] leading-[19px] font-bold pb-5" >Explore</h2>
                        <p className="text-black text-[14px] leading-[19px] font-normal pb-3">What We D0</p>
                        <p className="text-black text-[14px] leading-[19px] font-normal pb-3">Funding</p>
                        <p className="text-black text-[14px] leading-[19px] font-normal">Services</p>
                    </div>
                    <div className="basis-1/4 px-5 pt-5">
                        <h2  className="text-[#03396D] pb-5" >Contact Us</h2>
                        <div className="flex text-black text-[14px] leading-[19px] font-normal pb-3">
                            <img className="pr-3" src="/phone.svg"/>
                            +1-647-945-5271
                        </div>
                        <div className="flex text-black text-[14px] leading-[19px] font-normal pb-3">
                            <img className="pr-3" src="/email.svg"/>
                            info@vk-rise-investments.com
                        </div>
                        <div className="flex text-black text-[14px] leading-[19px] font-normal">
                            <img className="pr-3" src="/location.svg"/>
                            1 Yonge St #1801, Toronto, ON M5E 1E5, Canada
                        </div>
                    </div>
                </div>
                <div className="flex justify-end pr-20">
                    <img src="/insta.svg"/>
                </div>
                <div className="flex justify-end gap-x-28 text-[#03396D] py-5 pr-20" >
                    <p className="text-[#03396D] text-[14px] leading-[19px] font-bold">Terms & Condition</p>
                    <p className="text-[#03396D] text-[14px] leading-[19px] font-bold">Privacy Policies</p>
                    <p className="text-[#03396D] text-[14px] leading-[19px] font-bold">Refund Policies</p>
                    <p className="text-[#03396D] text-[14px] leading-[19px] font-bold">Disclaimer</p>
                </div>
                <div className="bg-[#03396D] py-5 text-center">
                    <p className="text-white">Copyright 2023 | SVK ENTREPRENEURS Pvt Ltd | All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer;