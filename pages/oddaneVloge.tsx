import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, unstable_useId } from '@mui/material';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { InputContainer } from '../Components/InputContainer';
import { getUser } from '../Functions/GetUser';
import { LoggedIn } from '../Functions/LoggedIn';
import { Form } from '../Interfaces/Form';
import { User } from '../Interfaces/User';
import { v4 } from "uuid";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import { UserType } from '../Enums/UserType';

interface Props {

}

export const oddaneVloge: FunctionComponent<Props> = () => {

    const [user, setUser] = useState<User | null>(null);
    const [userForms, setUserForms] = useState<Form[]>([])

    useEffect(() => {
        if (!LoggedIn()) {
            window.location.replace("/");
        }
        else
            setUser(getUser());
    }, [])


    useEffect(() => {
        getUserForms();
    }, [user])





    const getUserForms = () => {
        let temp = localStorage.getItem('forms');
        let forms: Array<Form> = [];
        if (temp !== null)
            forms = JSON.parse(temp);

        if (user?.username !== "admin") {
            console.log(user)
            forms = forms.filter(el => {
                if (user) {
                    return el.username == user.username
                }
            });

        }
        setUserForms(forms);

    }

    return (
        <div>
            <InputContainer>
                <List className='formList'>
                    {
                        userForms.map(form =>
                            <ListItem key={v4()} className='ListItem'>
                                <ListItemText primary={`Vlagatelj: ${form.ime} ${form.priimek}`} />
                                <ListItemText primary={`ID vloge: ${form.id}`} />
                                <ListItemText primary={`Status: ${form.stanje}`} />
                                <Button style={{ margin: "0px" }} href={`/vloga/${form.id}`}>
                                    <ArrowForwardIosIcon />
                                </Button>
                            </ListItem>
                        )
                    }
                </List>
            </InputContainer>
        </div>
    )
}

export default oddaneVloge;

