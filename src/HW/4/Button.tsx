type ButtonPropsType = {
    callBack: () => void
    name: string
    currentText: string
};

export const Button = (props: ButtonPropsType) => {
    const callBackHandler = () => {
        const trimmedTitle = props.currentText.trim()
        if (trimmedTitle !== '') {
            props.callBack();
        }
    };

    return (
        <button id={'hw04-button'} onClick={callBackHandler}>
            {props.name}
        </button>
    );
};
