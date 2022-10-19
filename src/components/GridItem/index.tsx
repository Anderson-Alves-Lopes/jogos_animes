import* as C from './styled'
import { GridItemTypes } from '../../types/GridItemTypes';


type Props = {
    item:GridItemTypes;
    fakeClick:()=>void;
    one: any;
    picture: string;
     
}

export const GridItem = (props: Props) =>{
    return(
       <C.Container onClick={props.fakeClick}>
         {props.item.permanentItem === false && props.item.shownItem === false &&
                  <C.Icon iconOpacity=".8" iconbackground="#000" src={props.picture} alt="" />
         }
         {(props.item.permanentItem || props.item.shownItem) && props.item.item !== null &&
                 <C.Icon iconbackground="rgba(200,200,200,.8)" src={props.one[props.item.item].icon} alt="" />
         }
       </C.Container>
    );
}