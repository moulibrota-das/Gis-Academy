import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Litholog Plotting & Coal Estimation",
    description:
      "Plotting of coal mine boreholes data i.e. different types of soil found during the digging of those boreholes from top soil to coal and analyzing the coal deposit. 750 Projects of Geological Survey of India, Coal Wing from 2000 to 2004 had been completed successfully.",
    client: "Geological Survey of India",
    duration: "2000-2004",
  },
  {
    id: 2,
    title: "Ground Water Aquifer Identification & Quality Monitoring",
    description:
      "Temporal Plotting of underground water aquifers of Districts, West Bengal using Isopleth technique by the acquired data from water table boreholes of State Water Investigation Directorate, Govt. of WB. Determination of different pollutants like arsenic, chloride, fluoride, iron etc. zones (2000 – 2005).",
    client: "State Water Investigation Directorate, Govt. of WB",
    duration: "2000-2005",
  },
  {
    id: 3,
    title: "Socio-Economic Planning for Burdwan Development Authority",
    description:
      "The KMDA assigned project within the Burdwan Development Authority area for Socio-Economic development of the rural households and as well as semi-urban households. Households survey and based on those data, Plan for developing various amenities, infra- structure, and food markets etc. of Socio-Economical status (2003).",
    client: "KMDA, West Bengal",
    duration: "2003",
  },
  {
    id: 4,
    title: "Ground Water Potential Zone Identification & Lineament Geology",
    description:
      "Worked for Mines &amp; Geology Department, Govt. of Jharkhand from the year 2005 to 2008 to indentify the ground water potential areas within Ranchi District from the Satellite Imagery. Cracks & Folds had been identified to find out the Lineaments of those rocky areas. Lineaments are the areas, generally ground water finds on a rocky terrain.",
    client: "Mines & Geology Dept., Govt. of Jharkhand",
    duration: "2005-2008",
  },
  {
    id: 5,
    title: "Land Use Land Cover Mapping for Wetland Management",
    description:
      "East Kolkata Wetland is a Ramsar site, located on the eastern fringes of Kolkata city. From the year 2015 to 2017, Land Use Land Cover maps from different satellite imageries, had been prepared to control the ecology of that area.",
    client: "East Kolkata, West Bengal",
    duration: "2015-2017",
  },
  {
    id: 6,
    title:
      "Real-Time Ambient Air Quality & Air Temperature Study (Diwali Festival)",
    description:
      "Diwali Festival is the festival of lights &amp; crackers of different colours, observed in all over India. During this season from 2016 to 2018, the real time ambient air quality as well as air temperature data have been captured within the Kolkata city. Based on those data, different analyses undertaken to find out the quantities of pollutants like PM 10 and PM 2.5 , CO2 etc. present in the environment and sudden hike in air temperature during the diwali.",
    client: "Kolkata, West Bengal",
    duration: "2016-2018",
  },
  {
    id: 7,
    title: "Study of Road Traffic Congestion in Greater Mumbai",
    description:
      "Greater Mumbai, Maharashtra consist of 24 wards, prepared temporal LULC change for the year 2000 & 2019, to find out the cause of traffic congestions from the Spatio-Social Dimension and by the Gee-Spatial Appraisal & Solutions. Different problematic aspects of Greater Mumbai had appeared and accordingly solutions given.",
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
        className="w-[100px] h-1 bg-darkGreen relative z-[1]"
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

            <p className="text-gray-300 text-sm mt-2">{project.description}</p>
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
