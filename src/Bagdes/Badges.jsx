import React, { useEffect, useState } from "react";
import * as controllerBadges from "./controllerBadges";
// import {
//   Link
// } from "react-router-dom"; 


function Badges() {

  const initialState = {
    name: '',
    lastName:'',

}
const [badges, setBadgess] = useState([initialState]);

useEffect(() => {
  const list = async () => {
    try {
      const res = await controllerBadges.listBadges();
      const data = await res.json();
      setBadgess(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  list();
}, [setBadgess]);




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
              badges.map(e => (
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
