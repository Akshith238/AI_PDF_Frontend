import { Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col gap-[8px] p-8'>
        <Typography className='font-poppins text-4xl font-semibold text-black'>About MacroDoc AI</Typography>
        <Typography className='font-poppins font-medium text-xl text-black'>
          MacroDoc is your ultimate solution for automating VBA documentation. Whether you're managing complex Excel macros or developing new ones, MacroDoc simplifies the process by generating comprehensive documentation automatically. It evaluates the quality and efficiency of your VBA code, identifies potential inefficiencies, and offers optimization suggestions. With MacroDoc, 
          you can visualize the flow of your macros, map dependencies between files, and ensure robustness through error detection and correction using advanced machine learning algorithms. 
          Modernize your VBA workflows with MacroDoc and transform how you manage and integrate 
          macros into your systems.
        </Typography>
    </div>
  )
}

export default About