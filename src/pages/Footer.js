import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
export default function () {
  return (
    <footer>
      <div className="footer-regards">
        <img src={logo}></img>
      </div>
      <div className="footer-navigation">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contactus">Contact us</Link>
      </div>
      <div class="contactMedia">
        <a href="" className="facebook">
          <i class="fa-brands fa-facebook-f"> </i>
        </a>
        <a href="" className="instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="" className="tiktok">
          <i class="fa-brands fa-tiktok"></i>
        </a>
        <a href="" className="twitter">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="" className="linked-in">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="">
          <i class="fa-solid fa-envelope"></i>
        </a>

        <a href="">
          <i class="fa-sharp fa-solid fa-phone"></i>
        </a>
      </div>
    </footer>
  );
}
