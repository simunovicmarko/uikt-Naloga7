import { Button } from '@mui/material'
import React, { FunctionComponent } from 'react'
import { cyan } from "@mui/material/colors"
import Link from 'next/link'

interface Props {

}

export const LandingPage: FunctionComponent<Props> = () => {
    return (
        <div className='landingPage'>
            <h1>Dobrodošli na portalu Ministerstva za zunanje zadeve</h1>
            <Button href="inputForm" variant='contained' color='primary' className='LPBtn'>
                Oddaj vlogo: Zahteva za seznanitev s podatki v Vizumskem informacijskem sistemu (VIS) v Sloveniji
            </Button>
            <Button href="/oddaneVloge" variant='contained' color='primary' className='LPBtn'>Pregled oddanih vlog</Button>
        </div>
    )
}
