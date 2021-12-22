import React, { FunctionComponent, useEffect, useState } from 'react'
import { InputContainer } from '../Components/InputContainer'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel } from "@mui/material"
import { getUser } from '../Functions/GetUser';
import { LoggedIn } from '../Functions/LoggedIn';
import { Form } from '../Interfaces/Form';
import { User } from '../Interfaces/User';
import {v4} from "uuid";

interface Props {

}

export const InputForm: FunctionComponent<Props> = () => {

    const [fh1, setFh1] = useState(false);
    const [fh2, setFh2] = useState(false);
    const [fh2TB, setFh2TB] = useState<string | undefined>();
    const [fh3, setFh3] = useState(false);
    const [fh3TB, setFh3TB] = useState<string | undefined>();
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        if (!LoggedIn()) {
            window.location.replace("/");
        }
        else {
            setUser(getUser());
        }
    }, [])

    const formHeader1: string = "Seznanitev z osebnimi podatki, ki se nanašajo name in se obdelujejo v vizumskem informacijskem sistemu (VIS). Information about the personal data relating to me being processed in the Visa Information System (VIS)."
    const formHeader2: string = `Popravek netočnih podatkov, ki se v vizumskem informacijskem sistemu (VIS) vodijo o
                                 meni. Prosimo, da spodaj napišete kateri podatki so netočni.
                                 Correction of inaccurate data which is stored in Visa Information System (VIS). Please
                                 specify below which personal data is incorrect.`;
    const formHeader3: string = `Izbris podatkov, ki so bili v vizumski informacijski sistem (VIS) vneseni nezakonito.
                                 Prosimo, da spodaj utemeljite kateri podatki so bili vneseni nezakonito.
                                 Deletion of data unlawfully recorded in Visa Information System (VIS). Please
                                 specify/proof which data was recorded unlawfully.`;

    const onClickNext = (): void => {
        let tempForm: Form = {
            id: v4(),
            username: user?.username,
            Seznanitev: fh1,
            Popravek: fh2,
            PopravekOpis: fh2TB,
            IzbrisPodatkov: fh3,
            IzbrisPodatkovOpis: fh3TB,
        }

        sessionStorage.setItem("prvaForma", JSON.stringify(tempForm));
        window.location.replace("/inputForm2");
    }

    return (
        <div style={{ position: "relative", height: "100%" }}>
            <InputContainer>
                <h1 className='Naslov'>Zahteva za seznanitev s podatki v Vizumskem informacijskem sistemu (VIS) v Sloveniji</h1>
                <FormGroup>

                    <FormControlLabel id='SeznanitevZOsebnimiPodatki'
                        control={<Checkbox defaultChecked={false} />}
                        onChange={() => { setFh1(!fh1) }}
                        label={formHeader1}
                        className="cb" />

                    <FormControlLabel id='PopravekNetočnihPodatkovCB'
                        control={<Checkbox defaultChecked={false} />}
                        onChange={() => { setFh2(!fh2) }}
                        label={formHeader2}
                        className="cb" />

                    <Input id='PopravekNetočnihPodatkovTB'
                        disabled={!fh2}
                        aria-describedby="my-helper-text"
                        multiline={true} color="secondary"
                        onChange={(e) => { setFh2TB(e.target.value) }}
                        style={{ backgroundColor: "#fff" }}
                        minRows={4} />

                    <FormControlLabel id="IzbrisPodaktovCB"
                        onChange={() => { setFh3(!fh3) }}
                        control={<Checkbox defaultChecked={false} />}
                        label={formHeader3}
                        className="cb" />

                    <Input id="IzbrisPodaktovTB"
                        disabled={!fh3}
                        aria-describedby="my-helper-text"
                        multiline={true}
                        color="secondary"
                        style={{ backgroundColor: "#fff" }}
                        onChange={(e) => { setFh3TB(e.target.value) }}
                        minRows={4} />
                </FormGroup>
            </InputContainer>
            <div className='button-container'>
                <Button variant='contained'  className='nextBtn bg-baby-blue' onClick={onClickNext}>
                    Naprej
                </Button>
            </div>
        </div>
    )
}

export default InputForm;