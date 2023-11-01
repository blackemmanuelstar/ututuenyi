import logo from "../Images/logo.png";
export default function () {
  return (
    <footer>
      <div className="footer-regards">
        <img src={logo}></img>
      </div>
      <div className="footer-navigation">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Membership</a>
        <a href="">Gallery</a>
        <a href="">Projects</a>
        <a href="">Blog</a>
        <a href="">Contact us</a>
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
