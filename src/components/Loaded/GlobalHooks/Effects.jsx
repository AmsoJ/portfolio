import {useEffect} from 'react';

const useCursorEffect = () => {
    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const cursorPointer = document.querySelectorAll(".cursor");
            cursorPointer.forEach(pointer => {
                pointer.style.top = e.pageY+ "px";
                pointer.style.left = e.pageX + "px";
            })
        })

        return () => {
            document.removeEventListener("mousemove", (e) => {
                const cursorPointer = document.querySelectorAll(".cursor");
                cursorPointer.forEach(pointer => {
                    pointer.style.top = e.pageY+ "px";
                    pointer.style.left = e.pageX + "px";
                })
            })
        }
    }, []);
}

export default useCursorEffect;