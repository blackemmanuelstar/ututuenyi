import Footer from "./Footer";
import Header from "./Header";

export default function Blog() {
  return (
    <>
      <Header />
      <section className="blog">
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
