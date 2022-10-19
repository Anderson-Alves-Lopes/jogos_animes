import {Link } from 'react-router-dom';
import {Box, Grid, Image} from './styled'
import { Header } from '../../components/Header';
import * as C from '../../components/Template'

import Arena from '../../assets/img/background1.jpg';
import OnePiece from '../../assets/img/background2.jpg';
import DragonBall from '../../assets/img/background4.png';
import Pokemon from '../../assets/img/background3.jpg';
import Naruto from '../../assets/img/background5.jpg';
export const Home = () =>{
    return (
      <C.Main style={{backgroundImage: `url(${Arena})`}}>
        <Header/>
        <C.Container align='center' content='center'>
           <Grid >
           <Box>
           <Link to="/onepiece"><Image src={OnePiece} alt="/" /></Link>
            <h3>Jogar One Piece</h3>
           </Box>
           <Box>
           <Link to="/naruto"><Image src={Naruto} alt="/" /></Link>
            <h3>Jogar One Piece</h3>
           </Box>
           <Box>
           <Link to="/pokemon"><Image src={Pokemon} alt="/" /></Link>
            <h3>Jogar One Piece</h3>
           </Box>
           <Box>
           <Link to="/dragonball"><Image src={DragonBall} alt="/" /></Link>
            <h3>Jogar One Piece</h3>
           </Box>
           </Grid>
        </C.Container>
      </C.Main>
    );
}