import React, { useEffect, useState } from "react";
import * as controllerProject from "./controllerBadges";
// import {
//   Link
// } from "react-router-dom"; 


function Badges() {

  const initialState = {
    name: '',
    lastName:'',

}
const [projects, setProjects] = useState([]);

useEffect(() => {
  const listProject = async () => {
    try {
      const res = await controllerProject.listBadges();
      const data = await res.json();
      setProjects(data);
      console.log(projects);
    } catch (error) {
      console.log(error);
    }
  };
  listProject();
}, []);




    return (
 <div className="container">

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre Alumno</th>
              <th scope="col">Insignia</th>
            </tr>
          </thead>
          <tbody>
            {
              projects.map(e => (
                <tr>

                  <th scope="row">Aleja y Javi lo hicieron</th>
                  <td>{e.name} {e.lastName}</td>
                  <td>{e.badges}</td>

                </tr>

              ))

            }
          </tbody>
        </table>
      </div>
    )
}

export default Badges
