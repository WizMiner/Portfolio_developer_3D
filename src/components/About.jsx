import React from "react";
import { Tilt } from "react-tilt";  // Corrected the import here
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/**
 * A functional component that renders a single service card.
 *
 * @param {object} props The component props.
 * @param {number} props.index The index of the service card.
 * @param {string} props.title The title of the service card.
 * @param {string} props.icon The icon of the service card.
 *
 * @returns {React.ReactElement} The rendered service card.
 */
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        /**
         * The variants used for the card animation.
         *
         * @type {object}
         */
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        /**
         * The class names used for the card styles.
         *
         * @type {string}
         */
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          /**
           * The options used for the Tilt component.
           *
           * @type {object}
           */
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          /**
           * The class names used for the card inner styles.
           *
           * @type {string}
           */
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            /**
             * The source of the icon.
             *
             * @type {string}
             */
            src={icon}
            /**
             * The alt text of the icon.
             *
             * @type {string}
             */
            alt='web-development'
            /**
             * The class names used for the icon styles.
             *
             * @type {string}
             */
            className='object-contain w-16 h-16'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='flex flex-wrap gap-10 mt-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
