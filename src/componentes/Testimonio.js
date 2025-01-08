import React from 'react';
import '../css/testimonio.css';

class Testimonio extends React.Component{
  render(){
    return(
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio' 
          // para la imagen utilizamos las plantillas literales
          // src={require('../imagenes/testimonio-emma.png')} 
          src={require(`../imagenes/testimonio-${this.props.imagen}.png`)}   
          // alt='Foto de Emma' /> 
          alt={`Foto de ${this.props.nombre}`} />;
  
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
          <p className='cargo-testimonio'>{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className='texto-testimonio'>"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}



// function Testimonio(props){
//   return(
//     <div className='contenedor-testimonio'>
//       <img 
//         className='imagen-testimonio' 
//         // para la imagen utilizamos las plantillas literales
//         // src={require('../imagenes/testimonio-emma.png')} 
//         src={require(`../imagenes/testimonio-${props.imagen}.png`)}   
//         // alt='Foto de Emma' /> 
//         alt={`Foto de ${props.alt}`} />;
//       <div className='contenedor-texto-testimonio'>
//         <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
//         <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
//         <p className='texto-testimonio'>"{props.testimonio}"</p>
//       </div>
//     </div>
//   );
// }



export default Testimonio;