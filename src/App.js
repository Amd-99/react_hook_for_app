import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup"

import TextFieldComp from "./Components/ReusableComponents/TextFieldComp";
import { useForm } from "react-hook-form";
import CheckBoxComp from "./Components/ReusableComponents/CheckBoxComp";


const validateSchema = yup.object().shape(
 { Name : yup.string("enter only string").nullable("rrtrt").required("This field is required"),
 Number : yup.number().min(1000000000 , "Number lenght should be 10").max(9999999999 , "Number lenght should be 10").required("This field is required"),
 Counter : yup.number().min(0 , "Counter lenght should be minimum 1").max(999 , "Counter lenght be maximum 99").required("This field is required"),
Password : yup.string().required("This field is required"),
 Email : yup.string().email().required("This field is required")
}

)

console.log(yupResolver);
function App() {
  const { control, handleSubmit ,error  } = useForm(
   { resolver : yupResolver(validateSchema)}
  );
  const onSubmit = (data) => {
    console.log(data);
  };

 
  return (

      <form onSubmit={handleSubmit(onSubmit)}  className="d-flex flex-column justify-content-between p-5 col-5 w-100">
        <TextFieldComp
          name="Name"
          control={control}
          defaultValue={null}
          type="text"
        />
        <TextFieldComp
          name="Number"
          control={control}
          type="number"
       variant={"filled"}
     
        />
          <TextFieldComp
          name="Counter"
          control={control}
       type="number"
       variant={"standard"}
       spinButton={true}
        />
          <TextFieldComp
          name="Email"
          control={control}
       type="email"
      
       spinButton={true}
        />
        <TextFieldComp
          name="Password"
          control={control}
          type="password"
          autoComplete="off"
        />
        <CheckBoxComp name="Active" control={control} value="Active" />
        <button type="submit">Submit</button>
      </form>
  )
}

export default App;

// import { MainForm } from './Components/Form/MainForm';
// import CriticalForm from './Components/Form/CriticalForm';
// import { JobForm } from './Components/ReusableComponents/JobForm';
{
  /* <CriticalForm/>
<JobForm/> */
}
