import "./styles.scss";

export default function Card(props) {
	const {
		heading,
		image = "https://placekitten.com/200/300",
		variant = "",
	} = props;

	const variantClassName = variant ? `card--variant${variant}` : "";

	return (
		<figure className={`card ${variantClassName}`}>
			<img className="card-image" src={image} />
			<figcaption className="card-heading">{heading}</figcaption>
		</figure>
	);
}
