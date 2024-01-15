import './App.css';
import Testimonio  from './componentes/Testimonio';
import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de software'
          empresa='Amazon'
          testimonio= <fragment> Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. <b> freeCodeCamp cambió mi vida </b> </fragment> />
           <Testimonio
          nombre='Sara Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniero de software'
          empresa='ChatDesk'
          testimonio= <fragment> <b> freeCodeCamp </b> fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble </fragment>  />
          <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio= <fragment> Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <b> freeCodeCamp me dio las habilidades </b> y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify </fragment> />
        </div>
      </div>
    );
  }
    

}


export default App;
