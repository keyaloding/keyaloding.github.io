import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const educationData = [
  {
    institution: "University of Chicago",
    degree: "B.S. Computer Science",
    icon: "🎓",
    iconBg: "#383E56",
    date: "September 2022 - June 2026",
    gpa: "3.78/4.00",
    coursework: [
      "Systems Programming",
      "Computer Architecture",
      "Mathematics for Machine Learning",
      "Theory of Algorithms",
      "Mobile Computing",
      "Database Systems",
      "Computer Security",
      "Operating Systems",
    ],
  },
];

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <span className="text-2xl">{education.icon}</span>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.degree}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.institution}
        </p>
        <p className="text-white-100 text-[14px] mt-2">
          GPA: {education.gpa}
        </p>
      </div>

      <div className="mt-5">
        <h4 className="text-white text-[16px] font-semibold mb-3">
          Relevant Coursework:
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {education.coursework.map((course, index) => (
            <div
              key={`course-${index}`}
              className="bg-tertiary rounded-lg px-3 py-2"
            >
              <p className="text-white-100 text-[12px] tracking-wider">
                {course}
              </p>
            </div>
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educationData.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
