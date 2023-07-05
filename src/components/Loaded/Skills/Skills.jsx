import { useState } from "react";
import {useGlobalContext} from './../GlobalHooks/Context';
import Softskills from "../Softskills/Softskills";
import TechSkills from "../TechSkills/TechSkills";
import './skills.scss';

function Skills() {

    const {darkMode} = useGlobalContext();

    const [condition, setCondition] = useState(true);

    return <section className={`skills mt-5 container ${darkMode ? "darkMode" : null}`}>

        <div className="operation d-flex justify-content-center">
            <button className={`btn ${condition ? "activeBtn" : "inactiveBtn"}`} onClick={() => {
                setCondition(true);
                const softSkills = [...document.querySelectorAll(".soft")];
                softSkills.forEach(soft => {
                    soft.classList.add("trans");
                })

            }}>
                Tech Skills
            </button>

            <button className={`btn ${condition ? "inactiveBtn" : "activeBtn"}`} onClick={() =>{
                setCondition(false);
                const softSkills = [...document.querySelectorAll(".soft")];
                softSkills.forEach(soft => {
                    soft.classList.remove("trans");
                })
            }}>
                Soft Skills
            </button>
        </div>

        <div className="showscreen position-relative">
            <TechSkills state={condition} />
            <Softskills state={condition} />
        </div>

    </section>
}

export default Skills;