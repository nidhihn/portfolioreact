import "../css/Section.css";
import image from "../images/Image1.png";
function Section() {
  return (
    <>
      <body>
      <main>
        <section className="firstsection">
          <div className="leftsection">
            Hi, I'm <span className="purple">Nidhi H N </span>
             and I'm passionate
            <span id="element"></span>
            <div className="buttons">
              <button className="btn">Download Resume</button>
              <button className="btn">Visit- Github</button>
            </div>
          </div>
          <div className="rightsection">
            <img src={image} alt="Image"/>
          </div>
        </section>
      </main>
      
     
      
      <script src="https://kit.fontawesome.com/6f77f484da.js" crossorigin="anonymous"></script>
      </body>
    </>
  );
}
export default Section;
