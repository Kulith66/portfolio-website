"use client"
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: "Web Development",
    Description: "Skilled in Spring Boot, MERN stack, and Next.js, I develop dynamic, responsive web applications with a focus on user experience and scalable architecture.",
    href: "" // Add your link here
  },
  {
    num: '02',
    title: "Data Science",
    Description: "Skilled in data analysis and visualization, I extract actionable insights from complex datasets to drive informed decision-making and innovation",
    href: "" // Add your link here
  },
  {
    num: '03',
    title: "Machine Learning",
    Description: "Experienced in developing and deploying machine learning models, I utilize algorithms and predictive analytics to solve complex problems and enhance automation.",
    href: "" // Add your link here
  },
];

const Service = () => {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-0 bg-black text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4 }, duration: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[68px]"
        >
          {services.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div>
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                  {item.num}
                </div>
                <Link href={item.href}>
                  <div className="flex items-center gap-2">
                    <BsArrowDownRight className="text-white" />
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-500 transition-all duration-500">
                      {item.title}
                    </h2>
                  </div>
                </Link>
                <p className="group-hover:text-blue-500 transition-all duration-500">{item.Description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
