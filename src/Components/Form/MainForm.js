import React from 'react'
import {useForm} from 'react-hook-form'
export const MainForm = () => {

    const {register , handleSubmit , formState} = useForm(); 
    const onSubmit = (data)=>{
      
        console.log(register);
    }
    return (
        <>
            <form className='formClass' onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input type="text"   {...register('firstName',{ required: "This Field is required"} )} />
               {formState?.errors?.firstName &&(
                    <span style={{"color":"red"}}>this field is required</span>
               )}
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type="text" {...register('lastName', { pattern: /^[A-Za-z]+$/i } )} />
                    
                    <span style={{"color":"red"}}>{formState.errors.lastName && "Last name is required"}</span>
               
                </div>

                <div>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input type="number" {...register('phoneNumber')}  />
                </div>

                <div>
                    <label htmlFor='passWord'>Password</label>
                    <input type="password" {...register('passWord')} autoComplete='off' />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {/* <button type='submit' onClick={handleSubmit(onSubmit)}>external submit</button> */}

        </>
    )
}
