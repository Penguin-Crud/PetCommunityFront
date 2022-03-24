import '../styles/componets_styles/Layout.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { isOnline } from '../services/PetCommunityServices';
import Nav from "./Nav";
import Main from './Main';
import Dashboard from "./dynamics_components/lists/Dashboard";
import Petformulario from './dynamics_components/forms/Petformulario';
import PetEditFormulario from './dynamics_components/forms/PetEditFormulario';
import Footer from './Footer';
import NoMatch from './dynamics_components/NoMatch';
import NoMatchNav from './dynamics_components/NoMatchNav';
import DetailPet from './dynamics_components/details/DetailPet';
import DetailAssociation from './dynamics_components/details/DetailAssociation';
import SignUpForm from './dynamics_components/forms/SignUpForm';
import SignInForm from './dynamics_components/forms/SignInForm';
import AssociationEditForm from './dynamics_components/forms/AssociationEditForm';

function Layout() {

  useEffect( () =>{
    isOnline()
  }, [] )

  return (
    <div className="layout">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />} />
            <Route index element={<Nav />} />
            <Route path="*" element={<NoMatchNav />} />

           <Route path="/dashboard" element={<Nav />} />   {/* AUTH */}
          <Route path='/createPost' element={<Nav />} />
          <Route path='/editPost/:id' element={<Nav />} />
          <Route path='/detailPet/:id' element={<Nav />} />
          <Route path='/detailAssociation/:id' element={<Nav />} />
          <Route path='/editAssociation' element={<Nav />} />
          <Route path='/signUp' element={<Nav />} />
          <Route path='/signIn' element={<Nav />} />
        </Routes>

        <Routes>
          <Route path='/' element={<Main />} />
            <Route index element={<Main />} />
            <Route path="*" element={<NoMatch />} />
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createPost" element={<Petformulario />} />
            <Route path='/editPost/:id' element={<PetEditFormulario />} />
            <Route path='/detailPet/:id' element={<DetailPet />} />
            <Route path='/detailAssociation/:id' element={<DetailAssociation />} />
            <Route path='/editAssociation' element={<AssociationEditForm />} />
            <Route path='/signUp' element={<SignUpForm />} />            
            <Route path='/signIn' element={<SignInForm />} />            
        </Routes>

        <Routes>
          <Route path='/' element={<Footer />} />
            <Route index element={<Footer />} />
            {<Route path="*" element={<Footer />} />}

          <Route path="/dashboard" element={<Footer />} />
          <Route path='/createPost' element={<Footer />} />
          <Route path='/editPost/:id' element={<Footer />} />
          <Route path='/detailPet/:id' element={<Footer />} />
          <Route path='/detailAssociation/:id' element={<Footer />} />
          <Route path='/editAssociation' element={<Footer />} />
          <Route path='/signUp' element={<Footer />} />
          <Route path='/signIn' element={<Footer />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default Layout;
