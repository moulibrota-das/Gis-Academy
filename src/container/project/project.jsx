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
    title: "Real-Time Ambient Air Quality & Air Temperature Study (Diwali Festival)",
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
    <div className="min-h-screen bg-offwhite flex flex-col items-center justify-center px-6 py-16">
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold text-mossGreen uppercase text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Projects
      </motion.h2>

      {/* Project List */}
      <motion.ul
        className="w-full max-w-4xl space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {projects.map((project) => (
          <motion.li
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row md:justify-between items-start md:items-center text-gray-800"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-medium">{project.title}</span>
            <span className="text-sm text-gray-600">{project.client} ({project.duration})</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ProjectsPage;