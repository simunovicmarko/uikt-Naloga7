import { Button, Dialog, FormControl, Input, InputLabel, TextField } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import { UserType } from '../Enums/UserType';

interface Props {
    open: boolean,
    setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>,
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginModal: FunctionComponent<Props> = ({ open, setOpenLogin , setLoggedIn}) => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const users = [
        {
            username: 'uporabnik',
            password: 'geslo',
            type: UserType.Regular
        },
        {
            username: 'admin',
            password: 'admin',
            type: UserType.Admin
        }
    ];

    const handleLogin = () => {
        let newUser = { username: username, password: password };

        users.forEach(user => {
            if (user.username == newUser.username && user.password == newUser.password) {
                localStorage.setItem('logedInUser', JSON.stringify(user));
                setOpenLogin(false);
                setLoggedIn(true)
            }
        });
    }


    return (
        <Dialog open={open} >
            <div className="loginModal">
                <div className='escapeBtn' onClick={()=> {setOpenLogin(false)}}>X</div>
                <h1>Prijava</h1>
                <FormControl className='myFormControl' required={true}>
                    <InputLabel htmlFor="my-input-username">Uporabniško ime</InputLabel>
                    <Input id="my-input-username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </FormControl>
                <FormControl className='myFormControl' required={true}>
                    <InputLabel htmlFor="my-input-password">Geslo</InputLabel>
                    <Input id="my-input-password" type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </FormControl>
                <Button color='secondary' variant="contained" onClick={handleLogin}>
                    Prijavi se
                </Button>
            </div>
        </Dialog>
    )
}
