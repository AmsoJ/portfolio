import { useState } from "react";
import Softskills from "../Softskills/Softskills";
import TechSkills from "../TechSkills/TechSkills";
import './skills.scss';

function Skills() {

    const [condition, setCondition] = useState(true);

    return <section className="skills mt-5 container">

        <div className="operation d-flex justify-content-center">
            <button className={`btn ${condition ? "btn-dark" : "btn-outline-dark"}`} onClick={() => {
                setCondition(true);
                const softSkills = [...document.querySelectorAll(".soft")];
                softSkills.forEach(soft => {
                    soft.classList.add("trans");
                })

            }}>
                Tech Skills
            </button>

            <button className={`btn ${condition ? "btn-outline-dark" : "btn-dark"}`} onClick={() =>{
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