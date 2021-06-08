import './styles.scss'

export default function Button(props) {
  const { children, variant = '', type = 'button', ...other } = props

  const variantClassName = variant ? `Button--variant${variant}` : ''

  return (
    <button className={`Button ${variantClassName}`} type={type} {...other}>
      {children}
    </button>
  )
}
