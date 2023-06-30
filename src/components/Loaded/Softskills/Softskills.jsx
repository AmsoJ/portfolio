import './softskills.scss';
import softdata from '../../../asset/Data/softdata';

function Soft({element, detail, skill}) {
    return <article className="soft d-flex flex-column justify-content-between col-12 col-md-3 rounded-3">
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
    return <section className={`soft-skills row g-0 justify-content-between p-5 ${state ? null : "show"}`}>
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