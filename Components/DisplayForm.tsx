import React, { FunctionComponent } from 'react'
import { Form } from '../Interfaces/Form'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

interface Props {
    form: Form
}

export const DisplayForm: FunctionComponent<Props> = ({ form }) => {
    return (
        <div className='formContainer'>
            <h1 style={{ textAlign: "center" }}>Zahteva za seznanitev s podatki v Vizumskem informacijskem sistemu (VIS) v Sloveniji</h1>
            <div className='formDiv flex justify-between items-center'>
                <div>
                    {form.ime} <br />
                    {form.priimek} <br />
                    {form.naslov} <br />
                </div>
                <div className='formDiv datum'>
                    {form.datumIzpolnitve}
                </div>
            </div>
            <div className='formDiv'>
                Datum rojstva: {form.datumRojstva} <br />
                Kraj rojstva: {form.KrajRojstva} <br />
                Državljanstvo: {form.drzavljanstvo} <br />
                Št. osebne izkaznice: {form.stOsebne} <br />
            </div>

           
            <div className='flex justify-between items-center '>
                <div className='formDiv'>
                    Seznanitev z osebnimi podatki, ki se nanašajo name in se obdelujejo v vizumskem informacijskem sistemu (VIS). Information about the personal data relating to me being processed in the Visa Information System (VIS).
                </div>
                {
                    form.Seznanitev ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />
                }
            </div>
            <div className='flex justify-between items-center '>
                <div className='formDiv'>
                    Popravek netočnih podatkov, ki se v vizumskem informacijskem sistemu (VIS) vodijo o meni. Prosimo, da spodaj napišete kateri podatki so netočni. Correction of inaccurate data which is stored in Visa Information System (VIS). Please specify below which personal data is incorrect.
                </div>
                {
                    form.Popravek ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />
                }
            </div>
            <div className='formDiv border-solid p-2'>
                {form.PopravekOpis}
            </div>
            <div className='flex justify-between items-center '>
                <div className='formDiv'>
                    Izbris podatkov, ki so bili v vizumski informacijski sistem (VIS) vneseni nezakonito. Prosimo, da spodaj utemeljite kateri podatki so bili vneseni nezakonito. Deletion of data unlawfully recorded in Visa Information System (VIS). Please specify/proof which data was recorded unlawfully.
                </div>
                {
                    form.IzbrisPodatkov ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />
                }
            </div>
            <div className='formDiv border-solid p-2'>
                {form.IzbrisPodatkovOpis}
            </div>
        </div>
    )
}
