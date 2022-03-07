import '../styles/componets_styles/Layout.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav";
import Main from './Main';
import Petformulario from './dynamics_components/Petformulario';
import Footer from './Footer';


function Layout() {
  return (
    <div className="Layout">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path='/createPost' element={<Nav />} />
        </Routes>

        <Routes>
          <Route path='/' element={<Main />} />
            {/* <Route index element={<DetailAssociation />} />
            <Route path="dashboard" element={<Dashboard />} /> */}
            <Route path="/createPost" element={<Petformulario />} /> 
            {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>

        <Routes>
          <Route path='/' element={<Footer />} />
          <Route path='/createPost' element={<Footer />} />
        </Routes>

      </BrowserRouter >
    </div>
  );
}

export default Layout;
