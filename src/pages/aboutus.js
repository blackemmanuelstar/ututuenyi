import Header from "./Header";
import friends from "../Images/friendship.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <main>
      <Header />
      <section className="about">
        <div className="heading">
          <h1>About Us</h1>
          <p>
            An organization formed by a close-knit group of friends, our mission
            is to create a positive impact in our community through
            collaborative initiatives and shared values.
          </p>
        </div>
        <div className="about-body">
          <div className="about-image">
            <img src={friends} alt="" />
          </div>
          <div className="about-content">
            <h2>Warm embrace</h2>
            <p>
              We are a diverse and passionate group of friends who have come
              together with a shared vision. Our friendship has grown into a
              purposeful organization where we channel our unique skills,
              experiences, and values to make a difference in the world. With a
              strong commitment to community and social change, we strive to
              tackle challenges and create opportunities that resonate with our
              collective ideals. Our dynamic team brings fresh perspectives and
              unwavering dedication to every project we undertake, and we are
              united by the belief that together, we can achieve meaningful,
              positive outcomes.
            </p>
            <Link to="#" className="read-more">
              Join Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
