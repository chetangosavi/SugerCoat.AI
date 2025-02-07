// eslint-disable-next-line react/prop-types
const DisplayQuestion = ({question}) => {

    const formateQuestion = (text) => {

        const parts = text.split("Contraints");
        const questionPart = parts[0].replace("Question:"," ")
        const constraintsParts = parts[1]?parts[1].split("Example")[0].trim():"";

        return (
            <div className="p-10">
                {
                    questionPart && (
                        <>
                        <h2>Question :</h2>
                        <pre className="whitespace-pre-wrap break-words">{questionPart}</pre>
                        </>
                    )
                }
                {
                    constraintsParts && (
                        <>
                        <h2>Contraints:</h2>
                        <pre className="whitespace-pre-wrap break-words">{constraintsParts}</pre>
                        </>
                    )
                }
            </div>
        );
    }

    return(
        <div className="w-full">
            {formateQuestion(question)}
        </div>
    )
}

export default DisplayQuestion;