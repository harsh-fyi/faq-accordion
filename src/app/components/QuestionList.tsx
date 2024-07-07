import { getAnswers } from "../../../lib/answers"
import Question from "./Question";

export default function QuestionList() {

    const answers = getAnswers();

    return (
        <>
            {
                answers ?
                    Object.values(answers).map(answer => {
                        return <Question answer={answer} />
                    }) : <p>No FAQs yet.</p>
            }
        </>
    )
}