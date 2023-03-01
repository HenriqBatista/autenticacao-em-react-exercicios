import { useState } from 'react'

export default function useForm() {
    const [form, setForm] = useState({ email: "", senha: "" });

    const onChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };
  return {form, onChange}
}
