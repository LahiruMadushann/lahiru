import { Link } from "react-router-dom";
import { projects } from "../constants";
import { github } from "../assets/icons";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const fallDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150 } }
};

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
          variants={fallDownVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="mb-8"
        >
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-gradient-to-tr from-slate-300/10 to-indigo-300/40 backdrop-blur-md p-5 sm:w-[360px] rounded-2xl  w-full"
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
  export default ProjectCard;