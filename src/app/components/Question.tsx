export default function Question({ answer }: { answer: Answer }) {
    return (
        <>
            <div>{answer.question}</div>
            <div>{answer.answer}</div>
        </>
    )
}