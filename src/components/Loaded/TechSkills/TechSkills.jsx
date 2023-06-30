import './techskills.scss';
import techdata from '../../../asset/Data/techdata';


function Tech({skill, element}) {
    return <article className="tech position-relative col-2 col-md-4 rounded-3">
    
        <div className="front shadow position-absolute rounded-3 d-flex align-items-center justify-content-center">
            {element}
        </div>

        <div className="back position-absolute rounded-3 d-flex align-items-center justify-content-center">
            <p className="lang lead text-white">{skill}</p>
        </div>

    </article>
}


function TechSkills({state}) {
    return <section className={`tech-skills g-0 row py-5  ${state ? "show" : null}`}>
    
        {
            techdata.map(techskill => {

                return ((techskill.skill === "Bootstrap" || techskill.skill === "Typescript") || techskill.skill === "jQuery") ? null :  <Tech
                    key={techskill.id}
                    {...techskill}
                />
            })
        }
    
    </section>
}

export default TechSkills;