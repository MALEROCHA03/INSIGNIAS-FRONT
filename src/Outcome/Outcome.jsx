import React, { useEffect, useState } from "react";
import * as controllerOutcome from "./controlerOutcome";
import { useParams } from "react-router-dom";

// import {
//   Link
// } from "react-router-dom"; 
function Outcome() {

    const userType=1

    const outcomeList = [
        "C1. Maquetar una aplicación",
        "C2. Crear una interfaz de usuario web estática y adaptable",
        "C3. Desarrollar una interfaz de usuario web dinámica",
        "C4. Crear una interfaz de usuario con una solución de gestión de contenidos o de e-comercio",
        "C5. Crear una base de datos",
        "C6. Desarrollar los componentes de acceso a los datos",
        "C7. Desarrollar la parte back-end de una aplicación web o móvil",
        "C8. Desarrollar e implementar componentes en una aplicación de gestión de contenidos o de comercio electrónico",
      ];
    const array =[0,0,0,0,0,0]
    const [outcome, setOutcome] = useState([]);
    const [competencies, setCompetencies] = useState();


    const params=useParams();
    console.log(params)
    console.log(params.id)

  
    
    
    useEffect(() => {
      const list = async () => {
        try {
          const id = params.id;  
          const res = await controllerOutcome.listOutcomes(id);
          const data = await res.json();
          setOutcome(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      list();
    }, [competencies,params.id]);

        const aprove = async () => {
          try {
            const id = params.id;  
            const res = await controllerOutcome.evaluate(id,array);
            const data = await res.json();
            setCompetencies(data);
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
    
        const handleSubmit = (e) => {
            e.preventDefault()
            const id = params.id;  
            console.log(id,array)
            aprove()
        
        }
  


    if (userType ===1){
        return(
            <div>
                <form onSubmit={handleSubmit}>            
              {
              outcome.map(t=> (
                  t.outcomes.map((i,index)=>{
                  if (i !== 0){
                       return (
                       <p>{` Requeiere: ${outcomeList[index]} en un nivel ${i}`}
                       <input 
                       type="number" 
                       name={`C${index}`}
                       defaultValue='0'
                       onChange={(e)=>{setCompetencies( array[index]=parseInt(e.target.value))}}
                       />
                       </p>  
                       )

                    } else{
                      return (false)
                  }

                })
                )
                )
            } 
                <button onSubmit={handleSubmit}>send</button>
                </form>

            </div>
        )
    }else {
    return (
        <>
            {
              outcome.map(e=> (
                  e.outcomes.map((i,index)=>{
                  if (i !== 0){
                       return (<p>{` Requeiere: ${outcomeList[index]} en un nivel ${i}`}</p> )
                  } else { return (false)}
                })
                )
                )
            }

        </>
    )
    }
}

export default Outcome