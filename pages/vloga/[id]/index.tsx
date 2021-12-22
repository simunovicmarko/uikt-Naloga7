import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { DisplayForm } from '../../../Components/DisplayForm';
import { InputContainer } from '../../../Components/InputContainer';
import { Stanje } from '../../../Enums/Stanja';
import { addForm } from '../../../Functions/AddForm';
import { getForm } from '../../../Functions/GetForm';
import { getUser } from '../../../Functions/GetUser';
import { removeForm } from '../../../Functions/RemoveForm';
import { Form } from '../../../Interfaces/Form';
import { User } from '../../../Interfaces/User';

interface Props {
}

export const vloga: FunctionComponent<Props> = () => {

    const [form, setForm] = useState<Form | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        setUser(getUser());
    }, [])


    const router = useRouter();
    const { id } = router.query;

    const handleSubmit = (stanje: Stanje) => {
        if (form) {
            form.stanje = stanje;
            removeForm(form.id);
            addForm(form);
        }
    }



    useEffect(() => {
        if (id) {
            setForm(getForm(id.toString()));
        }
    }, [id])
    if (form) {
        return (
            <InputContainer>
                <div className='m-4'>
                    <b>Status: </b>
                    {form.stanje ? Stanje[form.stanje] : console.log(form.stanje)}
                </div>
                <DisplayForm form={form} />
                {user && user.username === 'admin' ?
                    <div className='button-container'>
                        <Button href="/" type="submit" variant='contained' color='success' className='nextBtn' onClick={() => handleSubmit(Stanje.Odobreno)} >
                            Odobritev <br /> zahteve
                        </Button>
                        <Button href="/" type="submit" variant='contained' color='error' className='nextBtn' onClick={() => handleSubmit(Stanje.Zavrnjeno)} >
                            Odobritev <br /> zahteve
                        </Button>
                    </div>
                    : null    
                }
            </InputContainer>
        )

    }
    return (
        <h1>
            Zahteva ne obstaja
        </h1>
    )
}


export default vloga;