import "../css/Section.css";
import image from "../Svg/Newdev.gif";
function Section() {
  return (
    <>
      <body>
      <main>
        <section className="firstsection">
          <div className="leftsection">
           <p> Hi, I'm <span className="purple">Nidhi H N </span>
              I'm<br/> passionate learner and <br/> web developer</p>
            
            
              <button className="btn">Download Resume</button>
              {/* <button className="btn">Visit- Github</button> */}
            
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
