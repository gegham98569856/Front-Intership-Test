import { createUseStyles } from "react-jss";


const useStyle = createUseStyles({
    loginForm: {
        display: 'flex',
        flexDirection: 'column',        
        gap: 30,
        alignItems: 'center',
      
    },
    formArea: {
        display: 'flex',
        flexDirection: 'column',  
        alignItems: 'center',
        padding: 50,
        borderRadius: 20,
        boxShadow: '0px 0px 10px 0px #A5C7FF',
        backgroundColor: '#f5f5f5',
        gap: 30,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 80,
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 50,
        color: "#A5C7FF",
        margin: 0,
    },

    input: {
        width: 300,
        fontSize: 20,
        padding: 10,
        color: "#0056b3",
        border: "none",
        borderBottom: "1px solid #A5C7FF",
        backgroundColor: "transparent",
        outline: "none",
    },

    button: {
        width: 300,
        height: 40,
        fontSize: 20,
        padding: 10,
        backgroundColor: "#A5C7FF",
        border: "none",
        borderRadius: 10,
        cursor: "pointer",
        color: "#f5f5f5",
        outline: "none",
        '&:hover': {
            backgroundColor: "#0056b3",
        },
    },
    label: {
        fontSize: 20,
        color: "#A5C7FF",
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        
    },
    link: {
        color:"#0056b3",
        textDecoration: 'none',     
        '&:hover': {
            color: "#A5C7FF",
        },
    },
    bottomText: {
        fontSize: 15,
        color: "#007bff",
        width: 200,
        textAlign: 'center',
    }
})
                

export default useStyle