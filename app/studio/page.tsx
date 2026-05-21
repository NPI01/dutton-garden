'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function StudioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-garden-cream">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-garden-earth/20 via-garden-moss/10 to-garden-coral/20"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ y: textY }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-7xl md:text-9xl font-serif text-garden-earth mb-6">
            The Compost
          </h1>
          <p className="text-2xl md:text-3xl text-garden-moss font-serif italic">
            Where ideas decompose and new growth emerges
          </p>
        </motion.div>
      </section>

      {/* Essays and Writings */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Essay 1 */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-garden-violet to-garden-moss rounded-full" />
            <h2 className="text-4xl md:text-5xl font-serif text-garden-moss mb-6">
              On Painting Flowers
            </h2>
            <div className="prose prose-lg text-garden-earth space-y-6">
              <p className="text-xl leading-relaxed">
                The flower is a perfect subject. It lives, it dies, it transforms. 
                Each petal holds a story of light, of time, of the earth from which it grew. 
                When I paint flowers, I'm not trying to capture their likeness—I'm trying to 
                capture their spirit, their energy, their brief and beautiful dance with existence.
              </p>
              <p className="text-xl leading-relaxed">
                In Kentucky, where I live and work, the seasons teach you about impermanence. 
                Spring's explosion of color, summer's deep greens, fall's golden decay, 
                winter's stark rest. The garden becomes a meditation on cycles, on return, 
                on the eternal present moment.
              </p>
            </div>
          </motion.article>

          {/* Essay 2 */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-garden-coral to-garden-violet rounded-full" />
            <h2 className="text-4xl md:text-5xl font-serif text-garden-moss mb-6">
              Music and Myth
            </h2>
            <div className="prose prose-lg text-garden-earth space-y-6">
              <p className="text-xl leading-relaxed">
                My compositions weave through the paintings like roots through soil. 
                Sound and image are inseparable in my practice. A brushstroke is a note, 
                a color is a chord, a painting is a symphony frozen in time.
              </p>
              <p className="text-xl leading-relaxed">
                The old myths understood this unity—Orpheus with his lyre, the music of 
                the spheres, the world sung into being. Art isn't about separation, it's 
                about connection. Everything touches everything.
              </p>
            </div>
          </motion.article>

          {/* Process Section */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-garden-moss to-garden-earth rounded-full" />
            <h2 className="text-4xl md:text-5xl font-serif text-garden-moss mb-6">
              The Process
            </h2>
            <div className="prose prose-lg text-garden-earth space-y-6">
              <p className="text-xl leading-relaxed">
                I work with found materials, recycled canvases, natural pigments when I can 
                find them. The compost heap teaches economy—nothing is wasted, everything 
                becomes something new. An old painting might be painted over, transformed, 
                given new life.
              </p>
              <p className="text-xl leading-relaxed">
                I paint quickly, intuitively. The flowers don't wait, and neither do I. 
                There's a wildness to the work, a folk energy that comes from the land 
                itself. This is Kentucky art—earthy, honest, unafraid of color or emotion.
              </p>
            </div>
          </motion.article>

          {/* Behind the Scenes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 mt-16"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-garden-moss/10">
              <div className="flex items-center justify-center h-full text-garden-moss/50 text-lg font-serif italic">
                [Studio workspace photo]
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-garden-earth/10">
              <div className="flex items-center justify-center h-full text-garden-earth/50 text-lg font-serif italic">
                [Artist at work photo]
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

