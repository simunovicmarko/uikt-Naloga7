import { Input } from '@mui/material'
    import React, { FunctionComponent } from 'react'

    interface Props {
        datum: string | undefined,
        setDatum: React.Dispatch<React.SetStateAction<string | undefined>>
    }

export const DateInput: FunctionComponent<Props> = ({datum, setDatum}) => {
    return (
        <div className='myInput'>
        <h3 style={{ width: "25%", textAlign: "center" }}>
            {"Datum rojstva"}
        </h3>
        <Input 
            aria-describedby="my-helper-text"
            color="secondary"
            onChange={(e) => { setDatum(e.target.value) }}
            value={datum}
            style={{ backgroundColor: "#fff", width: "100%", marginLeft: "10px" }}
            type='date'
            required={true} />
    </div>
    )
}
