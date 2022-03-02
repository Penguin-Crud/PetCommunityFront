
import '../styles/componets_styles/Layout.css';
import Nav from "./Nav";
import Main from './Main';

function Layout() {
  return (
    <div className="Layout">
      <Nav />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
