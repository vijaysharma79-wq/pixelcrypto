import React from 'react'
import { Dialog, Typography } from '@mui/material'
import { useState } from 'react'
import '../Navbar/dialog.css';

const Dailogs = ({open,setOpen}) => {
    // const [open,setO=pen]=useState(true)
    const handleclose=()=>{
        setOpen(false)
    }

  return (
// const handledialog=()=>{
//     setOpen(true)
// }
    <Dialog open={open} onClose={handleclose}>
       <div className='dialogbox'>
        <Typography>Connect Wallet</Typography>
        <div className='details'>
            <div className='wallet1' >
                <img src='metamask.4b5d438a.png' alt='metatask' style={{height:"20px"}}></img>
<Typography>MetaMask</Typography>
            </div>
            <div className='wallet1'>
            <img src='metamask.4b5d438a.png' alt='metatask' style={{height:"20px"}}></img>
<Typography>MetaMask</Typography>
            </div>
            <div className='wallet1'>

            <img src='metamask.4b5d438a.png' alt='metatask' style={{height:"20px"}}></img>
<Typography>MetaMask</Typography>
            </div>

        </div>
       </div>
      
    </Dialog>
  )
}

export default Dailogs