import { FaReact, FaAws, FaNode,FaJava,FaGithub } from "react-icons/fa";
import { SiSpring,SiRedux,SiGitlab } from "react-icons/si";
import { VscAzure } from "react-icons/vsc"
import { DiMongodb,DiMysql} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

const Technologies = [
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },    
  { icon: <FaJava />, name: "Java" },  
  { icon: <SiSpring />, name: "Spring frameworks" },
  { icon: <FaNode />, name: "Node.js" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <VscAzure />, name: "Azure" },
  {icon:<DiMongodb/>,name:"Mongodb"},  
  {icon:<DiMysql/>,name:"Mysql"},  
  { icon: <FaGithub />, name: "Github" }, 
  { icon: <SiGitlab />, name: "GitLab" },
  
];


export default function Skills() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Technologies</h2>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',gap:"10px",textAlign:"center", alignItems: 'center',justifyContent:"center" }}>
        {Technologies?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--author--detail">
              {item.icon}
              <div>
                <p className="text-md testimonial--author--name">
                  {item.name}
                </p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}