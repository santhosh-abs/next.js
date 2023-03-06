import Investor from './InvestorSignin'

const CardSignin = ()=> {
    return(
        <>
            <div className="flex justify-between bg-[#F2F5F7] py-5 px-10">
                <div>
                    <Investor/>
                </div>
                <div className="w-[400px]">
                    <div className="bg-white">
                        <div className="flex justify-between items-center bg-[#03396D] rounded-t-lg py-5 px-5">
                            <button className="text-white text-[16px] leading-[21px] font-bold font-sans pl-3">Start-Up</button>
                            <button className="text-[#03396D] text-[16px] leading-[21px] font-bold font-sans bg-white py-3 px-10 rounded-[50px]  ">Investors</button>
                        </div>
                        <div className="border-[#03396D] border-t-0 border">
                            <div className="flex flex-col py-5 px-10">
                                <img className="mx-auto pb-8" src="/VK-Logo-blue 1.svg"/>
                                <label className="text-[#6F6F6F] text-[14px] leading-[19px] font-[350] font-sans">Email Address</label>
                                <input className="border-b border-[#6F6F6F] focus:border-b focus:outline-none" type="text" />
                                <label className="text-[#6F6F6F] text-[14px] leading-[19px] font-[350] font-sans pt-8">Password</label>
                                <input className="border-b border-[#6F6F6F] focus:border-b focus:outline-none" type="password" />
                            </div>
                            <div className="text-center py-5">
                                <button className="text-white bg-[#03396D] text-[14px] leading-[19px] font-bold py-2 px-10">Sign In</button>
                            </div>
                            <div className="flex justify-center">
                                <img src="/Line 6.svg"/>
                                <span className="text-black text-[12px] leading-[16px] font-normal font-sans px-3"> OR</span>
                                <img src="/Line 6.svg"/>
                            </div>
                            <div className="flex flex-col px-10 items-center gap-y-3 pb-5">
                                <h3 className="text-black text-[14px] text-center leading-[19px] font-light font-sans pt-2">Sign Up with social media account</h3>
                                <div className="flex items-center bg-[#3B5998] py-1 px-2">
                                    <img className="" src="/facebook.svg"/>
                                    <h4 className="text-white text-[14px] leading-[19px] font-bold font-sans px-5">CONTINUE WITH FACEBOOK</h4>
                                </div>
                                <div className="flex items-center bg-[#0072B1] py-1 px-3">
                                    <img src="/linkedin.svg"/>
                                    <h4 className="text-white text-[14px] leading-[19px] font-bold font-sans px-5">CONTINUE WITH LINKEDIN</h4>
                                </div>
                                <div className="flex items-center py-1 px-4 border border-[#AEAEAE]">
                                    <img src="/google.svg"/>
                                    <h4 className="text-[#AEAEAE] text-[14px] leading-[19px] font-bold font-sans px-5">CONTINUE WITH GOOGLE</h4>
                                </div>
                                <div>
                                    <h3 className="text-black text-[14px] leading-[19px] font-normal font-sans ">Not a member yet ? <span className="text-[#03396D]">Sign Up</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between pt-3">
                        <div className="flex items-center">
                            <input className="" type="checkbox" /><span className="text-black text-[14px] leading-[19px] font-normal font-sans pl-3">Remember me</span>
                        </div>
                        <h4 className="text-[#03396D] text-[14px] leading-[19px] font-semibold ">Forgot password ?</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardSignin;