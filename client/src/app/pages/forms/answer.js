import { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiCall from "../../shared/services/api"

function AnswerForm() {

    const GetQuestionsAPI = () => {
        console.log()
        // let res = await apiCall('get', '/form/62b2e7075e1a87dae40d69a7')
    }

    useEffect(() => {
        GetQuestionsAPI();
    }, [])

    return (
      <h1>Answer Form Page</h1>
    );
  }
  
  export default AnswerForm;