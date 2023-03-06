// import { Modal } from '@mui/material'
import { Modal } from 'flowbite-react'

import Sidenav from './sidenav'
import Table from './table'

const Campaign = ()=> {
    return(
        <>
            <div className="flex  bg-[#F2F5F7] pb-12">
                <div className="basis-2/12 bg-white pt-12">
                    <Sidenav/>
                </div>
                <div className="grow bg-[#F2F5F7] font-sans px-10 py-8">
                    <div className=" text-[#03396D] text-[24px] leading-[32px] font-bold">
                        VK Investments
                    </div>
                    <div className=" flex justify-end">
                        <div className="flex items-center relative">
                            <input className="rounded-[3px] placeholder:text-black border border-black 
                            text-black text-[14px] leading-[19px] font-semibold w-[271px] pl-7 py-2.5 focus:outline-none" placeholder="Search"/>
                            <div className="absolute pl-2">
                                <img className="w-[14px]" src="search.svg" alt="search" />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-x-10'>
                        <button className="bg-[#03396D] rounded py-2 px-2"><img src='filter.svg'/></button>
                        <button className="text-white bg-[#03396D] text-[18px] leading-[24px] font-normal rounded py-2 px-5">Start Campaign</button>
                    </div>
                    <div>
                        <Table/>
                    </div>
                    <Button onClick={onClick}>
    Toggle modal
  </Button>
  <Modal
    show={false}
    onClose={onClose}
  >
    <Modal.Header>
      Terms of Service
    </Modal.Header>
    <Modal.Body>
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onClick}>
        I accept
      </Button>
      <Button
        color="gray"
        onClick={onClick}
      >
        Decline
      </Button>
    </Modal.Footer>
  </Modal>

                </div>
            </div>
        </>
    )
}
export default Campaign 