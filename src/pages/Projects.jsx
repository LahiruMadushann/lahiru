import { Link } from "react-router-dom";
import { projects } from "../constants";
import { github } from "../assets/icons";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ProjectCard from "../components/ProjectCard";

const fallDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150 } }
};

const Projects = () => {
  return (
    <section className="max-container ">
      <motion.div variants={fallDownVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
         className="mb-12 mt-[-6vw]">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow-sm">
            Projects
          </span>
        </h1>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fallDownVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="className='mt-5 flex flex-col gap-3 text-slate-500'"
        >
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-between gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow-sm'>Projects</span>
      </h1>
      
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so if
          you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further enhancements.
          Your collaboration is highly valued!
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                    src={project.iconUrl}
                    alt="Project Icon"
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {project.name}
                </h4>
                <p className='mt-2 text-slate-500'>
                  {project.description}
                </p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img 
                    src={arrow}
                    alt="arrow"
                    className='w-4 h-4 object-contatin'
                  />
                </div>
              </div>
          </div>
        ))}
      </div> */}
      <hr className="border-slate-200 " />
      <CTA />
    </section>
  );
};

export default SectionWrapper(Projects, "");
