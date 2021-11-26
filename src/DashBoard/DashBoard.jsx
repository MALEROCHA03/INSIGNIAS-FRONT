import React, { useEffect, useState } from "react";
import * as controllerDashBoard from "./controllerDashBoard";
import { useParams } from "react-router-dom";
import TitleSection from "../components/titles/TitleSection";
import Chart from "../dashboard/charts/Chart";

function DashBoard() {
    const params = useParams();
    const [competencies, setCompetencies] = useState();
    const [exito, setExito] = useState();
    const [promo, setPromo] = useState();

    const cohorte = 3;
    let addOutcomeStudents = 0;
    let LevelsEvaluate = 0;
    let alumsOutcome = 10;
    ////////////esta es la tasa de exito!!!!!!!!!!///////////////
    let rateSucces = 0;
    /////////////////////////////////////////////////////////////

    ////////////esta es el indice de avance//////////////////////
    let progressClass = 10;
    /////////////////////////////////////////////////////////////
    useEffect(() => {
        const list = async () => {
            try {
                const id = params.id;
                const res = await controllerDashBoard.listDash(id);
                const data = await res.json();
                setCompetencies(data);
                console.log(data);
                success(data);
                levelsOfEvaluate(data);
                evaluateOutcome(data);
            } catch (error) {
                console.log(error);
            }
        };
        list();
    }, [params.id]);
    const aux = [];

    // funcion suma matrix
    const sumaArray = (array) => {
        let suma = 0;
        array.map((element) => {
            suma += element;
        });
        return suma;
    };
    //numerador de las fracciones
    const success = (data) => {
        data.map((e, index) => {
            console.log(JSON.parse(`[${e.result[0]}]`));
            aux[index] = JSON.parse(`[${e.result[0]}]`);
        });
        console.log(aux);
        aux.map((a) => {
            addOutcomeStudents += sumaArray(a);
        });
        console.log(addOutcomeStudents, "addstudent");
    };
    //Denominador tasa de exito: Cantidad total de niveles de competencias evaluadas por los briefings de la clase

    const levelsOfEvaluate = (data) => {
        data.map((l) => {
            LevelsEvaluate += sumaArray(l.outcomes);
        });
        ////////////esta es la tasa de exito!!!!!!!!!!///////////
        if (LevelsEvaluate === 0) {
            rateSucces = 0;
        } else {
            rateSucces = parseInt((addOutcomeStudents / LevelsEvaluate) * 100);
            console.log("tasa de exito", rateSucces, "%");
            setPromo(rateSucces);
        }
    };

    //Denominador indice de avance: Cantidad total de niveles de competencias por la cantidad de alumnos.

    const evaluateOutcome = (data) => {
        //////////// 6 competncias X 3 niveles X el numero de alumnos////////////////////////
        alumsOutcome = 6 * 3 * data.length;
        if (alumsOutcome === 0) {
            progressClass = 0;
        } else {
            progressClass = parseInt((addOutcomeStudents / alumsOutcome) * 100);
            console.log("progreso de la clase", progressClass, "%");
            setExito(progressClass);
        }
    };

    return (
        <>
            <TitleSection name="Bienvenido a Prográmate Dashboard" />
            <div className="chartContainerMain">
                <div className="chartsContainer">
                    <div className="chartContainer">
                        <p className="nameChart">Progreso de la promo</p>
                        <Chart color="#FFC107" number={exito} />
                    </div>

                    <div className="chartContainer">
                        <p className="nameChart">Tasa de éxito de la promo</p>
                        <Chart color="#0D9603" number={promo} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashBoard;
