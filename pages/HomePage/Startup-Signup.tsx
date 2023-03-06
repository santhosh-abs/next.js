import Investor from './InvestorSignin'


const StartupSignup = ()=> {
    return(
        <>
            <div className="flex justify-between bg-[#F2F5F7] py-5 px-10">
                <div>
                    <Investor/>
                </div>
                <div className="w-[400px] bg-white">
                    <div className="flex justify-between items-center bg-[#03396D] rounded-t-lg py-5 px-5">
                        <button className="text-[#03396D] text-[16px] leading-[21px] font-bold font-sans bg-white py-3 px-10 rounded-[50px]">Start-Up</button>
                        <button className="text-white text-[16px] leading-[21px] font-bold font-sans pl-3">Investors</button>
                    </div>
                    <div className="border-[#03396D] border-t-0 border">
                        <div className="flex flex-col py-5 px-10">
                            <img className="mx-auto pb-8" src="/VK-Logo-blue 1.svg"/>
                            <label className="text-[#6F6F6F] text-[14px] leading-[19px] font-[350] font-sans">First Name</label>
                            <input className="border-b border-[#6F6F6F] focus:border-b focus:outline-none" type="text" />
                            <label className="text-[#6F6F6F] text-[14px] leading-[19px] font-[350] font-sans pt-8">Last Name</label>
                            <input className="border-b border-[#6F6F6F] focus:border-b focus:outline-none" type="text" />
                            <label className="text-[#6F6F6F] text-[14px] leading-[19px] font-[350] font-sans pt-8">Email Address</label>
                            <input className="border-b border-[#6F6F6F] focus:border-b focus:outline-none" type="email" />
                            <label className="text-[#6F6F6F] text-[14px] leading-[19px] font-[350] font-sans pt-8">Password</label>
                            <input className="border-b border-[#6F6F6F] focus:border-b focus:outline-none" type="password" />
                            <label className="text-[#6F6F6F] text-[14px] leading-[19px] font-[350] font-sans pt-8">Enter Captcha</label>
                            <input className="border-b border-[#6F6F6F] focus:border-b focus:outline-none" type="text" />
                        </div>
                        <div className="py-4">
                            <img className="border border-[#6F6F6F] mx-auto py-2 px-5" src="/captcha.svg"/>
                        </div>
                        <div className="flex justify-between items-center py-4 px-8">
                            <input type="checkbox" /><span className="text-black text-[14px] leading-[19px] font-normal">By clicking "sign up" you agree to <span className="text-[#03396D]">terms & conditions</span></span>
                        </div>
                        <div className="text-center py-5">
                            <button className="text-white bg-[#03396D] text-[14px] leading-[19px] font-bold py-2 px-10">Sign Up</button>
                        </div>
                        <div className="text-center">
                            <h3 className="text-black text-[14px] leading-[19px] font-normal font-sans pb-5">Already have an account ? <span className="text-[#03396D]">Sign In</span></h3>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StartupSignup;