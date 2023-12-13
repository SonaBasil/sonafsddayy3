import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Button variant="contained" color="error">
                <Link to = {'/loaddata'}>LOAD DATA</Link>
                </Button>
                <Button variant="contained" color="error">
                <Link to = {'/'}>HOME</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar