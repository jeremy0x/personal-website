import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-full p-1.5 text-xl transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative"
      >
        <FiSun className="absolute h-4 w-4 rotate-0 transform text-gray-600 opacity-0 transition-opacity dark:text-gray-400 dark:opacity-100" />
        <FiMoon className="h-4 w-4 rotate-0 transform text-gray-600 opacity-100 transition-opacity dark:text-gray-400 dark:opacity-0" />
      </motion.div>
    </motion.button>
  );
};
