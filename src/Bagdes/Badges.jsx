import React, { useEffect, useState } from "react";
import * as controllerBadges from "./controllerBadges";
// import {
// Link
// } from "react-router-dom";

function Badges() {
    const initialState = {
        name: "",
        lastName: "",
    };
    const [badgess, setBadgess] = useState([initialState]);

    useEffect(() => {
        console.log('SEgundo')
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
        
        <div   style={{padding: '5%', margin: '0 15%' }}>
            {console.log('primero')}
            <table class="table" >
                <thead style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                    <tr style={{backgroundColor: 'rgb(255, 216, 8)'}}>
                        <th scope="col">Foto</th>
                        <th scope="col">Nombre Alumno</th>
                        <th scope="col">Insignia</th>
                    </tr>
                </thead>
                <tbody>
                    {badgess.map((e) => (
                        <tr>
                            <th scope="row"></th>
                            <td>
                                {e.name} {e.lastName}
                            </td>

                            <td>{
                                (e.badges ?
                                    e.badges.map(b=>(
                                        <span>{b === "true" ? <i class="fas fa-star"></i> : <i class="fas fa-times-circle"></i>}</span>
                                    ))
                                    :'')
                                }
                            </td>

                            {/* .map(b =>{
                    if (b===true){
                      return ("star")
                    }else{
                      return ('nostar')
                    }
                  }) */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Badges;
