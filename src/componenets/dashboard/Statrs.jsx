import { Typography } from '@mui/material'
import React from 'react'
import '../dashboard/stats.css'
import Statsbox from './Statsbox'

const Statrs = () => {
  return (
    <div className='stats-main'>
        <div className='stats-heading'>
            <Typography>stats</Typography>
            <Typography>
        Ethereum Total Stats start from 06 Jan 2022.
For detailed stats:

        </Typography>
            
        </div>
       
        <div className='stats-box'>
           <Statsbox/>
           <Statsbox/>
            

        </div>
</div>
  )
}

export default Statrs


//