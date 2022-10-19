import styled from "styled-components";

export const Headers = styled.header`
  
     background-color:rgba(0,0,0,.3);
     display:flex;
     width:100%;
    
`;


export const Container =styled.div`
    max-width:1100px;
    width:100%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 5px 2%;
    color:#fff;
    font-weight:400;
    font-style:italic;
    
    @media (max-width:700px){
            justify-content:center;
        }
        @media (max-width:400px){
            justify-content:flex-start;
        }
    ul{
        display:flex;
        list-style:none;
        gap:20px;
        li a{
            text-decoration:none;
            color:#fff;
            text-transform:uppercase;
            padding:4px;
            transition: .4s;
            &:hover{
                background-color:rgba(0,0,0,.7);
                opacity:.5;
            }
           
        }

        @media (max-width:700px){
          flex-direction:column;
          padding-top:50px;
          align-items:center;
          gap:30px;
          position:absolute;
          right:0;
          top:48px;
          background-color:rgba(0,0,0, .6);
          height:100vh;
          width:0;
          opacity:0;
          text-shadow:1px 1px 3px #000;
          overflow-x: hidden;
          overflow-y: auto;
          transition: all ease .5s;
        }
        
    }
`;
  
export const Menu = styled.div`
    position:absolute;
    right:5px;
    top:20px;
    cursor:pointer;
    display:none;
    img{
        width:30px;
    }
    @media (max-width:700px){
        display:block;
    }
`;

