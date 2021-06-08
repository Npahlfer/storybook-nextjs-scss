import './styles.scss'

export default function Card(props) {
  const {
    heading,
    image = 'https://placekitten.com/200/300',
    variant = '',
  } = props

  const variantClassName = variant ? `Card--variant${variant}` : ''

  return (
    <figure className={`Card ${variantClassName}`}>
      <img className="Card-image" src={image} />
      <figcaption className="Card-heading">{heading}</figcaption>
    </figure>
  )
}
