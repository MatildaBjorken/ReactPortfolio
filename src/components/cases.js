import React from "react";
import RightArrow from "../components/arrowRight"

const caseStudies = [
  {
    id: 1,
    subtitle: "001",
    title: "Websites and code",
    text: "Process",
    img: "motion",
    color: "#f28d4a"
  },
  {
    id: 2,
    subtitle: "002",
    title: "Commercial and brand",
    text: "Selected client work",
    img: "identity",
    color: "#627853"
  },
  {
    id: 3,
    subtitle: "003",
    title: "Motion and illustration",
    text: "Creative exercises",
    img: "data",
    color: "#4c5f5f"
  }
];
//style={{backgroundColor: caseItem.color}}
const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>        
        </div>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'   >
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
                <p>{caseItem.text}</p>
                <div className='cases-arrow next'>
                    <a href="/">
                        <RightArrow />
                    </a>
                </div>
              </div>
              <div className='case-image'>
              <img
                  src={require(`../images/${caseItem.img}.jpg`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;