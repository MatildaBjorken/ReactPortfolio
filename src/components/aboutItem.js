import React from "react";

const experiencenses = [
  {
    id: 1,
    title: "Creative Developer",
    place: "Bannerboy",
    year: "2022 - Present",
  },
  {
    id: 2,
    title: "Frontend Developer",
    place: "Sphinxly",
    year: "2021 - 2022",
  },
  {
    id: 3,
    title: "Developer and designer",
    place: "Freelance",
    year: "2021 - 2022",
  },
  {
    id:4,
    title: "Frontend Developer",
    place: "Hyper Island",
    year: "2020 - 2022",
  },
  {
    id:5,
    title: "Assistant designer",
    place: "Gunila Axen Design",
    year: "2020",
  },
  {
    id:6,
    title: "Assistant in studios",
    place: " Nationalmuseum",
    year: "2018 - 2022 ",
  },
  {
    id:7,
    title: "Art and Design program",
    place: "Kulturama",
    year: "2017 - 2020",
  }
];

const Experiencenses = () => {
  return (
        <div className=''>
          {experiencenses.map(experience => (
            <div className='about-item' key={experience.id}>
              <div>
              <p className="semibold">{experience.title}</p>
              <p>{experience.place}</p>
              </div>
              <div>
              <p>{experience.year}</p>
              </div>
            </div>
          ))}
        </div>
  );
};

export default Experiencenses;