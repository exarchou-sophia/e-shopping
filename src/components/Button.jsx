export const Button = props => (
    <button
        type="button"
        style={props.style}
        className={`bg-lime-400 hover:bg-button-hover text-white p-2 m-2 max-w-max rounded-md ${props.className}`}
        onClick={props.onClicked}
    >
        {props.title}
    </button>
);
