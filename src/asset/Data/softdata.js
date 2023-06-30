import { BsPuzzleFill, BsArrowLeftRight } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import {AiFillWechat, AiFillClockCircle} from 'react-icons/ai';


const softdata = [
    {
        id: 0,
        skill: "Communication",
        element: <AiFillWechat />,
        detail: "Effective exchange of information and ideas"
    },
    {
        id: 1,
        skill: "Collaboration",
        element: <FaPeopleCarry />,
        detail: "Working efficency in a team environment"
    },
    {
        id: 2,
        skill: "Adaptability",
        element: <BsArrowLeftRight />,
        detail: "Friendly to embrace change and challenges"
    },
    {
        id: 3,
        skill: "Time Management",
        element: <AiFillClockCircle />,
        detail: "Efficient use of time"
    },
    {
        id: 4,
        skill: "Problem Solving",
        element: <BsPuzzleFill />,
        detail: "Analytical thinking to solve challenges"
    }
]

export default softdata;