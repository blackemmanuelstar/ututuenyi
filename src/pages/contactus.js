import Footer from "./Footer";
import Link from "react-router-dom";
import Header from "./Header";

export default function ContactUs() {
  return (
    <main>
      <Header />
      <section className="contactus">
        <div className="heading">
          <h1>Contact Us</h1>
          <p>
            Thank you for considering reaching out to us! We value every inquiry
            and look forward to connecting with you. Whether you have a
            question, need more information about our services, or simply want
            to say hello, our team is here to assist you. Feel free to fill out
            the form below, drop us an email, or give us a call. Your feedback
            matters, and we strive to respond promptly to every message. We
            appreciate your interest and can't wait to hear from you!
          </p>
        </div>
        <div className="contact-ways">
          <div className="contact-action">
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g data-name="17-Emotion - Happy" id="_17-Emotion_-_Happy">
                <path d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0Zm0,46A22,22,0,1,1,46,24,22,22,0,0,1,24,46Z" />
                <path d="M16,20a4,4,0,1,0-4-4A4,4,0,0,0,16,20Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,16,14Z" />
                <path d="M32,12a4,4,0,1,0,4,4A4,4,0,0,0,32,12Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,32,18Z" />
                <path d="M24,37A10,10,0,0,1,14,27H12a12,12,0,0,0,24,0H34A10,10,0,0,1,24,37Z" />
              </g>
            </svg>
            <div className="send-email">
              <a href="mailto:nkisiena@gmail.com">Send an email</a>
            </div>
          </div>
          <div className="whatsapp-numbers" id="whatsapp-numbers">
            <a href="https://wa.me/+2347026067212">
              <i class="fa-3x fa-brands fa-whatsapp"> </i>
              <p>+234 702 606 7212</p>
            </a>
            <a href="https://wa.me/+22890246984">
              <i class="fa-3x fa-brands fa-whatsapp"></i>
              <p>+228 90 24 69 84</p>
            </a>
            <a href="https://wa.me/+4915213509069">
              <i class="fa-3x fa-brands fa-whatsapp"> </i>
              <p>+49 1 521 350 9069</p>
            </a>
          </div>
        </div>
        <div className="other-contacts">
          <h3>Social Media </h3>
          <div className="contactMedia">
            <a
              href="https://www.facebook.com/profile.php?id=61551736841539"
              target="_blank"
              className="facebook"
            >
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
            <a href="mailto:nkisiena@gmail.com">
              <i class="fa-solid fa-envelope"></i>
            </a>

            <a href="">
              <i class="fa-sharp fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
