import { Form } from "../Interfaces/Form";

export const removeForm = (id: string): boolean => {
    let formsLS = localStorage.getItem("forms");
    let forms: Form[];
    if (formsLS) {
        forms = JSON.parse(formsLS);

        forms = forms.filter(form => form.id !== id);
        localStorage.setItem("forms", JSON.stringify(forms));
    }


    return false;
}
