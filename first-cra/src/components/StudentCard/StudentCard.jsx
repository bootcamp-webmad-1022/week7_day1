import './StudentCard.css'

const StudentCard = props => {

    const { image, details } = props

    return (
        <article className='StudentCard'>
            <img src={image}></img>
            <h3>{details.name}</h3>
            <p>{details.bootcamp} - {details.date} </p>
            <p>Campus {details.campus} </p>
        </article>
    )
}

export default StudentCard