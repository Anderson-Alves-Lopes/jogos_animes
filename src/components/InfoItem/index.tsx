import * as I from './styled';

type Props ={
    label:string;
    value:string;
}
export const InfoItem = (props: Props) =>{
    return(
        <I.Container>
          <I.Label>{props.label}</I.Label>
          <I.Value>{props.value}</I.Value>
        </I.Container>
    );
}