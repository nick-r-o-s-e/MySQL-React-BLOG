import "./Navbar.scss";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

import useOutsideClick from "../../utils/hooks/useOutsideClick";

type Props = {
  navs: string[][];
};

function Navbar({ navs }: Props) {
  const togglerRef = useRef<HTMLButtonElement>(null);

  const collapseNav = () => {
    togglerRef.current?.click();
  };

  const handleNavLinkClick = () => {
    if (!togglerRef.current?.classList.contains("collapsed")) {
      togglerRef.current?.classList.add("collapsed");

      if (getComputedStyle(togglerRef.current!).display != "none") {
        setTimeout(() => {
          collapseNav();
        }, 400);
      }
    }
  };

  const handleClickOutside = (_: Event) => {
    if (
      !togglerRef.current?.classList.contains("collapsed") &&
      getComputedStyle(togglerRef.current!).display != "none"
    ) {
      collapseNav();
    }
  };

  const navRef = useOutsideClick(handleClickOutside);

  return (
    <nav ref={navRef} className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"} onClick={handleNavLinkClick}>
          BLOG
        </NavLink>

        <button
          ref={togglerRef}
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navs.map((nav) => (
              <li key={nav[0]} className="nav-item">
                <NavLink
                  className="nav-link"
                  to={nav[1]}
                  onClick={handleNavLinkClick}
                >
                  {nav[0]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
