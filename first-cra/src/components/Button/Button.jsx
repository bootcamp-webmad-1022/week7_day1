import './Button.css'

const Button = props => {

    console.log('SOY UNA FUNCION NO MUERDO VALE?', props)

    const { text, linkTo, hightlight } = props

    const buttonClass = `Button ${hightlight ? 'green' : 'brown'}`

    return (
        <a
            className={buttonClass}
            href={linkTo}>
            {text}
        </a>
    )
}

export default Button