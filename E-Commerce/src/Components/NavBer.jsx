import { IoBagCheck } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const NavBer = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Hpmeopathy Care
          </a>
          <div className="mobileBer navbar-toggler">
            <div>
              {" "}
              <a href="" className=" NAVHADERCOLOR ">
                <FaRegHeart />
              </a>
              <span className="NAVHADER">0</span>
            </div>

            <div>
              <a href="" className="  NAVHADERCOLOR ">
                <IoBagCheck />
              </a>
              <span className="NAVHADER ">0</span>
            </div>
          </div>
          <div className="collapse navbar-collapse " id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
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

            <div>
              <a href="" className=" NAVHADERCOLOR active">
                <FaRegHeart />
              </a>
              <span className="NAVHADER ">0</span>
            </div>

            <div>
              <a
                href=""
                className={`NAVHADERCOLOR ${selectedTab === "My Card"}`}
                onClick={() => {
                  console.log("Arrad");

                  setSelectedTab("My Card");
                }}
              >
                <IoBagCheck />
              </a>
              <span className="NAVHADER ">0</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBer;
