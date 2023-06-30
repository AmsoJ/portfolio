import { useState } from "react";
import Softskills from "../Softskills/Softskills";
import TechSkills from "../TechSkills/TechSkills";
import './skills.scss';

function Skills() {

    const [condition, setCondition] = useState(true);

    return <section className="skills mt-5 container">

    <div className="operation row justify-content-around">
        <button className={`btn ${condition ? "btn-dark" : "btn-outline-dark"} col-2`} onClick={() => setCondition(true)}>
            Tech Skills
        </button>

        <button className={`btn ${condition ? "btn-outline-dark" : "btn-dark"} col-2`} onClick={() => setCondition(false)}>
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