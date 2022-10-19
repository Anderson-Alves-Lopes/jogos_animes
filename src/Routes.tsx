import {Route, Routes} from 'react-router-dom';


import { OnePiece } from './Pages/OnePiece';
import {Home} from './Pages/Home';
import { DragonBall } from './Pages/DragonBall';
import {Pokemon} from './Pages/Pokemon';
import {Naruto} from './Pages/Naruto/';
export const RoutesList = () => {
    return(
      <>
       
      <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/onepiece" element={<OnePiece/>} />
      <Route path="/dragonball" element={<DragonBall/>} />4
      <Route path="/pokemon" element={<Pokemon/>} />
      <Route path="/naruto" element={<Naruto/>} />
      </Routes>
      </>
    );
}