"use client"
import { BsArrowDownRight } from "react-icons/bs";

import {
  faHtml5,
  faCss3,
  faJs,
  faFigma,
  faNodejs,
  faReact,
} from "react-icons/fa"
import { siTailwindcss, siNextdotjs } from "react-icons/si"

const info = [
  {
    fieldName: "Name",
    fieldValue: "Kulith Sathnindu"
  },
  {
    fieldName: "Phone",
    fieldValue: "(+94) 752244807"
  },
  {
    fieldName: "Education",
    fieldValue: "BSc (Hons) in Computing & Information Systems Sabaragamuwa University of Sri Lanka"
  },
  {
    fieldName: "Mail",
    fieldValue: "Kulithathnindu123@gmail.com"
  },
]

const projects = [{
  Name: "Laptop Price Predictor (Website)",
  Description: "I've developed a web application that accurately predicts laptop prices using machine learning",
  Skills: "Python, NumPy, Pandas, Scikit-learn (sklearn), Jupyter Notebook, VS Code, Flask",
  Github: "https://github.com/Kulith66/price_prediction_web_application"
}, {
  Name: "MotoHub",
  Description: "Moto Hub is designed to connect motorcycle enthusiasts, providing a platform to share rides, plan events, and discuss all things moto-related. Leveraging the power of MongoDB, Express.js, React, and Node.js, Moto Hub offers a seamless and dynamic user experience. Check it out and let me know what you think!",
  Skills: "MongoDB, Express.js, React, Node.js",
  Github: "https://github.com/Kulith66/Motohub-E-commerce-app-"
}, {
  Name: "EduVersa",
  Description: "Group project EduVersa is an innovative web application that offers a comprehensive, all-in-one learning management system, empowering users with personalized learning paths, collaboration tools, and a vast knowledge hub, all within a user-friendly interface.",
  Skills: "ReactJS, Firebase",
  Github: "https://github.com/Kulith66/EduVersa"
}, {
  Name: "CricPlayerFaceRecognition",
  Description: "This ongoing project aims to build a face recognition system capable of detecting faces, extracting facial features, saving these features as encodings, and recognizing individuals based on these encodings",
  Skills: "Python, OpenCv, Dlib, NumPy",
  Github: "https://github.com/Kulith66/CricPlayerFaceRecognition"
}]

const Resume = () => {
  return (
    <div className="p-8 bg-black text-gray-400">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Personal Information</h1>
        <ul>
          {info.map((item, index) => (
            <li key={index} className="mb-2">
              <strong>{item.fieldName}  :  </strong>{item.fieldValue}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-black rounded shadow">
              <BsArrowDownRight/>
              <h2 className="text-2xl font-bold">{project.Name}</h2>
              <p className="mb-2">{project.Description}</p>
              <p><strong>Skills:</strong> {project.Skills}</p>
              <a href={project.Github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Resume
