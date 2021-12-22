import { Form } from "../Interfaces/Form";

export const addForm = (form: Form) => {
    let formsLS = localStorage.getItem("forms");
    let forms: Form[];
    if (formsLS) {
        forms = JSON.parse(formsLS);
        forms.push(form);
    }
    else{
        forms = [form]
    }

    localStorage.setItem("forms", JSON.stringify(forms));
}
