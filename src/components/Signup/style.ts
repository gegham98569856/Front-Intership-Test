import { createUseStyles } from 'react-jss'
import styled from 'styled-components';

const useStyles = createUseStyles({
    container: {
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    title: {
        fontSize: 100,
        color: "#A5C7FF",
        fontFamily: "gorge",
        textAlign: 'center',
    },
    content: {
        fontSize: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pageTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: "20px 20px 0px 20px",
    },
    buttons: {
        display: 'flex',
        gap: 10,
    },
    button: {
        border: 'none',
        cursor: 'pointer',
        background: 'none',
    }                       
})



 export const Button = styled.button`
  font-size: 15px;
  border: none;
  cursor: pointer;
  background: none;
  outline: none;
  color: #007bff;
  &:hover {
    color: #0056b3;
  }
`;


export default useStyles