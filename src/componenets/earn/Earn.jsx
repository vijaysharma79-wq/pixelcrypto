import React from 'react'
import '../earn/eran.css'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
const Earn = () => {
  return (
    <div className='earn-main'>
<h2>EARN</h2>
<h5>Stake Zomi and $ZLP to earn reward</h5>
<div className='earn-box'>
    <h2>$ZOMI</h2>
    <div className='earn-box-1'>
        <div className='earn-box-detail'>
        <Typography>price</Typography>
        <Typography>....</Typography>
        </div>
        <div className='earn-box-detail'>
        <Typography>Wallet</Typography>
        <Typography>...$ZOMI($...)</Typography>
        </div>
        <div className='earn-box-detail'>
        <Typography>Staked</Typography>
        <Typography>...$ZOMI($...)</Typography>
        </div>
    
    </div>
    <div className='earn-box-1'>
    <div className='earn-box-detail'>
        <Typography>APRt</Typography>
        <Typography>...$ZOMI($...)</Typography>
        </div>
        <div className='earn-box-detail'>
        <Typography>Rewards</Typography>
        <Typography>...$ZOMI($...)</Typography>
        </div>
        <div className='earn-box-detail'>
        <Typography>Multiple Point APR</Typography>
        <Typography>...$ZOMI($...)</Typography>
        </div>
        <div className='earn-box-detail'>
        <Typography>Boost Percentage</Typography>
        <Typography>...%</Typography>
        </div>
    </div>
    <div className='earn-box-1'>
    <div className='earn-box-detail'>
        <h3>Total staked</h3>
        <p>...$ZOMI($...)</p>
        </div>
    </div>
    <div className='earn-box-1'>
        <Button variant="contained" color="success">
  Buy$ZOMI
</Button>
    </div>


</div>
    </div>
  )
}

export default Earn