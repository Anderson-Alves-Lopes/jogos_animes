import styled from "styled-components";

export const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  gap:10px;
  width:100%;
  margin: 0 auto;
  text-align: center;
  @media ( max-width: 500px){
    grid-template-columns: 1fr;
  }
`;
export const Image = styled.img`
    width:300px;
    height:200px;
    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
    border-radius:5px;

    @media (max-width: 700px){
      width:250px;
    
    }
`;
export const Box = styled.div`
  margin:20px auto;
  color:#fff;
  text-shadow:1px 2px 4px #000;
`;