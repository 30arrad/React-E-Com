import { IoBagCheck } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBer = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand DisplayFlex"
            onClick={() => {
              setSelectedTab("Home");
            }}
          >
            Hpmeopathy Care
          </Link>
          <div className="mobileBer navbar-toggler">
            <Link to="/watchlist" className="DisplayFlex">
              <div
                className=" NAVHADERCOLOR "
                onClick={() => {
                  setSelectedTab("Watchlist");
                }}
              >
                <FaHeart />
              </div>
              <span className="NAVHADER">0</span>
            </Link>

            <Link to="/card" className="DisplayFlex">
              <div
                className="  NAVHADERCOLOR "
                onClick={() => {
                  setSelectedTab("My Card");
                }}
              >
                <IoBagCheck />
              </div>
              <span className="NAVHADER ">0</span>
            </Link>
          </div>
          <div className="collapse navbar-collapse " id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>

            <Link to="/watchlist" className="DisplayFlex">
              <div
                className=" NAVHADERCOLOR active"
                onClick={() => {
                  setSelectedTab("Watchlist");
                }}
              >
                <FaHeart />
              </div>
              <span className="NAVHADER ">0</span>
            </Link>

            <div className="DisplayFlex">
              <Link
                to="/card"
                className={`NAVHADERCOLOR ${selectedTab === "My Card"}`}
                onClick={() => {
                  setSelectedTab("My Card");
                }}
              >
                <IoBagCheck />
              </Link>
              <span className="NAVHADER ">0</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBer;
