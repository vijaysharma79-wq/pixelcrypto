import React from 'react'
import { Typography } from '@mui/material'

const Statsbox = () => {
  return (
    <div className='stats-box1'>
    <div className='stats-box-heading'>
        <Typography>Overview</Typography>
    
    </div>
    <div className='stats-box-detail-all'>
     <Typography>AUM</Typography>
    <Typography>$33</Typography>
     </div>
    <div className='stats-box-detail-all'>
     <Typography>$ZLP pool</Typography>
    
    <Typography>$33</Typography>
     </div> <div className='stats-box-detail-all'>
     <Typography>24h Volume</Typography>
     <Typography>$0</Typography>
     </div>
     <div className='stats-box-detail-all'>
     <Typography>Long Position</Typography>
    <Typography>$0</Typography>
     </div>
     <div className='stats-box-detail-all'>
    <Typography>Short Position</Typography>
     <Typography>$0</Typography>
    </div>
    
                </div>
  )
}

export default Statsbox