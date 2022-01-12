import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Controller, useController } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckBoxComp = ({ control, name, rules, defaultValue, type,checked }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: rules,
    defaultValue: defaultValue,
  });

  return (
    <>
<Controller
          name={name}
          control={control}
        
          onChange={onChange}
          render={()=> (
           <div>
            
            <Checkbox
              onChange={onChange}
              checked={checked}
            /> 
            <label>{name}</label></div>
          )}
         
        />

     
    </>
  );
};

export default CheckBoxComp;
