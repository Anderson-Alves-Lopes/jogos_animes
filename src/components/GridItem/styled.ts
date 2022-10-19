
import styled from "styled-components";



export const Container = styled.div`
  cursor:pointer;
  width:10vw;
  height:17vh;
 @media (max-width:850px){
    width:14vw;
    height:15vh;
 }

 @media (max-width:500px){
    width:20vw;
   
 }
 
`;
type IconProps = {
   iconbackground:string;
   iconOpacity?:string;
}
export const Icon = styled.img<IconProps>`
     width:100%;
     
     height:100%;
     padding:5px 7px;
     border-radius:5px;
     background-color:${(props)=>props.iconbackground};
     opacity: ${(props)=> props.iconOpacity}
`;

