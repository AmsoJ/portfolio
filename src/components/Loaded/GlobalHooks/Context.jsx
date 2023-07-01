import {useContext, createContext, useState, useEffect} from 'react';


// create a context
export const AppContext = createContext();


// create a provider 
export const AppProvider  = ({children}) => {

    const [load, setLoad] = useState(false);

    const [staticHeader, setStaticHeader] = useState(false);

    const [cursorAction, setCursorAction] = useState("null");

    const [darkMode, setDarkMode] = useState(false);

    // settimg time to load
    useEffect(()=> {
        setLoad(false);
        // get random timing
        let loadTime = 3000 + Math.floor(Math.random() * 5000);
        setTimeout(() => {
            setLoad(true);
        }, loadTime);
    }, [])

    // the beep of the cursor effect
    useEffect(() => {
        document.addEventListener("click", () => {
            setCursorAction("beep");
            setTimeout(() => {
                setCursorAction("null");
            }, 500);
        })

        return () => {
            document.addEventListener("click", () => {
                setCursorAction("beep");
                setTimeout(() => {
                    setCursorAction("null");
                }, 500);
            })
        }
    }, []);

    // make the header static
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let pageY = window.scrollY;
            if(pageY > 70) {
                setStaticHeader(true);
            }else {
                setStaticHeader(false);
            }
        })

         return () => {
            window.addEventListener("scroll", () => {
                let pageY = window.scrollY;
                if(pageY > 70) {
                    setStaticHeader(true);
                }else {
                    setStaticHeader(false);
                }
            })
         }
    }, []);
    // end of the header staticity

    // setting the theme to dark mode function and scroll to
    const changeTheme = (e) => {
        e.preventDefault();
        let hrefLink = e.currentTarget.getAttribute("href").slice(1);
        if(hrefLink === "theme") {
            setDarkMode(prev => !prev);
        }else if(hrefLink === "home") {
            window.scrollTo(0, 0);
        }else {
            let position = document.getElementById(hrefLink).offsetTop;
            window.scrollTo(0, position - 50);
        }                      
    }
    // end of the theme change for the project

    return <AppContext.Provider value={{
        load,
        cursorAction,
        setCursorAction,
        darkMode,
        changeTheme,
        staticHeader,
    }}>
        {children}
    </AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}