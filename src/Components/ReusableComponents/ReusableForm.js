import React from 'react'
import {useForm , Controller} from 'react-hook-form';
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox'; 
import { pink } from "@mui/material/colors";
export default function ReusableForm({template , onSubmit}) {
    let { register, handleSubmit, errors, watch, setError, clearErrors } = useForm();
    let {title , fields} = template;
 
    const renderFields = (fields)=>{
        return fields.map(field =>{
            let {title,type,name ,validationProps ,control} = field;
           switch(type){
               case 'text':
                return(
                    <div key={name}>


<TextField
                            label={title}
                            name={name}
                            type={type}
                            variant="standard"
                            className=" w-100"
                            {...register(`${name}`)}
                          />
            
                        {/* <label htmlFor={name}>{title}</label>
                    <input type="text"  id={name} {...register(`${name}`,{validationProps})}/>
                     */}
                    </div>
                )
                case 'email':
                    return(
                        <div key={name}>
                            <TextField
                            label={title}
                            name={name}
                            type="email"
                            variant="standard"
                            className=" w-100"
                            {...register(`${name}`)}
                          />
                        </div>
                    )

                    case 'number':
                        return(
                            <div key={name}>
                                <TextField
                                label={title}
                                name={name}
                                type="number"
                                variant="standard"
                                className=" w-100"
                                {...register(`${name}`)}
                              />
                            </div>
                        )
                    case 'checkbox':
                        return(
                            <div key={name}>
                               
                               <div>
                               <Checkbox
                          label={title}
                          name={name}
                        
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                          {...register(`${name}`)}
                        />
                             <label htmlFor={name}>{title}</label>
                                   </div>

                        
                            </div>
                        )
                    
            default:
                return(
                    <div>Invalid Field</div>
                )
           }
        })
    }
    
    return (
        <div>
            <form className="formClass" onSubmit={handleSubmit(onSubmit)}>
                <h4>Job Application</h4>
                {renderFields(fields)}
                <br/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
