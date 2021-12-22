import React, { FunctionComponent } from 'react'
import { Form } from '../Interfaces/Form'

interface Props {
    form: Form
}

export const FormItem:FunctionComponent<Props> = ({form}) => {
    return (
        <div>
            <h3>{form.stanje}</h3>
        </div>
    )
}
