import { Input } from '@mui/material'
import React, { FunctionComponent } from 'react'

interface Props {
    title: string,
    TBSetValue: React.Dispatch<React.SetStateAction<string | undefined>>,
    TBValue: string | undefined,
    minRows?: number
}

export const MyInput: FunctionComponent<Props> = ({ title, TBSetValue, minRows, TBValue }) => {
    return (
        <div className='myInput'>
            <h3 style={{width: "25%", textAlign: "center"}}>
                {title}
            </h3>
            <Input id='PopravekNetočnihPodatkovTB'
                aria-describedby="my-helper-text"
                multiline={true} color="secondary"
                onChange={(e) => { TBSetValue(e.target.value) }}
                value={TBValue}
                style={{ backgroundColor: "#fff", width: "100%", marginLeft: "10px" }}
                minRows={minRows ? minRows : 1} 
                required={true}/>
        </div>
    )
}
