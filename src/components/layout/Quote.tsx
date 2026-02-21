import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface QuoteType {
  quote: string;
  author: string;
  category: string;
}

const Quote = () => {
  const [quote, setQuote] = useState<QuoteType | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://api.api-ninjas.com/v2/randomquotes",
        {
          headers: {
            "X-Api-Key": "86iprP3ReO0hBDGitchRjfESWNq6GBbShP377g8g",
          },
        }
      );

      const data = await res.json();
      setQuote(data[0]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <motion.div 
      className="container mx-auto max-w-4xl px-12 py-16 mt-8"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="relative px-4 py-10 border border-black/10 dark:border-white/10 rounded-xl quote-card-shadow"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        
        {/* SVG */}
        <motion.svg
          className="w-[105px] h-[78px] absolute top-6 left-6 fill-zinc-100 dark:fill-white/20"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
        </motion.svg>

        {/* Quote Text */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.p 
              key="loading"
              className="z-10 relative italic text-pretty font-mono font-medium text-zinc-500 dark:text-dark-white-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              Loading quote...
            </motion.p>
          ) : (
            <motion.p 
              key="quote"
              className="z-10 relative italic text-pretty font-mono font-medium text-zinc-500 dark:text-dark-white-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              "{quote?.quote}"
            </motion.p>
          )}
        </AnimatePresence>

        {/* Author */}
        <AnimatePresence>
          {quote && (
            <motion.p 
              className="text-right italic text-pretty font-mono text-highlight"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              — {quote.author}
            </motion.p>
          )}
        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
};

export default Quote;
