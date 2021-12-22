export const getDateString = ():string => {
    const date = new Date();
    

    let returnDate = `${date.getDay().toString()}. ${date.getMonth().toString()}. ${date.getFullYear().toString()}`;
    return returnDate;
}
