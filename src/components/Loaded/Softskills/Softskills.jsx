import './softskills.scss';
import softdata from '../../../asset/Data/softdata';

function Soft({element, detail, skill}) {
    return <article className="soft d-flex flex-column justify-content-between col-4 p-4 rounded-3" style={{width: "calc(100% / 3.2)"}}>
        <div className="icon">
            {element}
        </div>

        <div className="details">
            <h4 className="skill">{skill}</h4>
            <p className="sum">
                {detail}
            </p>
        </div>
    </article>
}

function Softskills({state}) {
    return <section className={`soft-skills row justify-content-between position-absolute p-5 ${state ? null : "show"}`}>
        {
            softdata.map(softskills => {
                return <Soft
                    key={softskills.id}
                    {...softskills}
                />
            })
        }
    </section>
}

export default Softskills;