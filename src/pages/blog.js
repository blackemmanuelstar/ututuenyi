import Footer from "./Footer";
import Header from "./Header";

export default function Blog() {
  return (
    <>
      <Header />
      <section className="blog">
        <div className="heading">
          <h1>Blog</h1>
          <p>
            Embark on a journey through our blog page, where insights, stories,
            and experiences converge to inspire, inform, and engage.
          </p>
        </div>
        <div className="empty-section">
          <div>
            <p>NO BLOGS YET.</p>
            <p>COMING SOON !!!!</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
