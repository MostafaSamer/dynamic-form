import { useEffect, useState } from "react";
import apiCall from "../../shared/services/api";

import FormBuilder from "../../shared/components/formBuilder";

function CreateForm() {

  const [allFormFormat, SetAllFormFormat] = useState([]);
  const [selectedForm, SetSelectedForm] = useState([]);
  const [selectedFormFormat, SetSelectedFormFormat] = useState();

  const GetFormFormatAPI = async () => {
    let res = await apiCall('get', `/formFormat`);
    SetAllFormFormat(res);
    SetSelectedFormFormat(res[0]);
  }

  // Form Event
  const ChangeSelectedFormat = (event) => {
    const formatToAdd = allFormFormat.filter(el => el._id == event.target.value)[0];
    SetSelectedFormFormat(formatToAdd);
  }

  const AddSelectedFormat = (event) => {
    let oldSelectedForm = selectedForm;
    oldSelectedForm.push(selectedFormFormat);
    SetSelectedForm(oldSelectedForm);
  }

  const AddFormAPI = async (form) => {
    let res = await apiCall('post', '/form', form);
    // window.location('/');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      name: event.target[0].value,
      responseEmail: event.target[1].value,
      format: selectedForm.map(el => el._id)
    }
    AddFormAPI(data);
  }

  useEffect(() => {
    GetFormFormatAPI();
  }, [])

  return (
    <>
      <h1>Create Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Form Name</label>
            <input type='text'></input>
          </div>
          <div>
            <label>Response Email</label>
            <input type='email'></input>
          </div>
          <div>
          </div>
          <div>
            <label>Form</label>
            <select onChange={ChangeSelectedFormat}>
              {allFormFormat.length > 0 && allFormFormat.map(el => <option key={el._id} value={el._id}>{el.name}</option>)}
            </select>
            <button type="button" onClick={AddSelectedFormat}>Add</button>
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>

      <br />
      <br />
      <br />
      {selectedForm && <FormBuilder formData={selectedForm} SubmitAnswer={() => {}} />}
    </>
  );
}

export default CreateForm;