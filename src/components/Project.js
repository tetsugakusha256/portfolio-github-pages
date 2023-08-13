import { motion } from "framer-motion";
export default function Project({ children }) {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <span>{children}</span>
    </motion.div>
  );
}
