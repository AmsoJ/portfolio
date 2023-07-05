import './softskills.scss';
import softdata from '../../../asset/Data/softdata';
import { useGlobalContext } from '../GlobalHooks/Context';

function Soft({element, detail, skill}) {
    return <article className="soft trans d-flex flex-column justify-content-between col-12 col-md-3 rounded-3">
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
    const {darkMode} = useGlobalContext();

    return <section className={`soft-skills row g-0 justify-content-between p-5 ${state ? null : "show"} ${darkMode ? "darkMode" : null}`}>
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