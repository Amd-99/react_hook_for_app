import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainForm } from './Components/Form/MainForm';
import CriticalForm from './Components/Form/CriticalForm';
import { JobForm } from './Components/ReusableComponents/JobForm';

function App() {
  return (
    <div className=" container-fluid p-5 mt-3 ">
{/* <CriticalForm/> */}
<JobForm/>
    </div>
  );
}

export default App;
