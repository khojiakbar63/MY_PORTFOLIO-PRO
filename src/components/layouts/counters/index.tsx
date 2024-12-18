import { useCounters } from "../../../controllers"; // Import the custom hook


export const Counter = () => {
    // GET CURRENT YEAR
  const currentYear = new Date().getFullYear();
  const targets = {
    years: currentYear - 2023,
    projects: 92,
    technologies: 10,
    commits: 500,
  };

//   TECHS: html, css, sass, tailwind, bootstrap, js, astro, react, express, mongodb
  const counts = useCounters(targets);

  return (
    <ul className="bottom">
      <li className="item">
        <span className="quantity">{counts.years}</span>
        <span className="text">
          Years of <br /> experience
        </span>
      </li>
      <li className="item">
        <span className="quantity">{counts.projects}</span>
        <span className="text">
          Projects <br /> completed.
        </span>
      </li>
      <li className="item">
        <span className="quantity">{counts.technologies}</span>
        <span className="text">
          Technologies <br /> completed.
        </span>
      </li>
      <li className="item">
        <span className="quantity">{counts.commits}</span>
        <span className="text">
          Code <br /> commits.
        </span>
      </li>
    </ul>
  );
};

export default Counter;
