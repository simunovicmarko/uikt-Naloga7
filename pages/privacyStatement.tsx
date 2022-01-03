import React, { FunctionComponent } from 'react'
import { InputContainer } from '../Components/InputContainer'

interface Props {

}

const privacyStatement: FunctionComponent<Props> = ({ }) => {
    return (
        <div className='GDPR-Container'>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <h1>Izjava o zasebnosti in varnosti osebnih podatkov </h1>
            </div>
            <h2>SPLOŠNO</h2>
            <p>
                Na portalu Ministerstva za zunanje zadeve obdelujemo osebne podatke, ki neposredno določajo posameznika. Cenimo zaupanje, ki nam ga izkažete s tem, ko nam posredujete osebne podatke, zato je varovanje osebnih podatkov glavno vodilo pri našem delu.
            </p>

            <h2>KDO SMO?</h2>
            <div>
                Ministrstvo za zunanje zadeve  <br />
                Prešernova cesta 25, <br />
                1000 Ljubljana
            </div>
            <p>
                Predstavljamo Republiko Slovenijo pri drugih državah in v mednarodnih organizacijah, spremljamo mednarodne politične in gospodarske razmere ter krepimo odnose Slovenije z drugimi državami in mednarodnimi organizacijami. Sodelujemo pri pogajanjih z drugimi državami in mednarodnimi organizacijami ter pri postopkih za sklenitev mednarodnih aktov, vodimo njihovo evidenco in jih hranimo. Spodbujamo in usklajujemo sodelovanje s tujino na političnem, gospodarskem, izobraževalnem, kulturnem in znanstveno-tehničnem področju ter na drugih področjih, posebno pozornost namenjamo varovanju interesov Slovenije in njenih državljanov ter pravnih oseb v tujini, slovenskim manjšinam v sosednjih državah in Slovencem po svetu.
            </p>

            <h2>PODATKI, KI JIH ZBIRAMO IN OBDELUJEMO</h2>
            <p>Za zagotavljanje storitve moramo zbirati osebne podatke. Ti zajemajo: </p>
            <ul>
                <li>Ime in priimek</li>
                <li>Naslov</li>
                <li>EMŠO</li>
                <li>Datum rojstva</li>
                <li>Kraj rojstva</li>
                <li>Državljanstvo</li>
            </ul>
            <h2>PRAVNA PODLAGA IN NAMEN ZBIRANJA IN OBDELAVE OSEBNIH PODATKOVO</h2>
            <p>Vaše osebne podatke zbiramo in obdelujemo skladno s <b>Splošno uredbo o varstvu osebnih podatkov (Uredba EU 2016/679) in Zakonom o varstvu osebnih podatkov (Ur. l. RS, št. 94/07).</b> </p>
            <p>Glede na navedeno pravno podlago sta zbiranje in obdelava dopustna pod pogojem, da obstoji pravni temelj, ki je lahko:</p>
            <ul>
                <li><b>Privolitev</b>, ki mora biti prostovoljna, konkretna, informirana in nedovumna;</li>
                <li><b>Zakonski interes</b>, razen kadar nad takim interesom prevladajo interesi ali temeljne pravice in svoboščine posameznika, na katerega se nanašajo osebni podatki;</li>
                <li><b>Zakonska obveznost</b></li>
            </ul>

            <h2>SPREMEMBE IZJAVE O ZASEBNOSTI</h2>
            <p>Pridržujemo si pravico do občasne posodobitve izjave o zasebnosti. Posodobitve bodo objavljene na našem spletnem mestu. Vse spremembe začnejo veljati z dnem objave na našem spletnem mestu.</p>
        </div>
    )
}

export default privacyStatement
