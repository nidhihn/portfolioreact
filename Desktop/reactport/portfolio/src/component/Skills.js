import "../css/Skills.css";
import Card from "./Card";
function Skill() {
  const skills0=[
     {
      id:0,
      h:"Skills"
     }
  ]
  const skills=[
        
      {
            id:1,
            h:"HTML",
            i:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
        },
        {
            id:2,
            h:"CSS",
           i:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
        },
        {
            id:3,
            h:"JAVASCRIPT",
            i:"https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_1280.png"
        },
        

    ]
    const skills1=[
      {
        id:4,
        h:"REACT JS",
        i:"https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
    },
    {
      id:5,
      h:"NODEJS",
      i:"https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png"
  }
    ]
  return (
    <>
      <h1 className="skills">Skills</h1>
      <div className="grids">

      
      {/* <div className="skill1">
        <div className="sklls">
          <h2>HTML</h2>
          <img className="images" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"></img>
        </div>
        <div className="sklls">
          <h2>CSS</h2>
          <img className="images"src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png'></img>
        </div>
        <div className="sklls">
          <h2>JAVASCRIPT</h2>
          <img className="images" src="https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_1280.png"></img>
        </div>
      </div>
      <div className="skill2">
        <div className="sklls">
          <h2>REACTJS</h2>
          <img className="images" src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"></img>
        </div>
        <div className="sklls">
          <h2>NODEJS</h2>
          <img className="images" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png"></img>
        </div>
       
      </div> */}
      </div>
      <div className="skill1">
      
      {
        skills.map((item)=>(
            <Card Skills={item}/>
        ))
      }
    
      </div>
      <div className="skill1">
      
      {
        skills1.map((item)=>(
            <Card Skills={item}/>
        ))
      }
    
      </div>
      
    </>
  );
}
export default Skill;
