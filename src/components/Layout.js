import '../styles/componets_styles/Layout.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav";
import Main from './Main';
import Dashboard from "./dynamics_components/Dashboard";
import Petformulario from './dynamics_components/Petformulario';
import PetFormularioRegister from './dynamics_components/PetFormularioRegister';
import Footer from './Footer';


function Layout() {
  return (
    <div className="layout">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Nav />} />
            <Route index element={<Nav />} />
            {/* <Route path="*" element={<NoMatch />} /> */}

          <Route path='/createPost' element={<Nav />} />
          <Route path="/dashboard" element={<Nav />} />
        </Routes>

        <Routes>
          <Route path='/' element={<Main />} />
            <Route index element={<Main />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
            
            <Route path="/createPost" element={<Petformulario />} />
            <Route path="/dashboard" element={<Dashboard />} />


            <Route path='/register' element={<PetFormularioRegister />} />
            
        </Routes>

        <Routes>
          <Route path='/' element={<Footer />} />
            <Route index element={<Footer />} />
            {/* <Route path="*" element={<NoMatch />} /> */}

          <Route path='/createPost' element={<Footer />} />
          <Route path="/dashboard" element={<Footer />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default Layout;
