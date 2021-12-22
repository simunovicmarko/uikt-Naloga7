import React, { FunctionComponent } from 'react'

interface Props {

}

export const Success: FunctionComponent<Props> = () => {
    return (
        <div className='flex justify-center items-center text-center w-full h-full'>
            <h1>

                Spoštovani, Vaša zahteva je bila: <br />
                <b>ODDANA</b>
            </h1>
        </div>
    )
}


export default Success;
