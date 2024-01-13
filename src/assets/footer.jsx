function Footer() {

    const year = new Date().getFullYear();

  return (

    <div className="mainback">
        <div className="footerflex">
    <img className="footimage" src="Gallery/logotrue.png" alt="RKLogo"/>
    
    <h1 className="white">All Rights reserved {year}</h1>
    </div>



    <div className="background5">
  <div className="footercont">
    <div className="Socials icon">
      <a href="https://wa.me/41783098373?text=I%27m%20Interested%20In%20the%20Services%20You%20Offer%0A" target="_blank" rel="noopener noreferrer">
        <img className="Size" src="Gallery/whatsapp.png" alt="Whatsapp" />
      </a>
      <a href="https://www.instagram.com/riadkatrib" target="_blank" rel="noopener noreferrer">
        <img className="Size" src="Gallery/instagram.png" alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/in/riad-katrib-724673208" target="_blank" rel="noopener noreferrer">
        <img className="Size" src="Gallery/linkedin.png" alt="LinkedIN" />
      </a>
      <a href="https://twitter.com/RiadKatrib" target="_blank" rel="noopener noreferrer">
        <img className="Size" src="Gallery/x.png" alt="X/Twitter" />
      </a>
    </div>
  </div>
</div>
    </div>
  );
}

export default Footer;
