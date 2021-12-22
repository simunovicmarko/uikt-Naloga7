import React, { FunctionComponent } from 'react'

interface Props {
    
}

export const InputContainer:FunctionComponent<Props> = ({children}) => {
    return (
        <div className='InputContainer'>
            {children}
        </div>
    )
}
