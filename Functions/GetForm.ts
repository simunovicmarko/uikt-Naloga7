import { Form } from "../Interfaces/Form";

export const getForm = (id: string): Form|null => {
    let formsLS = localStorage.getItem("forms");
    let forms: Form[];
    if (formsLS) {
        forms = JSON.parse(formsLS);

        let form = forms.find(form => form.id = id);
        
        if(form) return form;
    }


    return null;
}
