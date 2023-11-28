import Footer from "./Footer";
import Header from "./Header";

export default function Projects() {
  return (
    <>
      <Header />
      <section className="projects">
        <div className="heading">
          <h1>Projects</h1>
          <p>
            Explore the diversity of our endeavors and accomplishments on our
            projects page, a testament to our collective dedication and
            innovation.
          </p>
        </div>
        <div className="empty-section">
          <div>
            <p>NO PROJECTS YET.</p>
            <p>COMING SOON !!!!</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
