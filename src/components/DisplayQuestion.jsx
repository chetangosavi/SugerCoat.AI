// eslint-disable-next-line react/prop-types
const DisplayQuestion = ({question}) => {

    const formateQuestion = (text) => {
        console.log(text)
        return text;
    }

    return(
        <div>
            {formateQuestion(question)}
        </div>
    )
}

export default DisplayQuestion;