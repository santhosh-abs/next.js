import { styled } from '@mui/material/styles';

import MuiAccordionSummary, {
    AccordionSummaryProps,
  } from '@mui/material/AccordionSummary';
  import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `none`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgb(242, 245, 247)'
        : 'rgb(194, 207, 219,)',
    '& MuiAccordionSummary-content': {
      alignItems: 'center',
    },
  }));

const SideNav = ()=> {
    return(
        <>
            <div>
            <Accordion>
                <AccordionSummary className="focus:bg-[#C2CFDB]">
                <div className="flex items-center gap-x-8">
                    <img src="/dashboard.svg"/>
                    <span className="text-[#03396D] text-[16px] leading-[21px] font-semibold font-sans ">Dashboard</span>
                </div>
                </AccordionSummary>
            </Accordion>
            <Accordion>
                <AccordionSummary className="focus:bg-[#C2CFDB]">
                <div className="flex items-center gap-x-8 ">
                    <img src="/campaign.svg"/>
                    <span className="text-[#03396D] text-[16px] leading-[21px] font-semibold font-sans ">Campaign</span>
                </div>
                </AccordionSummary>
            </Accordion>
            <Accordion>
                <AccordionSummary className="focus:bg-[#C2CFDB]">
                <div className="flex items-center gap-x-8">
                    <img src="/profile.svg"/>
                    <span className="text-[#03396D] text-[16px] leading-[21px] font-semibold font-sans ">My Profile</span>
                </div>
                </AccordionSummary>
            </Accordion>
            </div>
        </>
    )
}
export default SideNav;