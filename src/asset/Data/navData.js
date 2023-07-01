import {FaBriefcase, FaHome, FaSearchLocation, FaSun, FaPhone} from 'react-icons/fa';


const navData = [
    {
        id: 0,
        element: <FaHome />,
        title: "home",
    },
    {
        id: 1,
        element: <FaSearchLocation />,
        title: "about",
    },
    {
        id: 2,
        element: <FaBriefcase />,
        title: "project"
    },
    {
        id: 3,
        element: <FaPhone />,
        title: "contact"
    },
    {
        id: 4,
        element: <FaSun />,
        title: "theme"
    }
]

export default navData;