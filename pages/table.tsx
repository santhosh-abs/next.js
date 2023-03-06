const Table = ()=>{

const table = [
    {
        img:<img src="/loveclip.svg"/>,
        head2:'Big kahuna Burger Ltd.',
        head3:'Retail Sales',
        percent:'20%',
        btn1:<button className='bg-[#FEAC1A] text-black text-[12px] leading-[16px] font-semibold rounded py-2 px-10 '>$ 1,000.00</button>,
        btn2:<button className='bg-[#03396D] text-white text-[12px] leading-[16px] font-semibold rounded py-3 px-3 '>Active 8th Feb,2023</button>,
        btn3:'Investors',
        flex:<div className='flex justify-center gap-x-3'>
                <img src='eye.svg'/>
                <img src='edit.svg'/>
                <img src='delete.svg'/>
            </div>
    },
    {
        img:<img src="/time.svg"/>,
        head2:'Acme Co.',
        head3:'Retail Sales',
        percent:'30%',
        btn1:<button className='bg-[#FEAC1A] text-black text-[12px] leading-[16px] font-semibold rounded py-2 px-10 '>$ 7,000.00</button>,
        btn2:<button className='bg-[#03396D] text-white text-[12px] leading-[16px] font-semibold rounded py-3 px-3 '>Active 8th Feb,2023</button>,
        btn3:'Investors',
        flex:<div className='flex justify-center gap-x-3'>
                <img src='eye.svg'/>
                <img src='edit.svg'/>
                <img src='delete.svg'/>
            </div>
    },
    {
        img:<img src="/ob.svg"/>,
        head2:'Abstergo Ltd.',
        head3:'Retail Sales',
        percent:'80%',
        btn1:<button className='bg-[#FEAC1A] text-black text-[12px] leading-[16px] font-semibold rounded py-2 px-10 '>$ 6,000.00</button>,
        btn2:<button className='bg-[#ADADAD] text-white text-[12px] leading-[16px] font-semibold rounded py-2 px-6 '><h5>Finished</h5> 3rd Feb,2023</button>,
        btn3:'Investors',
        flex:<div className='flex justify-center gap-x-3'>
                <img src='eye.svg'/>
                <img src='edit.svg'/>
                <img src='delete.svg'/>
            </div>
    },
    {
        img:<img src="/paint.svg"/>,
        head2:'Biffco Enterprises Ltd.',
        head3:'Retail Sales',
        percent:'10%',
        btn1:<button className='bg-[#FEAC1A] text-black text-[12px] leading-[16px] font-semibold rounded py-2 px-12 '>$ 88.00</button>,
        btn2:<button className='bg-[#03396D] text-white text-[12px] leading-[16px] font-semibold rounded py-3 px-3 '>Active 8th Feb,2023</button>,
        btn3:'Investors',
        flex:<div className='flex justify-center gap-x-3'>
                <img src='eye.svg'/>
                <img src='edit.svg'/>
                <img src='delete.svg'/>
            </div>
    },
    {
        img:<img src="/barone.svg"/>,
        head2:'Barone LLC.',
        head3:'Retail Sales',
        percent:'0%',
        btn1:<button className='bg-[#FEAC1A] text-black text-[12px] leading-[16px] font-semibold rounded py-2 px-[52px] '>$ 0.00</button>,
        btn2:<button className='bg-[#FF0303] text-white text-[12px] leading-[16px] font-semibold rounded py-3 px-12 '>Draft</button>,
        btn3:'Investors',
        flex:<div className='flex justify-center gap-x-3'>
                <img src='eye.svg'/>
                <img src='edit.svg'/>
                <img src='delete.svg'/>
            </div>
    },
    {
        img:<img src="/ob.svg"/>,
        head2:'Biffco Enterprises Ltd.',
        head3:'Retail Sales',
        percent:'95%',
        btn1:<button className='bg-[#FEAC1A] text-black text-[12px] leading-[16px] font-semibold rounded py-2 px-10 '>$ 7,000.00</button>,
        btn2:<button className='bg-[#ADADAD] text-white text-[12px] leading-[16px] font-semibold rounded py-2 px-6 '><h5>Finished</h5> 12th Dec,2023</button>,
        btn3:'Investors',
        flex:<div className='flex justify-center gap-x-3'>
                <img src='eye.svg'/>
                <img src='edit.svg'/>
                <img src='delete.svg'/>
            </div>
    },
    {
        img:<img src="/Acme.svg"/>,
        head2:'Acme Co.',
        head3:'Retail Sales',
        percent:'5%',
        btn1:<button className='bg-[#FEAC1A] text-black text-[12px] leading-[16px] font-semibold rounded py-2 px-10 '>$ 7,000.00</button>,
        btn2:<button className='bg-[#03396D] text-white text-[12px] leading-[16px] font-semibold rounded py-3 px-3 '>Active 8th Feb,2023</button>,
        btn3:'Investors',
        flex:<div className='flex justify-center gap-x-3'>
                <img src='eye.svg'/>
                <img src='edit.svg'/>
                <img src='delete.svg'/>
            </div>
    },
    {
        img:<img src="/loveclip.svg"/>,
        head2:'Abstergo Ltd.',
        head3:'Retail Sales',
        percent:'1%',
        btn1:<button className='bg-[#FEAC1A] text-black text-[12px] leading-[16px] font-semibold rounded py-2 px-12 '>$ 10.00</button>,
        btn2:<button className='bg-[#03396D] text-white text-[12px] leading-[16px] font-semibold rounded py-3 px-3 '>Active 8th Feb,2023</button>,
        btn3:'Investors',
        flex:<div className='flex justify-center gap-x-3'>
                <img src='eye.svg'/>
                <img src='edit.svg'/>
                <img src='delete.svg'/>
            </div>
    },
    {
        img:<img src="/loveclip.svg"/>,
        head2:'Binford Ltd.',
        head3:'Retail Sales',
        percent:'100%',
        btn1:<button className='bg-[#FEAC1A] text-black text-[12px] leading-[16px] font-semibold rounded py-2 px-9 '>$ 50,060.00</button>,
        btn2:<button className='bg-[#ADADAD] text-white text-[12px] leading-[16px] font-semibold rounded py-2 px-6 '><h5>Finished</h5> 12th Dec,2023</button>,
        btn3:'Investors',
        flex:<div className='flex justify-center gap-x-3'>
                <img src='eye.svg'/>
                <img src='edit.svg'/>
                <img src='delete.svg'/>
            </div>
    },
    {
        img:<img src="/time.svg"/>,
        head2:'Barone LLC.',
        head3:'Retail Sales',
        percent:'30%',
        btn1:<button className='bg-[#FEAC1A] text-black text-[12px] leading-[16px] font-semibold rounded py-2 px-10 '>$ 3,000.00</button>,
        btn2:<button className='bg-[#03396D] text-white  text-[12px] leading-[16px] font-semibold rounded py-3 px-3 '>Active 8th Feb,2023</button>,
        btn3:'Investors',
        flex:<div className='flex justify-center gap-x-3'>
                <img src='eye.svg'/>
                <img src='edit.svg'/>
                <img src='delete.svg'/>
            </div>
    },
    
]
    return(
        <>
            <div className='pt-10'>
           
                <table className='border-collapse w-[100%] py-4'>
                    <thead className='text-black text-[14px] leading-[19px] font-normal '>
                        <tr className='bg-[#C2CFDB] text-center'>
                            <td className='text-left  pl-8 py-2'>
                                TITLE/CATEGORY
                            </td>
                            <td>
                                FUNDING GOAL
                            </td>
                            <td>
                                RECEIVED FUNDS
                            </td>
                            <td>
                                STATUS
                            </td>
                            <td>
                                INVESTORS
                            </td>
                            <td>
                                ACTION
                            </td>
                        </tr>
                    </thead>
                    {table.map((item)=>{
                        return(
                    <tbody className="">
                        <tr className='text-center bg-white'>
                            <td className='py-3 pl-8'>
                                <div className='flex items-center justify-start gap-x-4'>
                                    <div>
                                        {item.img}
                                    </div>
                                    <div>
                                        <h2 className="text-[#03396D] text-[16px] leading-[21px] font-bold ">{item.head2}</h2>
                                        <h3 className='text-left text-black text-[14px] leading-[19px] font-light '>{item.head3}</h3>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-[#03396D] text-[14px] leading-[19px] font-bold ">{item.percent}</p>
                            </td>
                            <td>
                                {item.btn1}
                            </td>
                            <td>
                                {item.btn2}
                            </td>
                            <td>
                            <button className='bg-[#0BF2AD] text-[#03396D] text-[12px] leading-[16px] font-semibold rounded py-2 px-3 '>{item.btn3}</button>
                            </td>
                            <td>
                                {item.flex}
                            </td>   
                        </tr>
                    </tbody>
                       )
                    })}
                </table>
            </div>
        </>
    )
}
export default Table;