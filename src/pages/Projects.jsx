import { Link } from "react-router-dom";
import { projects } from "../constants";
import { github } from "../assets/icons";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="relative">
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="mb-8"
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-gradient-to-tr from-slate-300/10 to-indigo-300/40 backdrop-blur-md p-5  rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-[25vw] h-[25vw] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="blue-gradient_text text-[24px] ">{name}</h3>
            <p className="mt-2 text-slate-700 text-[14px]"> {description} </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[14px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-bold`}
              >
                {console.log("Color", tag.color)}#{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="max-container ">
      <motion.div variants={textVariant()} className="mb-12 mt-[-6vw]">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow-sm">
            Projects
          </span>
        </h1>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
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
