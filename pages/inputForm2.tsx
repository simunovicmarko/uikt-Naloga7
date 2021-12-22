import React, { FunctionComponent, useEffect, useState } from 'react'
import { InputContainer } from '../Components/InputContainer'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel } from "@mui/material"
import { MyInput } from '../Components/MyInput';
import { DrugaForma } from '../Interfaces/DrugaForma';
import { Form } from '../Interfaces/Form';
import { addForm } from '../Functions/AddForm';
import { Stanje } from '../Enums/Stanja';
import { getDateString } from '../Functions/GetDate';
// import {DayPicker} from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

interface Props {

}

export const InputForm2: FunctionComponent<Props> = () => {

    // const [fh1, setFh1] = useState(false);
    const [ime, setIme] = useState<string | undefined>();
    const [priimek, setPriimek] = useState<string | undefined>();
    const [naslov, setNaslov] = useState<string | undefined>();
    const [DBivanja, setDBivanja] = useState<string | undefined>();
    const [DRojstva, setDRojstva] = useState<string | undefined>();
    const [KRojstva, setKRojstva] = useState<string | undefined>();
    const [drzavljanstvo, setDrzvaljanstvo] = useState<string | undefined>();
    const [osebna, setOsebna] = useState<string | undefined>();


    useEffect(() => {
        let drugaForma = sessionStorage.getItem("drugaForma");
        if (drugaForma !== null) {
            let temp: DrugaForma = JSON.parse(drugaForma);

            setIme(temp.ime);
            setPriimek(temp.priimek);
            setNaslov(temp.naslov);
            setDBivanja(temp.drzavaBivanja);
            setDRojstva(temp.datumRojstva);
            setKRojstva(temp.KrajRojstva);
            setDrzvaljanstvo(temp.drzavljanstvo);

            console.log(temp)
        }
    }, [])

    const handleSubmit = (): void => {
        let tempSS = sessionStorage.getItem("prvaForma");
        let form: Form;

        if (tempSS) {
            form = JSON.parse(tempSS);
            form.ime = ime;
            form.priimek = priimek;
            form.naslov = naslov;
            form.drzavaBivanja = DBivanja;
            form.datumRojstva = DRojstva;
            form.KrajRojstva = KRojstva;
            form.drzavljanstvo = drzavljanstvo;
            form.stanje = Stanje.Nepregledano;
            form.datumIzpolnitve = getDateString();
            form.stOsebne = osebna;
            addForm(form);
        }
    }

    return (
        <div style={{ position: "relative", height: "100%" }}>
            <InputContainer>
                <h1 className='Naslov'>Moji osebni podatki: <br /> My personal data:</h1>
                <FormGroup style={{ width: "100%" }} onSubmit={handleSubmit}>
                    <MyInput title='Ime:' TBValue={ime} TBSetValue={setIme} />
                    <MyInput title='Priimek:' TBValue={priimek} TBSetValue={setPriimek} />
                    <MyInput title='Naslov:' TBValue={naslov} TBSetValue={setNaslov} />
                    <MyInput title='Država bivanja:' TBValue={DBivanja} TBSetValue={setDBivanja} />
                    <MyInput title='Datum rojstva:' TBValue={DRojstva} TBSetValue={setDRojstva} />
                    {/* <DayPicker/> */}
                    <MyInput title='Kraj rojstva:' TBValue={KRojstva} TBSetValue={setKRojstva} />
                    <MyInput title='Državljanstvo:' TBValue={drzavljanstvo} TBSetValue={setDrzvaljanstvo} />
                    <MyInput title='Številka osebne izkaznice:' TBValue={osebna} TBSetValue={setOsebna} />

                    <div className='button-container'>
                        <Button href="/success" type="submit" variant='contained' className='nextBtn bg-baby-blue' onClick={handleSubmit}>
                            Oddaj vlogo
                        </Button>
                    </div>
                </FormGroup>
            </InputContainer>
        </div>
    )
}

export default InputForm2;