import { useState } from 'react';

function useForm(valoresIniciais)
{
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
      setValues({ ...values, [key]: value });
    }

    function handleChange(args)
    {
        let obj = args.target;
        setValue(
            obj.getAttribute('name'), 
            obj.value
        );
    }

    function clearForm()
    {
      setValue(valoresIniciais);
    }

    return { values, handleChange, clearForm };
}

export default useForm;