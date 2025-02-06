// eslint-disable-next-line react/prop-types
const DisplayQuestion = ({question}) => {

    const formateQuestion = (text) => {

        const parts = text.split("Contraints");
        const questionPart = parts[0].replace("Question:"," ")
        const constraintsParts = parts[1]?parts[1].split("Example")[0].trim():"";

        return (
            <div>
                {
                    questionPart && (
                        <>
                        <h2>Question :</h2>
                        <pre>{questionPart}</pre>
                        </>
                    )
                }
                {
                    constraintsParts && (
                        <>
                        <h2>Contraints:</h2>
                        <pre>{constraintsParts}</pre>
                        </>
                    )
                }
            </div>
        );
    }

    return(
        <div>
            {formateQuestion(question)}
        </div>
    )
}

export default DisplayQuestion;