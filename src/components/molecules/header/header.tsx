import "./header.scss";
// assets
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <header className="m-header">
      <div className="m-header__container">
        <img src={logo} alt="Logo Bold | Datáfonos" />
        <nav>
          <a href="/">Mi negocio</a>
          <a href="/">Ayuda</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
