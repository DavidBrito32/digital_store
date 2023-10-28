import { useState } from "react"


export const useForm = (inicial) => {
    const [form, setForm] = useState(inicial);

    const changeForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({...form, [name]: value});
    }

    const clearInputs = () => {
        setForm(inicial);
    }

    return {form, changeForm, clearInputs};
}