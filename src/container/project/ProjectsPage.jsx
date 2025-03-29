import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Litholog Plotting & Coal Estimation",
    client: "Geological Survey of India",
    duration: "2000-2004",
  },
  {
    id: 2,
    title: "Ground Water Aquifer Identification & Quality Monitoring",
    client: "State Water Investigation Directorate, Govt. of WB",
    duration: "2000-2005",
  },
  {
    id: 3,
    title: "Socio-Economic Planning for Burdwan Development Authority",
    client: "KMDA, West Bengal",
    duration: "2003",
  },
  {
    id: 4,
    title: "Ground Water Potential Zone Identification & Lineament Geology",
    client: "Mines & Geology Dept., Govt. of Jharkhand",
    duration: "2005-2008",
  },
  {
    id: 5,
    title: "Land Use Land Cover Mapping for Wetland Management",
    client: "East Kolkata, West Bengal",
    duration: "2015-2017",
  },
  {
    id: 6,
    title:
      "Real-Time Ambient Air Quality & Air Temperature Study (Diwali Festival)",
    client: "Kolkata, West Bengal",
    duration: "2016-2018",
  },
  {
    id: 7,
    title: "Study of Road Traffic Congestion in Greater Mumbai",
    client: "Spatio-Social Dimension & Geo-Spatial Appraisal",
    duration: "2020-2021",
  },
];

const ProjectsPage = () => {
  return (
    <div
      className="min-h-[800px] container mx-auto flex flex-col items-center justify-center px-6 py-16"
      id="projects"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-4xl font-semibold text-darkGreen text-center relative z-[1]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Our Projects
      </motion.h2>

      <motion.div
        className="w-[100px] h-1 bg-darkGreen my-2 relative z-[1]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      ></motion.div>

      {/* <motion.div
        className="w-[200px] h-1 bg-green-500 my-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      ></motion.div> */}

      {/* Project List */}
      <motion.ul
        className="w-full max-w-4xl space-y-6 mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        {projects.map((project) => (
          <motion.li
            key={project.id}
            className="bg-mossGreen p-3 rounded-xl shadow-lg transition-all duration-300
                       hover:shadow-green-400/50 hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-semibold text-xl text-offWhite">
              {project.title}
            </h3>
            <p className="text-gray-100 text-sm mt-2">
              {project.client}
              <span className="text-gray-100"> ({project.duration})</span>
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ProjectsPage;
