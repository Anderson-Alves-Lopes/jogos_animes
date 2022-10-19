import { useEffect, useState } from 'react';
import {} from './styled';

import * as C from '../../components/Template';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { InfoItem} from '../../components/InfoItem';
import { GridItemTypes } from '../../types/GridItemTypes';
import { GridItem } from '../../components/GridItem/index';
import { formatTime } from '../../helpers/formatTime';
import { items } from '../../data/dragonball';
import skullPng from '../../assets/dragonballimg/shenlong.png';

import Play from '../../assets/img/botao-play-ponta-de-seta.png';
import Restart from '../../assets/img/seta-para-a-esquerda.png';
import One from '../../assets/dragonballimg/casa_kame.png';
import LogoOne from '../../assets/dragonballimg/logo_dragonball.png';






export const DragonBall = ()=>{
    const [playing, setPlaying] = useState<boolean>();
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    
    const [gridItems, setGridItems] = useState<GridItemTypes[]>([]);


     useEffect(()=>{
      //useEffect da função
        handleRestart();
     },[]);
     useEffect(()=>{
      //useEffect do timeE.apsed
        const timer = setInterval(() =>{
          if(playing === true){
            setTimeElapsed(timeElapsed + 1)
          }
        },1000);
       
        return () => clearInterval(timer);
     },[playing, timeElapsed]);
     useEffect(()=>{
      //useEffect dos movimentos
       if(shownCount === 2){
        let opened = gridItems.filter(item => item.shownItem === true);
        if(opened.length === 2){

          if(opened[0].item === opened[1].item){
            let tempGrid = [...gridItems];
            for(let i in tempGrid){
              if(tempGrid[i].shownItem){
                tempGrid[i].permanentItem = true;
              tempGrid[i].shownItem = false;
              }
            }
            setGridItems(tempGrid);
            setShownCount(0);
          }else{
            
             setTimeout(()=>{
              let tempGrid = [...gridItems];
             for(let i in tempGrid){
              tempGrid[i].shownItem = false;
             }
              setGridItems(tempGrid);
              setShownCount(0);
             },1000);
          }
          setMoveCount(moveCount => moveCount + 1)
        }
       }
     },[shownCount, gridItems]);
     useEffect(()=>{
       if(moveCount > 0 && gridItems.every(item => item.permanentItem === true)){
          setPlaying(false);
       }
     },[moveCount, gridItems]);
  const handleStart = () =>{
       if(playing === false && moveCount === 0){
         setPlaying(true);
       }
  }
  const handleRestart = () =>{
         setTimeElapsed(0);
         setPlaying(false);
         setMoveCount(0);
         setShownCount(0);
        let tempGrid :GridItemTypes[] = []
       for(let i = 0; i < (items.length * 2); i++){
           tempGrid.push({
             item: null,
             shownItem: false,
             permanentItem: false
           });
        }
           for(let w = 0; w < 2; w++){
            for(let i = 0; i < items.length; i++){
              let pos = -1;
              while(pos < 0 || tempGrid[pos].item !== null){
                pos = Math.floor(Math.random() * (items.length * 2));
              }  
              tempGrid[pos].item = i;       
            }
           }

    setGridItems(tempGrid);
  }
     const handleItemClick = (index:number) =>{
         //função de click nas cartas
         if(playing && index !== null && shownCount < 2 ){
           let tempGrid = [...gridItems];
           
           if(tempGrid[index].permanentItem === false && tempGrid[index].shownItem === false){
             tempGrid[index].shownItem = true;
             setShownCount(shownCount + 1);
           }
           setGridItems(tempGrid);
         }
     }
    return(
        <C.Main style={{backgroundImage: `url(${One})`}}>
            <Header />
            <C.Container  mDirection="column">
                <C.Info>
                   <C.LogoLink href="">
                    <img src={LogoOne} alt="" />
                   </C.LogoLink>
                   <C.InfoArea >
                    
                    <InfoItem label="Tempo" value={formatTime(timeElapsed)} />
                    <InfoItem label="Movimentos" value={moveCount.toString()}/>
                   </C.InfoArea>
                   <C.ContainerButton>
                    <Button  text="Start" icon={Play} Click={handleStart}/>
                    <Button text="Restart" icon={Restart} Click={handleRestart}/>
                   </C.ContainerButton>
                </C.Info>
                <C.GridArea>
                    <C.Grid>
                       {gridItems.map((item, index)=>(
                        <GridItem 
                        key={index}
                        item={item}
                        one={items}
                        picture={skullPng}
                        fakeClick={()=>handleItemClick(index)}
                        />
                       ))}
                    </C.Grid>
                </C.GridArea>
            </C.Container>
        </C.Main>
    )
    
}