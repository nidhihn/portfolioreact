import image from "../images/Mypicture.jpg";
import "../css/About.css";
function About() {
    return (
        <>
        <body>
         <div id="About">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src={image} alt="Image"/>
                </div>
                <div class="about-col-2">
                    <h1 class="sub-title">About me</h1>
                    <p>Greetings! I'm Nidhi H N,
                         a dedicated web developer with a knack for turning ideas into interactive, visually appealing, and user-friendly websites.
                        With a deep-rooted passion for coding and an eye for design.<br/>                         
                        My expertise spans across a range of technologies, including HTML, CSS, JavaScript, and more.
                        Whether it's crafting responsive and mobile-friendly websites, optimizing performance, or diving into the world of web applications, 
                        I relish every challenge that web development throws my way.
                        In addition to my technical skills, I'm a firm believer in the importance of effective communication and collaboration.
                        Building strong relationships with clients, designers, and fellow developers is key to delivering successful projects.</p>

                           
                </div>
            </div>
        </div>
    </div>
    </body>
        </>
    );
}
export default About;