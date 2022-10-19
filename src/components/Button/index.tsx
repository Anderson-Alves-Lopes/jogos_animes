
import * as B from './styled';

type Props ={
   text:string;
   //usar propiedade any para de a props aceite totdos os tipos
   icon: string |any; 
    
   Click: React.MouseEventHandler<HTMLDivElement>;
}
export const Button = (props: Props) =>{
    return(

        <B.Container  onClick={props.Click}>
            <B.IconArea>
                <B.Icon src={props.icon} />
            </B.IconArea>
            <B.Label>{props.text}</B.Label>
        </B.Container>
    );
}