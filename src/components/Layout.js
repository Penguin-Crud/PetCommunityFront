import '../styles/componets_styles/Layout.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav";
import Main from './Main';
import Footer from './Footer';


function Layout() {
  return (
    <div className="Layout">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Nav />} />

        </Routes>

        <Routes>
          <Route path='/' element={<Main />} />
            {/* <Route index element={<DetailAssociation />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} /> */}
        </Routes>

        <Routes>
          <Route path='/' element={<Footer />} />
        </Routes>

      </BrowserRouter >
    </div>
  );
}

export default Layout;
