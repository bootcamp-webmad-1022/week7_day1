import './App.css'
import Title from './components/Title/Title'
import Button from './components/Button/Button'
import StudentCard from './components/StudentCard/StudentCard'
import ChildrenExample from './components/ChildrenExample/ChildrenExample'


import ironLogo from './logo.png'     // React image import

import ReactPlayer from 'react-player'  // npm components

function App() {

  return (

    <section className='App'>

      <img src={ironLogo} className="logo"></img>

      <Title text={"Nuestros alumnxs"} />

      <hr />

      <Button text={"Ver todos los alumnos"} linkTo={'/alumnos'} />
      <Button text={"Ver todos los campuses"} linkTo={'/campuses'} />
      <Button text={"Ver campus más tocho"} linkTo={'/campuses/madrid'} hightlight={true} />
      <Button text={"Ver todos los cursos"} linkTo={'/cursos'} />

      <hr />

      <StudentCard
        image={'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        details={{ name: 'Student 1', bootcamp: 'Web Dev', date: 'Agosto 2022', campus: 'Madrid' }}
      />

      <StudentCard
        image={'https://img.freepik.com/free-photo/front-view-young-male-white-t-shirt-with-laughing-expression_140725-28370.jpg?w=740&t=st=1669633575~exp=1669634175~hmac=3e61c8b71ffb20c89873d8237702a8f58f4b3b469dd10fa8ded713e18c926689'}
        details={{ name: 'Student 2', bootcamp: 'UX Dev', date: 'Agosto 2022', campus: 'BCN' }}
      />

      <StudentCard
        image={'https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=740&t=st=1669633549~exp=1669634149~hmac=8d84e26d5497e7f1bacdd01ef536cc1b848e34a6d7bbf21f6706bdbbfaf5fe45'}
        details={{ name: 'Student 3', bootcamp: 'Data', date: 'Agosto 2027', campus: 'Madrid' }}
      />

      <StudentCard
        image={'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
        details={{ name: 'Student 4', bootcamp: 'Web Dev', date: 'Agosto 2022', campus: 'Lisboa' }}
      />

      <hr />

      <Title text={"Y ahora un vídeo de Karina"} />

      <ReactPlayer url={'https://www.youtube.com/watch?v=FginhFF0AKE'} autoplay={true} />

      <hr />

      <Title text={"Ojo con los children:"} />

      <ChildrenExample>
        <p>Yo soy un hijo</p>
        <p>Yo soy otro</p>
      </ChildrenExample>



    </section>
  )
}

export default App