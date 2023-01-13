import "./header.scss";
// libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// hooks
import useMobile from "../../../hooks/useMobile";
import useMenuToggle from "../../../hooks/useMenuToggle";
// assets
import logo from "../../../assets/logo.png";

const Header = () => {
  // hooks
  const isMobile = useMobile({ limit: 450 });
  const { toggle, handleToggle } = useMenuToggle();

  const navSection = (
    <nav>
      <a href="/">Mi negocio</a>
      <a href="/">
        Ayuda
        <FontAwesomeIcon icon={faCircleQuestion} />
      </a>
    </nav>
  );

  return (
    <>
      <header className="m-header">
        <div className="m-header__container">
          <img src={logo} alt="Logo Bold | Datáfonos" />

          {isMobile ? (
            <button
              className="m-header__container__hamburger"
              onClick={() => handleToggle()}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          ) : (
            navSection
          )}
        </div>
      </header>
      <section className={`m-header__container toggle ${toggle}`}>
        <button
          className="m-header__container__hamburger"
          onClick={() => handleToggle()}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {navSection}
      </section>
    </>
  );
};

export default Header;
