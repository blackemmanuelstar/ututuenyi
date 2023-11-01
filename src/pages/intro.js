import peoplepic from "../Images/orji.jpeg";
export default function Intro() {
  return (
    <div className="intro">
      <p className="welcome-message">
        Ahiii Nkisi– Ike ji Ena <br />
        Ahiii Nkisi – Ike ji Ena
        <br />
        Ike ji Ena – Ezi Enyi
        <br />
        Ike ji Ena – Ezi Enyi
        <br />
        Ezi Enyi – Ifunanya
        <br />
        Ezi Enyi – Ifunanya
        <br />
        Ifunanya! – Udo Abiriba
        <br />
        Ifunanya - Udo Abiriba <br />
        Enachioken nmamma ni! – Uwaah!
        <br />
        Greetings to you all,
        <br />
        I want to use this medium to welcome you to the ‘Nkisi-Ena League of
        Friends’ platform.
        <br />
        The purpose of this forum is for members to participate in the
        development of our community ( the Abiriba ancient kingdom ).
        <br />
        In so doing, we can stand in for one and another as the saying goes “one
        for all and all for one”.
        <br />
        Therefore, may I encourage you to prepare your minds and be ready to
        contribute your time, energy, and resources for the course of Nkisi-Ena
        League of Friends. <br />
        By the grace of Almighty God, we will make an impact and set precedence
        for others to follow.
        <br /> Long live Nkisi-Ena and long live Abiriba Enachioken.
        <br />
      </p>
      <div className="intro-speaker">
        <img src={peoplepic} className="orji" />
        <p className="tag">
          Ngoye Orji kalu (AKA Nmemme Atuegwu) <br />
          member board of trustees Nkisi-Ena
        </p>
      </div>
    </div>
  );
}
