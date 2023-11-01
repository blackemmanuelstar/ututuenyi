import logo from "../Images/logo.png";
export default function Header() {
  return (
    <main>
      <header>
        <div className="top-header">
          <img src={logo}></img>
          <div className="navigation">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Membership</a>
            <a href="">Gallery</a>
            <a href="">Projects</a>
            <a href="">Blog</a>
            <a href="">Contact us</a>
          </div>
        </div>

        <div className="bottom-header">
          <div className="donate">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              className="donate-icon"
            >
              <path d="M 16.5 5 A 1.50015 1.50015 0 0 0 15 6.5 L 15 14 L 11.5 14 C 7.3754991 14 4 17.375499 4 21.5 L 4 35.5 C 4 39.624501 7.3754991 43 11.5 43 L 36.5 43 C 40.624501 43 44 39.624501 44 35.5 L 44 21.5 C 44 17.375499 40.624501 14 36.5 14 L 33 14 L 33 6.5 A 1.50015 1.50015 0 0 0 31.5 5 L 16.5 5 z M 18 8 L 30 8 L 30 14 L 18 14 L 18 8 z M 11.5 17 L 16.5 17 L 31.5 17 L 36.5 17 C 39.003499 17 41 18.996501 41 21.5 L 41 35.5 C 41 38.003499 39.003499 40 36.5 40 L 11.5 40 C 8.9965009 40 7 38.003499 7 35.5 L 7 21.5 C 7 18.996501 8.9965009 17 11.5 17 z"></path>
            </svg>
            <p>Donate</p>
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
        </div>
      </header>
    </main>
  );
}
