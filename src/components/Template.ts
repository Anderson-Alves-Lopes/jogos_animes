

import styled from "styled-components";


export const Main = styled.div`
  width:100%;
  min-height: 100vh;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat; 

`;

type ContainerProps ={
    direction?:string;
    align?: string;
    content?:string;
    mDirection?:string;
    mContent?:string;
}
export const Container = styled.div<ContainerProps>`
  display:flex;
  flex-direction:${(props) => props.direction};
  align-items:${(props)=> props.align};
  justify-content:${(props) =>props.content};
  max-width:1000px;
  width:100%;
  margin:0 auto;
  padding:30px 2% 0 2% ;
  

  @media (max-width:850px){
    padding: 30px 2%;
    flex-direction: ${(props) => props.mDirection} ;
    justify-content:${(props) =>props.mContent};
  }
`;
export const Info = styled.div`
   display:flex;
   flex-direction:column;

   @media (max-width:850px){
     
   }
`;
export const LogoLink = styled.a`
    width:200px;
    display:block;

    @media (max-width:850px){
       margin: 0 auto;
    }

  img{
    width:100%;
    height:70px;
    box-shadow:1px 1px  5px 2px #000;
    background-color:rgba(0,0,0,.4);
  }
`;

export const InfoArea =styled.div`
   margin:10px 0;
   width:100%;

   @media (max-width:850px){
      display:flex;
      justify-content: space-around;
    }
`;

export const ContainerButton = styled.div`
    margin:auto;
   
    @media (max-width:850px){
       display: flex;
        gap:10px;
    }
`;


export const GridArea = styled.div`
   flex:1;
   display:flex;
   justify-content:center;

 
   @media (max-width:700px){
      justify-content:center;
   }
`;
export const Grid = styled.div`
  width:90%;
  display:grid;
  justify-items: center;
  grid-template-columns: repeat(6, 1fr);
  gap:10px;

 
  @media (max-width:850px){
    width:100%;

  }
  @media (max-width:500px){
    grid-template-columns:repeat(4,1fr);
  }
  @media (max-width:300px){
    grid-template-columns:repeat(3,1fr);
    
  }
  
`;

export const  GridItem = styled.div`

`;

