import { motion } from "framer-motion";
import client1 from "/src/assets/clients/1.jpg";
import client2 from "/src/assets/clients/2.png";
import client3 from "/src/assets/clients/3.png";
import client4 from "/src/assets/clients/4.png";
import client5 from "/src/assets/clients/5.jpg";
import client6 from "/src/assets/clients/6.jpeg";
import client7 from "/src/assets/clients/7.png";
import client8 from "/src/assets/clients/8.png";
import client9 from "/src/assets/clients/9.png";
import client10 from "/src/assets/clients/10.png";
import client11 from "/src/assets/clients/11.jpg";
import client12 from "/src/assets/clients/12.png";
import client13 from "/src/assets/clients/13.svg";
import client14 from "/src/assets/clients/14.png";

const clients = [
  { id: 1, name: "Client 1", logo: client1 },
  { id: 2, name: "Client 2", logo: client2 },
  { id: 3, name: "Client 3", logo: client3 },
  { id: 4, name: "Client 4", logo: client4 },
  { id: 5, name: "Client 5", logo: client5 },
  { id: 6, name: "Client 6", logo: client6 },
  { id: 7, name: "Client 7", logo: client7 },
  { id: 8, name: "Client 8", logo: client8 },
  { id: 9, name: "Client 9", logo: client9 },
  { id: 10, name: "Client 10", logo: client10 },
  { id: 11, name: "Client 11", logo: client11 },
  { id: 12, name: "Client 12", logo: client12 },
  { id: 13, name: "Client 13", logo: client13 },
  { id: 14, name: "Client 14", logo: client14 },
];

const ClientsPage = () => {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col items-center justify-center px-6 py-20">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-mossGreen uppercase text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Clients
      </motion.h2>

      {/* Client Logos Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {clients.map((client) => (
          <motion.div
            key={client.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:opacity-80"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-28 h-28 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientsPage;