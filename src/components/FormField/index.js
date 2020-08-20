import React from "react";

function FormField({ label, type, name, value, onChange }) {
    
    const CustomTag = (type == 'textarea') ? `textarea` : `input`;

  return (
    <div>
      <label>
        {label}: 
        <CustomTag
          type={(type == 'textarea') ? 'text' : type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;