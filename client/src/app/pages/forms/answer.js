import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "../../shared/services/api";

import FormBuilder from "../../shared/components/formBuilder";

function AnswerForm() {
  const params = useParams();

  const [formId, SetFormId] = useState();
  const [formData, SetFormData] = useState();

  const GetQuestionsAPI = async () => {
    let {id} = params;
    SetFormId(id);
    let res = await apiCall('get', `/form/${id}`);
    SetFormData(res.data.format);
  }

  const SubmitAnswer = async (answers) => {
    console.log(answers)
    let data = {
      form: formId,
      answers: answers
    };
    let res = await apiCall('post',  '/answer', data);
    console.log(res);
  }

  useEffect(() => {
    GetQuestionsAPI();
  }, [])

  return (
    <FormBuilder formData={formData} SubmitAnswer={SubmitAnswer} />
  );
}

export default AnswerForm;