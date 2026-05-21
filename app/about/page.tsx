'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// SVG vine component
const VineAnimation = () => {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 10 0 Q 20 20, 15 40 T 25 80 T 35 100"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        className="text-garden-moss"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M 90 0 Q 80 25, 85 50 T 75 85 T 65 100"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        className="text-garden-violet"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
      />
    </svg>
  );
};

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rootY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-garden-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <VineAnimation />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-serif text-garden-moss mb-6"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(122, 155, 118, 0.3)",
                "0 0 40px rgba(122, 155, 118, 0.2)",
                "0 0 20px rgba(122, 155, 118, 0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            The Roots
          </motion.h1>
          <p className="text-2xl md:text-3xl text-garden-earth font-serif italic">
            Where it all begins
          </p>
        </motion.div>

        {/* Animated roots growing from bottom */}
        <motion.div
          style={{ y: rootY }}
          className="absolute bottom-0 left-0 right-0 h-64 opacity-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <motion.path
              d="M 50 100 Q 40 70, 45 40 T 35 0"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-garden-earth"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M 50 100 Q 60 75, 55 45 T 65 0"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-garden-earth"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.5, ease: "easeInOut", delay: 0.2 }}
            />
          </svg>
        </motion.div>
      </section>

      {/* Artist Bio */}
      <section className="py-24 px-6 bg-gradient-to-b from-garden-cream to-garden-moss/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6 mb-12">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="w-32 h-32 rounded-full bg-garden-moss/20 flex items-center justify-center text-6xl"
              >
                🌸
              </motion.div>
              <div>
                <h2 className="text-5xl font-serif text-garden-moss mb-2">
                  Dan Dutton
                </h2>
                <p className="text-xl text-garden-earth italic">
                  Painter, Composer, Folk Artist
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-garden-earth">
              <p className="text-xl leading-relaxed">
                Dan Dutton is a Kentucky-based folk artist whose work spans painting, music, 
                and experimental composition. His flower paintings have become emblematic of 
                a distinctly regional approach to contemporary art—one that honors tradition 
                while embracing spontaneity and intuition.
              </p>
              
              <p className="text-xl leading-relaxed">
                Born and raised in the hills of Eastern Kentucky, Dutton's artistic practice 
                is deeply rooted in the landscape and culture of Appalachia. His work draws 
                from folk traditions, outsider art, and a profound connection to the natural 
                world.
              </p>

              <p className="text-xl leading-relaxed">
                The flower paintings that comprise "The Garden" series represent years of 
                exploration into color, form, and the ephemeral nature of beauty. Each piece 
                is a meditation on growth, decay, and renewal—themes that recur throughout 
                Dutton's multidisciplinary practice.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 space-y-12"
          >
            <h3 className="text-4xl font-serif text-garden-moss mb-12">
              Artistic Journey
            </h3>

            {[
              { year: 'Early Years', text: 'Developed love for Kentucky landscape and folk traditions' },
              { year: 'Training', text: 'Self-taught artist, learned through experimentation and observation' },
              { year: 'The Garden', text: 'Began flower painting series exploring themes of transformation' },
              { year: 'Music', text: 'Expanded practice to include ambient compositions and sound art' },
              { year: 'Present', text: 'Continues to work from his Kentucky studio, blending mediums' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-2xl font-serif text-garden-violet">
                    {item.year}
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="h-full border-l-2 border-garden-moss/30 pl-8 pb-8">
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="text-lg text-garden-earth"
                    >
                      {item.text}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-garden-violet/10 to-garden-coral/10"
          >
            <h3 className="text-4xl font-serif text-garden-moss mb-8">
              Artistic Philosophy
            </h3>
            <blockquote className="text-2xl font-serif italic text-garden-earth leading-relaxed border-l-4 border-garden-violet pl-8">
              "Art is not separate from life—it is life. The flower blooms, the music plays, 
              the paint dries. Everything is movement, everything is change. I try to honor 
              that truth in every piece I make."
            </blockquote>
            <p className="mt-6 text-right text-garden-moss font-serif">
              — Dan Dutton
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

