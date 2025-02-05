import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-5 Footer">
      <div className="FooterOne FooterThree bg-dark">
        <div className="col-3">
          <h5>Section</h5>
          <ul className="nav flex-column ">
            <li className="nav-item mb-2 ">
              <a href="#" className="fcolors">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="col-3 ">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="fcolors">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="FooterTwo">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2 inputTwo">
            <label htmlFor="newsletter1" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter1"
              type="text"
              className="form-control"
              placeholder="Email address"
            />
            <button className="btn btn-primary" type="button">
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div className="FooterThree bg-dark">
        <p>© 2021 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex FooterThree">
          <li className="ms-3">
            <a className="fcolors" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#twitter"></use>
              </svg>
              <FaXTwitter />
            </a>
          </li>
          <li className="ms-3">
            <a className="fcolors" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram"></use>
              </svg>
              <FaInstagramSquare />
            </a>
          </li>
          <li className="ms-3">
            <a className="fcolors" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook"></use>
              </svg>
              <FaFacebookF />
            </a>
          </li>
          <li className="">
            <a className="fcolors" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook"></use>
              </svg>
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
