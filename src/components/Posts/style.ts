import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
   body: {
      color: '#0056b3',
      border: '1px solid black',
      height: '400px',
      width: '400px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      borderRadius: 20,
      boxShadow: '0px 0px 10px 0px #A5C7FF',
      backgroundColor: '#f5f5f5',
      transition: 'box-shadow 0.3s ease-in-out',
      cursor: 'pointer',
      opacity: 0.7,
      justifyContent: "space-around",
      padding: '20px',
      fontFamily: 'Poppins',
      fontWeight: 300,
      '&:hover': {
        boxShadow: '0px 0px 20px 0px #0056b3',  
        opacity: 1,
      }

   },
   container: {
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       padding: '70px',
       flexWrap: 'wrap',
       gap: '10px',
   },
   divider: {
    borderBottom: "1px solid #A5C7FF",
    boxShadow: '0px 0px 10px 0px #A5C7FF',
    width: "100%",
   }

});

export default useStyles;