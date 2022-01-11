import React, { useState } from "react";
import * as Yup from "yup";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";

import {useForm} from 'react-hook-form'

import Checkbox from '@mui/material/Checkbox'; 
import { pink } from "@mui/material/colors";
const CriticalForm = () => {
   
    const [formData, setFormData] = useState("");
    
    const {register , handleSubmit , formState} = useForm(); 
  
    const onSubmit = (data)=>{
      
        console.log(data);
    }
    const initialDefaultValues = {
      active: "",
      sendPateintDataToThirdParty: "",
  
      hospitalInfoName: "",
      hospitalInfoReferenceID: "",
      hospitalInfoEmail: "",
      hospitalInfoMobile: "",
      hospitalInfoAddress: "",
  
      contactPersonName: "",
      contactPersonEmail: "",
      contactPersonMobile: "",
  
      blockInfo: [
        { blockName: "", wardInfo: [{ wardName: "", noOfBed: "" }] },
      ],
    }
    const validate = Yup.object({
      hospitalInfoName: Yup.string()
        .max(15, "it must be 15 characters or less ")
        .required("required field"),
      hospitalInfoReferenceID: Yup.string()
        .max(15, "it must be 15 characters or less ")
        .required("required field"),
      hospitalInfoEmail: Yup.string()
        .email("Enter Valid Email ")
        .required("required field"),
      hospitalInfoMobile: Yup.number()
        .min(1000000000, "the Length should be 10 ")
        .max(10000000000, "the Length should be 10 ")
        .required("required field"),
      hospitalInfoAddress: Yup.string(),
  
      contactPersonName: Yup.string()
        .max(15, "it must be 15 characters or less ")
        .required("required field"),
  
      contactPersonEmail: Yup.string()
        .email("Enter Valid Email ")
        .required("required field"),
      contactPersonMobile: Yup.number()
        .min(1000000000, "the Length should be 10 ")
        .max(10000000000, "the Length should be 10 ")
        .required("required field"),
  
      blockInfo: Yup.array().of(
        Yup.object().shape({
          blockName: Yup.string().required("required field"),
          wardInfo: Yup.array().of(
            Yup.object().shape({
              wardName: Yup.string().required("required field"),
              noOfBed: Yup.number().required("required field"),
            })
          ),
        })
      ),
    });
  
    return (
      <>
        <div className=" col-12 ">
       
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row  justify-content-between ">
                    <div className=" form1  justify-content-between p-2 col-7">
                      <div className="d-flex">
                        <h4 className="opacity-50">
                          <u>Hospital Information</u>
                        </h4>
  
                        <Checkbox
                          label="Active"
                          defaultValue="active"
                          type="checkbox"
                          variant="standard"
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                         
                        />
  
                        <Checkbox
                          label="Send Pateint Data To Third Party"
                          name="sendPateintDataToThirdParty"
                          type="checkbox"
                          variant="standard"
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                          {...register('sendPateintDataToThirdParty')}
                        />
                      </div>
                      <div className="row">
                        <div className="col-7">
                          <TextField
                            label="Name *"
                            name="hospitalInfoName"
                            type="text"
                            variant="standard"
                            className=" w-100"
                            {...register('hospitalInfoName',{required:"required"})}
                          />

{formState?.errors?.hospitalInfoName &&(
                    <span style={{"color":"red"}}>this field is required</span>
               )}
               {console.log(formState?.errors?.hospitalInfoName)}
                        </div>
                        <div className="col-5">
                          <TextField
                            label="Reference ID *"
                            name="hospitalInfoReferenceID"
                            type="text"
                            variant="standard"
                            className=" w-100"
                            {...register('hospitalInfoReferenceID')}
                          />
                        </div>
                      </div>
  
                      <div className="row ">
                        <div className="col-5">
                          <TextField
                            label="Email *"
                            name="hospitalInfoEmail"
                            type="email"
                            variant="standard"
                            className=" w-100"
                            {...register('hospitalInfoEmail')}
                          />
                        </div>
  
                        <div className="col-7">
                          <TextField
                            label="Mobile *"
                            name="hospitalInfoMobile"
                            type="number"
                            variant="standard"
                            className="  w-100"
                            {...register('hospitalInfoMobile')}
                          />
                        </div>
                      </div>
  
                      <div className="w-100">
                        <TextField
                          className="w-100"
                          label="Address"
                          name="hospitalInfoAddress"
                          type="text"
                          variant="standard"
                          {...register('hospitalInfoAddress')}
                        />
                      </div>
                    </div>
                    <div className=" form2 d-flex flex-column col-4  justify-content-between p-2">
                      <h4 className="opacity-50">
                        <u>contact Person Info</u>
                      </h4>
  
                      <TextField
                        label="Contact Person Name *"
                        name="contactPersonName"
                        type="text"
                        variant="standard"
                        className="w-100"
                        {...register('contactPersonName')}
                      />
  
                      <TextField
                        label="Email *"
                        name="contactPersonEmail"
                        type="email"
                        variant="standard"
                        className="w-100"
                        {...register('contactPersonEmail')}
                      />
  
                      <TextField
                        label="Mobile *"
                        name="contactPersonMobile"
                        type="number"
                        variant="standard"
                        className="w-100"
                        {...register('contactPersonMobile')}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
              
  
                    <div>
                      <button
                       // disabled={!(formik.isValid && formik.dirty)}
                        className="btn btn-primary m-3 float-end  w-auto"
                        type="submit"
                      >
                        <SaveIcon /> save
                      </button>
                    </div>
                  </div>
                </form>
         
  
        </div>
      </>
    );
  }


export default CriticalForm;








{/* <FieldArray
name="blockInfo">

{(arrayBlockHelpers) => (
  <>
    <div className="col-12 d-flex flex-row-reverse">
      <div
        className=" btn rounded-circle bg-primary "
        onClick={() =>
          arrayBlockHelpers.push({
            blockName: "",
            wardInfo: [{ wardName: "", noOfBed: "" }],
          })
        }
      >
        <AddIcon className="text-white" />  
      </div>
    </div>
    {formik.values.blockInfo.length > 0
      ? formik.values.blockInfo.map(
          (addBlockInfo, blockIndex) => (
            <div
              className="col-12 mt-2 mb-2 p-3 form3"
              key={blockIndex + "a"}
            >
              <button
                className=" m-2 btn float-end  rounded-circle bg-danger "
                disabled={blockIndex === 0 ? true : false}
                onClick={() =>
                  arrayBlockHelpers.remove(blockIndex)
                }
              >
                <DeleteIcon className="text-white" />
              </button>
              <TextFieldComp
                name={`blockInfo[${blockIndex}].blockName`}
                label="Block Name"
                type="text"
                variant="standard"
              
              />
    
              <FieldArray
                name={`blockInfo[${blockIndex}].wardInfo`}>
                  
                  
                    
                       
                        {(arrayWardHelpers) => (
                  <div key={blockIndex + "c"}>
                    <div
                      className=" m-2 btn rounded bg-primary float-end rounded-circle "
                      type="button"
                      onClick={() =>
                        arrayWardHelpers.push({ wardName: "", noOfBed: "" })
                      }
                    >
                      <AddIcon className="text-white " />
                    </div>
                    <div
                      className="d-flex flex-wrap m-2"
                      key={blockIndex + 9}
                    >
                      {formik.values.blockInfo[blockIndex]
                        .wardInfo.length > 0
                        ? formik.values.blockInfo[
                            blockIndex
                          ].wardInfo.map(
                            (wardInfo, wardIndex) => (

                     
    
                              <div
                                key={wardIndex + 21}
                                className="d-flex flex-wrap"
                              >
                                
                                <TextFieldComp
                                  name={`blockInfo[${blockIndex}].wardInfo[${wardIndex}].wardName`}
                                  label="ward name"
                                  variant="standard"
                                  type="text"
                                  className="m-2"
                               
                                />
                                <TextFieldComp
                                  name={`blockInfo[${blockIndex}].wardInfo[${wardIndex}].noOfBed`}
                                  label="No of beds "
                                  variant="standard"
                                  type="number"
                                 className="m-2"
                                 
                                />

                                <button
                                  className="btn-outline-danger bg-danger rounded-circle btn m-2"
                                  
                                  type="button"
                                  disabled={
                                    wardIndex === 0
                                      ? true
                                      : false
                                  }
                                  onClick={() =>
                                    arrayWardHelpers.remove(
                                      wardIndex
                                    )
                                  }
                                >
                                  <DeleteIcon className="text-white" />
                                </button>
                              </div>
                            )
                          )
                        : null}
                    </div>
                  </div>
                )}
                       

                      
                    
                  
                </FieldArray>
            </div>
          )
        )
      : () =>
          arrayBlockHelpers.push({
            blockName: "",
            wardInfo: [{ wardName: "", noOfBed: "" }],
          })}
  </>
)}
</FieldArray> */}