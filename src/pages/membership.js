import image1 from "../Images/MR. NGOYE ORJI KALU (NMEMME ATUEGWU).jpeg";
import image2 from "../Images/HRH.EZE ODEGHE KALU ODEGHE (EZE IKEKWEGHI IMERI).jpeg";
import image3 from "../Images/HON. ANYA EBIRI ANYA.jpeg";
import image4 from "../Images/MR BARRATTS E ANYA.jpeg";
import image5 from "../Images/MR OKEKE UGWA OMEBE.jpeg";
import image6 from "../Images/MR unknown.jpeg";
import image7 from "../Images/Madam Easter Ogba Okechukwu.jpeg";
import image8 from "../Images/Mrs Nnenna David Antwi (AKA. Nelly Onyeike).jpeg";
// import image9 from "../Images/";
// import image10 from "../Images/MR unknown.jpeg";
// import image11 from "../Images/MR unknown.jpeg";
// import image12 from "../Images/MR unknown.jpeg";

const Members = () => {
  // Array containing the imported images
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ]; // Add all imported images here

  const imagesName = {
    image1: {
      name: "MR. NGOYE ORJI KALU (NMEMME ATUEGWU)",
    },
    image2: {
      name: "HRH.EZE ODEGHE KALU ODEGHE (EZE IKEKWEGHI IMERI)",
    },
    image3: {
      name: "HON. ANYA EBIRI ANYA",
    },
    image4: {
      name: "MR BARRATTS E ANYA",
    },
    image5: {
      name: "MR OKEKE UGWA OMEBE",
    },
    image6: {
      name: "MR unknown",
    },
    image7: {
      name: "Madam Easter Ogba Okechukwu",
    },
    image8: {
      name: "Mrs Nnenna David Antwi (AKA. Nelly Onyeike)",
    },
  };

  // Function to render images as divs
  const renderImages = () => {
    return images.map((image, index) => (
      <div key={index} className="members-image-div">
        <img src={image} alt={`image-${index}`} />
        <p>{imagesName[`image${index + 1}`].name}</p>
      </div>
    ));
  };

  return <div className="members-container">{renderImages()}</div>;
};

export default Members;
