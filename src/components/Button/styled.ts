import styled from 'styled-components';


export const Container = styled.div`
     display:flex;
     width:180px;
     height:50px;
     background-color:rgba(0,0,0,.7);
     border-radius:10px;
     margin: 15px auto;
     cursor:pointer;
     transition:all ease .4s;

     @media (max-width:400px){
      
      width:130px;     
}
 
    &:hover{
        border:1px solid rgba(200,200,200, .2);
        background-color:rgba(0,0,0,.5);
    }
`;
export const IconArea = styled.div`
     padding:0 15px;
      display:flex;
      justify-content:center;
      align-items:center;

      @media (max-width:400px){
       display:none;
}
`;

export const Icon = styled.img`
   width:30px;
  
`;

export const Label = styled.div`
     color:#fff;
     font-size:20px;
     display:flex;
     justify-content:center;
     align-items:center;
     flex:1;

     @media (max-width:400px){
     font-size:17px;
     }
`;