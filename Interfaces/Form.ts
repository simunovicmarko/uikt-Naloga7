import { Stanje } from "../Enums/Stanja";

export interface Form{
    id: string,
    username?: string,
    Seznanitev?: boolean,
    Popravek?: boolean,
    PopravekOpis?: string,
    IzbrisPodatkov?: boolean,
    IzbrisPodatkovOpis?: string,
    ime?: string,
    priimek?: string,
    naslov?: string,
    drzavaBivanja?: string,
    datumRojstva?: string,
    KrajRojstva?: string,
    drzavljanstvo?: string,
    stOsebne?: string,
    stanje?: Stanje,
    datumIzpolnitve?: string
}