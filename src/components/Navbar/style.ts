import { createUseStyles } from "react-jss"; 

const useStyles = createUseStyles({
    container: {
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1,
        boxShadow: '0px 0px 10px 0px #A5C7FF',
        transition: 'box-shadow 0.3s ease-in-out',
        opacity: 0.9,
        '&:hover': {
            boxShadow: '0px 0px 20px 0px #A5C7FF',
            opacity: 1,
            transition: 'box-shadow 0.3s ease-in-out',
        },
        '@media (max-width: 515px)': {
            display: "flex",
            height: "100vh",
            
        },


    },
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        backgroundColor: "#A5C7FF",
        '@media (max-width: 515px)': {
            display: "flex",
            flexDirection: "column",
            padding: 5,
        }
    },
    navList: {
        display: "flex",
        gap: 10,
        listStyle: "none",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: "none",
        '@media (max-width: 515px)': {
            display: "none",
        }
    },
    link: {
        textDecoration: "none",
        color: "#FFFFFF",
        '&:hover': {
            color: "#0056b3",
        }
    },
    button: {
        border: "none",
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 16,
        cursor: "pointer",
        '&:hover': {
            color: "#0056b3",
        },
        '@media (max-width: 515px)': {
            display: "none",
        }
    },
    icon: {
        cursor: "pointer",
        color: "#FFFFFF",
        display: "none",
        '&:hover': {
            color: "#0056b3",
        },
        '@media (max-width: 515px)': {
            display: "block",
        }
    },
    logo: {
        '@media (max-width: 515px)': {
            display: "none",
        }
    }
});




export default useStyles;