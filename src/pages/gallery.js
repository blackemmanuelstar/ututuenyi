import Footer from "./Footer";
import Header from "./Header";
import CloseIcon from "@mui/icons-material/Close";

import img1 from "../Images/group.jpeg";
import img2 from "../Images/group2.jpeg";
import img3 from "../Images/HON. ANYA EBIRI ANYA.jpeg";
import img4 from "../Images/MR BARRATTS E ANYA.jpeg";
import img5 from "../Images/MR unknown.jpeg";
import img6 from "../Images/Madam Bouyant.jpeg";
import { useState } from "react";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgsrc: img1,
    },
    {
      id: 2,
      imgsrc: img2,
    },
    {
      id: 3,
      imgsrc: img3,
    },
    {
      id: 4,
      imgsrc: img4,
    },
    {
      id: 5,
      imgsrc: img5,
    },
    {
      id: 6,
      imgsrc: img6,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgsrc) => {
    setTempImgSrc(imgsrc);
    setModel(true);
  };

  return (
    <>
      <main>
        <Header />
        <section className="gallery">
          <div className="heading">
            <h1>Gallery</h1>
            <p>
              Welcome to our gallery, showcasing a collection of captivating
              moments and memories shared by our group through pictures and
              videos.
            </p>
          </div>
          <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} />
            <CloseIcon onClick={() => setModel(false)} />
          </div>
          <div className="real-gallery">
            {data.map((item, index) => {
              return (
                <div
                  className="pic"
                  key={index}
                  onClick={() => getImg(item.imgsrc)}
                >
                  <img src={item.imgsrc} />
                </div>
              );
            })}
          </div>
        </section>
        <Footer />
      </main>
      {console.warn(data)}
    </>
  );
};

export default Gallery;
