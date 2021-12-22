import { AppBar, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { cyan } from "@mui/material/colors";
import { Box } from '@mui/system';
import { MinisterstvoLogo } from '../Consts/Photos';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { LoginModal } from './LoginModal';
import { LoggedIn } from '../Functions/LoggedIn';
import { User } from '../Interfaces/User';
import { getUser } from '../Functions/GetUser';

interface Props {

}

export const Header: FunctionComponent<Props> = () => {


    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User|null>(null);

    useEffect(() => {
        setLoggedIn(LoggedIn);
    }, [])
    useEffect(() => {
        if (loggedIn) {
            setUser(getUser());
        }
    }, [loggedIn])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' style={{ background: cyan[500], padding: "10px" }}>
                <Toolbar variant='dense' className='MainToolBar'>
                    <Link href="/">
                        <img className='slika' src={MinisterstvoLogo} alt='Logo ministerstva' />
                    </Link>
                    {
                        !loggedIn ?
                            <div onClick={() => { setOpenLogin(true) }}>
                                <LoginIcon />
                            </div>
                            :
                            <div className='iconContainer' onClick={() => { setLoggedIn(false); localStorage.removeItem("logedInUser"); window.location.replace("/");}}>
                                <div style={{paddingRight: "10px", fontWeight: "bold", fontSize: "large"}}>
                                    {user?.username}
                                </div>
                                <LogoutIcon />
                            </div>
                    }
                </Toolbar>
            </AppBar>
            <LoginModal open={openLogin} setOpenLogin={setOpenLogin} setLoggedIn={setLoggedIn}/>
        </Box>
    )
}
