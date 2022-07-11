import { useState } from "react";

function FormBuilder({ formData, SubmitAnswer }) {

    console.log(formData)

    const handleSubmit = (event) => {
        event.preventDefault();
        let answer = structeAnswer(event.target);
        SubmitAnswer(answer);
    }

    const structeAnswer = (ans) => {
        let answer = [];
        for(let i = 0; i < ans.length-1; i++) {
            answer.push(ans[i].value);
        }
        return answer;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {formData?.length > 0 && formData.map(el => (
                    <div key={Math.random()}>
                        <div className="ffff" dangerouslySetInnerHTML={{ __html: el.html }} />
                    </div>
                ))}
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default FormBuilder