import { Button } from '@mui/material'
import React from 'react'

const Homeheader = () => {
  return (
    <div className='home-main'>
    <div className='home-1'>

    <h1>Decntralize Perpetual Exhange</h1>
    <h4>Trade BTC,ETH,AVAX and other top Cryptocurencies with upto 30x leaverage directly form your vallet</h4>
    {/* <button>Launch Exchange</button> */}
    <Button  variant="contained" color="success">Launch Exchange</Button>

    </div>
    <div className='home-2'></div>

<div className='Home-cart'>

<div className='box'>
<img src='ic_totaluser.ae09b310.svg'></img>
<div>
<span>Total usser</span>
<span>$0</span>
</div>
</div>
<div className='box'>
<img src='ic_totaluser.ae09b310.svg'></img>
<div className='box-item'>
<span>Total usser</span>
<span>$0</span>
</div>
</div>
<div className='box'>
<img src='ic_totaluser.ae09b310.svg'></img>
<div>
<span>Total usser</span>
<span>$0</span>
</div>
</div>

</div>

</div>
  )
}

export default Homeheader