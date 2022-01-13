import React from 'react'
import { useState } from "react";

function TextInputField({label, type, name, value, onChange, onSubmit}) {
   
    return (
        <div>
        <label>{label}
      <input 
        type={type}
        name={name} 
        value={value} 
        onChange={onChange}
        
      />
      </label>
    </div>
    )
}

export default TextInputField