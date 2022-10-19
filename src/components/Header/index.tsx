
import { Link } from 'react-router-dom';
import * as H from './styled';

import Menuimg from '../../assets/img/botao-de-menu-de-tres-linhas-horizontais.png';



export const Header = () =>{
    const handleClosedMenu = () =>{
        let menu = document.querySelector('ul') as HTMLUListElement;
       
        if(menu.style.width === '50vw'){
            menu.style.opacity = '0';
            setTimeout(()=>{
                menu.style.width = '0';
            },500);
        }else{
            menu.style.width = '50vw';
            setTimeout(()=>{
                menu.style.opacity = '1';
            },500);
        }
    }
    return(
        <H.Headers>
          <H.Container>
          <h1>Jogo da memória</h1>
           <nav>
            <ul>
                <li ><Link to="/">Home</Link></li>
                <li><Link to="/onepiece">One Piece</Link></li>
                <li><Link to="/pokemon">Pokemon</Link></li>
                <li><Link to="/dragonball">Dragon Ball</Link></li>
                <li><Link to="/naruto">Naruto</Link></li>
            </ul>
           </nav>
           <H.Menu onClick={handleClosedMenu}>
            <img src={Menuimg} alt="/" />
           </H.Menu>
          </H.Container>
        </H.Headers>
    );
}