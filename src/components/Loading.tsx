import { motion } from 'framer-motion';
import { PulseLoader } from 'react-spinners';

export default function Loading({ fullScreen = false }: { fullScreen?: boolean }) {
  if (fullScreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-dark-900/80"
      >
        <div className="flex flex-col items-center gap-4">
          <PulseLoader color="#0c96eb" size={15} />
          <p className="text-sm font-medium text-dark-600 dark:text-dark-400">
            Cargando...
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-center p-4"
    >
      <PulseLoader color="#0c96eb" size={8} />
    </motion.div>
  );
}   