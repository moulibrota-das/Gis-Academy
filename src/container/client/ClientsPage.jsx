import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  { id: 11, name: "Client 11", logo: client11 },
  { id: 5, name: "Client 5", logo: client5 },
  { id: 4, name: "Client 4", logo: client4 },
  { id: 13, name: "Client 13", logo: client13 },
  { id: 12, name: "Client 12", logo: client12 },
  { id: 8, name: "Client 8", logo: client8 },
  { id: 14, name: "Client 14", logo: client14 },
  { id: 10, name: "Client 10", logo: client10 },
  { id: 9, name: "Client 9", logo: client9 },
  { id: 1, name: "Client 1", logo: client1 },
  { id: 2, name: "Client 2", logo: client2 },
  { id: 3, name: "Client 3", logo: client3 },
  { id: 6, name: "Client 6", logo: client6 },
  { id: 7, name: "Client 7", logo: client7 },
];

const ClientsPage = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <div className="min-h-screen bg-offWhite flex flex-col items-center justify-center px-6 py-20">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-darkGreen text-center relative z-[1]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Our Clients
      </motion.h2>

      <motion.div
        className="w-[100px] h-1 bg-darkGreen my-2 relative z-[1]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      ></motion.div>

      {/* Client Logos Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl w-full mt-8"
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
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:opacity-80 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedClient(client)}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-28 h-28 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClient(null)} // Close on background click
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-lg w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing on modal content click
            >
              <button
                className="absolute top-3 right-3 text-gray-300 hover:text-black"
                onClick={() => setSelectedClient(null)}
              >
                ✕
              </button>
              <img
                src={selectedClient.logo}
                alt={selectedClient.name}
                className="w-full object-contain"
              />
              <p className="mt-4 text-center font-semibold">{selectedClient.name}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientsPage;