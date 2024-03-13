import SSLO from "./Assets/Projects/sslo.jpg";
import FOREX from "./Assets/Projects/forex.jpg";


export const PROJECTS = [
  {
    image: SSLO,
    name: "SSL Orchestractor",
    technologyUsed: "Open API, GO, Microservices, Docker, Kubernetes, Angular, Node JS, Java",
    description: "SSL Orchestrator uses daisy chaining to direct traffic through network security devices based on policies defined by user to reduce latency over the network",
    url: "https://www.f5.com/products/big-ip-services/ssl-orchestrator",
  },
  {
    image: FOREX,
    name: "Flexible FX Rate Provider",
    technologyUsed: "Java 8, Spring Boot, Openshift, React, Jenkins, Docker, Kubernetes",
    description: "Provides realtime FX rates to different customers by adding margins based on different offerings they are using from DBS",
  },
];

export const SKILLS = [
  { name: "Java 8", initialRating: 4 },
  { name: "Microservices", initialRating: 4 },
  { name: "Spring Boot", initialRating: 4 },
  { name: "Openshift", initialRating: 3 },
  { name: "Docker", initialRating: 3 },
  { name: "Kubernetes", initialRating: 3 },
  { name: "JavaScript", initialRating: 3 },
  { name: "TypeScript", initialRating: 3 },
  { name: "ReactJs", initialRating: 3 },
  { name: "Redux", initialRating: 4 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Maven", initialRating: 4 },
  { name: "Jenkins", initialRating: 3 },
  { name: "Unit-Testing(Junit)", initialRating: 4 },
  { name: "Git", initialRating: 4 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "Atom", "Sublime Text", "Linux", "Heroku", "Postman"]
