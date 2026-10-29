import Layout from './components/Layout';
import HomePage from './Homepage';
import Games from './Games';
import Projects from './Projects';
import About from './About';
import { BrowserRouter, Routes, Route } from "react-router";
import Background from './components/Background';


export default function App() {

  return (
    <>

      <Background></Background>
      <BrowserRouter basename='/mikewolfo-dev'>
        <Routes>

          <Route path='/' element={<Layout />}>

            <Route index element={<HomePage />} />
            <Route path='games' element={<Games />} />
            <Route path='projects' element={<Projects />} />
            <Route path='about' element={<About />} />

          </Route>

        </Routes>
      </BrowserRouter>



    </>
  );


}