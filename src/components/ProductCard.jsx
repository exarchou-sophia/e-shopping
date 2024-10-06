export const ProductCard = props => (
    <div>
        <h2>{props.title}</h2>
        <span>{props.price}</span>
        <p>{props.description}</p>
    </div>
);