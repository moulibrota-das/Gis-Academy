import { motion } from "framer-motion";
import proprietorImg from "/src/assets/images/proprietor.png";

// Animation variants for staggered text effect
const sentenceVariant = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProprietorMessage = () => {
  const description =
    "A visionary leader specializing in Remote Sensing and Geographic Information System (GIS) projects, while also conducting comprehensive training programs.";

  return (
    <div className="min-h-screen bg-offWhite flex items-center justify-center px-6 md:px-16 py-10 md:py-20">
      <motion.div
        className="max-w-5xl w-full bg-mossGreen text-white rounded-2xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Proprietor Header */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image (Rectangular with Rounded Corners) */}
          <motion.div
            className="w-40 md:w-52 h-auto rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={proprietorImg}
              alt="Proprietor"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Info */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">
              Pankaj Chakraborty
            </h2>
            <p className="text-lightGray text-lg mt-2">
              Proprietor, 21st Century GIS Academy
            </p>

            {/* Animated Description (Fix Spacing) */}
            <motion.p
              className="text-gray-200 mt-4 leading-relaxed"
              variants={sentenceVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariant}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>

        {/* Message from the Proprietor */}
        <motion.div
          className="mt-10 text-center md:text-left border-l-4 border-lightGreen pl-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <h3 className="text-2xl font-semibold text-white">
            Message From <span className="underline">Pankaj Chakraborty</span> – The Proprietor
          </h3>

          <p className="text-gray-200 mt-4 leading-relaxed">
            21ST CENTURY GIS ACADEMY, Kolkata was established in the year 1998
            as a Remote Sensing and GIS Training institute to develop
            industry-ready GIS Professionals. It’s my sole observation during
            the last 27 years that students belonging to middle-class or
            lower-middle-class backgrounds are often left with no option to
            build their professional careers in the field of Remote Sensing &
            GIS due to unaffordable course fee structures. Our academy provides
            them with the opportunity to build their careers in this field with
            low-cost course fees along with high-quality teaching techniques.
            With hands-on training, both practical and theoretical, our students
            secure positions in the industry with handsome salaries, making our
            Academy proud.
            <br />
            <br />
            21ST CENTURY GIS ACADEMY also has another wing dedicated to
            providing GIS Solutions to various Government Departments. Numerous
            projects from the Geological Survey of India, State Water
            Investigation Directorate - West Bengal, Kolkata Municipal
            Development Authority, Department of Mines & Geology – Jharkhand,
            etc., have been undertaken and successfully completed. As part of
            these solutions, several customized software tools have been
            developed, such as Graphic Litholog Plotting & Correlation Diagram
            for GSI and Welllog & Tubewell Structure Plotting for the State
            Water Investigation Directorate (SWID), etc.
            <br />
            <br />
            Then, 21ST CENTURY GIS ACADEMY got Encouraged by the University of Calcutta, 21ST CENTURY GIS ACADEMY
            has also developed easy and affordable educational GIS software for
            Colleges and Universities. The "21stCenturyGIS" suite offers a Basic
            version for Schools, a Professional version for Colleges &
            Universities, and a Premium version for Professional Organizations,
            covering an extensive range of topics, including Remote Sensing, GIS
            Mapping & Analysis, Terrain Modeling, Morphometric Analysis, Network
            Analysis, and Sub-Surface Mapping.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProprietorMessage;