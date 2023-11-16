import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Intro from "./pages/intro";
import AboutUs from "./pages/aboutus";
import Members from "./pages/membership";
import ContactUs from "./pages/contactus";
import Blog from "./pages/blog";
import Projects from "./pages/projects";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <Intro />
          </main>
        }
      />
      <Route
        path={"/aboutus"}
        element={
          <>
            <AboutUs />
          </>
        }
      />
      <Route
        path={"/membership"}
        element={
          <main>
            <section className="members">
              <Header />
              <Members />
              <Footer />
            </section>
          </main>
        }
      />
      <Route
        path={"/gallery"}
        element={
          <main>
            <Header />
          </main>
        }
      />
      <Route
        path={"/projects"}
        element={
          <main>
            <Projects />
          </main>
        }
      />
      <Route
        path={"/blog"}
        element={
          <main>
            <Blog />
          </main>
        }
      />
      <Route
        path={"/contactus"}
        element={
          <main>
            <ContactUs />
          </main>
        }
      />
    </Routes>
  );
}

export default App;
