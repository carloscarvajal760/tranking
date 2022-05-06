import '../styles/App.css';
import {Carta1}from "./Carta1";
import {Carta2}from "./Carta2";
function App(props) {

  const list=props.list

    return (

      <div className='App'>

         <Carta1/>

         {list.map((rep)=>

         <Carta2

         key={rep.id}

         hobby={rep.hobby}

         hour={rep.hour}

         last={rep.last}

         theme={rep.theme}

         imagenes={rep.img}

         />)}  

      </div>

       

       

       

       

    );

}

export default App;
