import { useState } from "react";
import ReactDOM from "react-dom";
import TextInputField from "./TextInputField";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({...inputs , [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs({
      username:"",
      age:"",
      uni:""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInputField label="Enter your Name:" type="text" name="username" value={inputs.username} onChange={handleChange} />
      <TextInputField label="Enter your Age:" type="number" name="age" value={inputs.age} onChange={handleChange} />
      <TextInputField label="Enter your University:" type="text" name="uni" value={inputs.uni} onChange={handleChange} />
      {/* <TextInputField label="Enter your Name:" type="text" name="userName" value={inputs.username} onChange={handleChange} />
      <TextInputField label="Enter your Name:" type="text" name="userName" value={inputs.username} onChange={handleChange} />
      <TextInputField label="Enter your Name:" type="text" name="userName" value={inputs.username} onChange={handleChange} /> */}

        <input type="submit" />
    </form>
  )
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

export default MyForm
