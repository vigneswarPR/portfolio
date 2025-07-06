"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating orbs animation
  const FloatingOrb = ({ delay = 0, duration = 4, size = "w-32 h-32" }) => (
    <motion.div
      className={`absolute ${size} rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl`}
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  // Magnetic hover effect
  const MagneticButton = ({ children, className = "" }) => {
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
      setButtonPosition({ x, y });
    };
    
    const handleMouseLeave = () => {
      setButtonPosition({ x: 0, y: 0 });
    };
    
    return (
      <motion.div
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={buttonPosition}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>
    );
  };

  // Staggered animation for skills
  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 300,
      },
    }),
  };

  const skills = [
    "AWS", "Machine Learning", "Deep Learning", "Python", "TensorFlow",
    "Keras", "NLP", "Express.js", "Java", "SQL"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <FloatingOrb delay={0} duration={6} size="w-96 h-96" />
        <FloatingOrb delay={2} duration={8} size="w-64 h-64" />
        <FloatingOrb delay={4} duration={5} size="w-48 h-48" />
      </motion.div>

      {/* Cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Loading animation */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 space-y-32">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.h1
              className="text-8xl md:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Vigneswar P R
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl text-blue-300 mb-8 font-light"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Electronics & Computer Engineering Visionary
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Crafting the future through AI, cloud architecture, and innovative engineering solutions. 
              Passionate about building transformative experiences that bridge technology and human potential.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6 mt-12 text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <MagneticButton className="flex items-center gap-2 text-lg">
                <span className="text-2xl">📍</span> Chennai, India
              </MagneticButton>
              <MagneticButton className="flex items-center gap-2 text-lg">
                <span className="text-2xl">📧</span> 
                <a href="mailto:vigneswar.pr2022@vitstudent.ac.in" className="underline hover:text-blue-300 transition-colors">
                  vigneswar.pr2022@vitstudent.ac.in
                </a>
              </MagneticButton>
              <MagneticButton className="flex items-center gap-2 text-lg">
                <span className="text-2xl">📱</span> 
                <a href="tel:+916380128342" className="underline hover:text-blue-300 transition-colors">
                  +91 6380128342
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </motion.h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Full Stack and AI Intern",
                company: "AraiLabs.ai",
                period: "Jul 2025 - Present",
                points: ["Building Magic lamp (A Flagship AI powered video generator)"]
              },
              {
                title: "AI and Automation Intern",
                company: "Hogist Technologies",
                period: "May 2025 - Jul 2025",
                points: [
                  "Spearheaded automation initiatives by leveraging AWS services and generative AI to streamline operational workflows.",
                  "Collaborated cross-functionally with team leads and stakeholders to coordinate deliverables, facilitate communication, and ensure high-quality output through meticulous content review and organization."
                ]
              },
              {
                title: "Web Development Department Member",
                company: "VIT",
                period: "Dec 2023 - Present",
                points: ["Conducted Hackathons and workshops"]
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                  <motion.h3 
                    className="text-2xl font-bold mb-2 text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.div
                    className="text-blue-400 font-semibold text-lg mb-1"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {exp.company}
                  </motion.div>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        className="text-gray-300 flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <span className="text-blue-400 mt-1">→</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Skills
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="relative group cursor-pointer"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={skillVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-slate-800/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-slate-700/50 group-hover:border-transparent transition-all duration-300">
                  <span className="text-white font-medium text-lg">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "EchoMine",
                description: "AI-powered self-reflection platform using LangChain agents and vector databases to analyze journal entries and surface deep personal insights. Features semantic memory search, life phase segmentation, and emotion trend analysis.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "The Social Sidekick",
                description: "AI-driven social media and CRM automation platform integrating multiple platforms for seamless content workflows. Features AI-powered content generation and intelligent scheduling.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "IoT Anomaly Detection",
                description: "Real-time IoT sensor data simulation with AI-driven anomaly detection using Isolation Forest and immutable logging on Ethereum blockchain.",
                gradient: "from-green-500 to-teal-500"
              },
              {
                title: "Liver Disease Prediction",
                description: "Predictive models using decision tree and logistic regression to identify liver disease from clinical datasets with enhanced detection accuracy.",
                gradient: "from-red-500 to-orange-500"
              },
              {
                title: "Book Recommendation System",
                description: "Personalized recommendation system leveraging NLP to analyze user preferences with sentiment analysis and keyword extraction.",
                gradient: "from-indigo-500 to-purple-500"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300 h-full">
                  <motion.h3
                    className="text-2xl font-bold mb-4 text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  <motion.div
                    className="mt-6 inline-flex items-center gap-2 text-blue-400 font-medium"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Learn More →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Education & Certifications
          </motion.h2>
          
          <div className="space-y-8">
            <motion.div
              className="relative group"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center">
                <h3 className="text-3xl font-bold mb-2 text-white">Vellore Institute of Technology - Chennai</h3>
                <p className="text-blue-400 text-lg">Bachelor of Technology in Electronics and Computer Engineering</p>
                <span className="text-gray-400">2022 - Present</span>
              </div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Smart Internz, Artificial Intelligence using Google TensorFlow",
                "Google Cloud: Generative AI, Introduction to Generative AI Learning, Gemini for Cloud Learning Path, Advanced AI for Developers"
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 group-hover:border-green-500/50 transition-all duration-300">
                    <p className="text-white font-medium">{cert}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="text-center py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's Connect
          </motion.h2>
          
          <motion.p
            className="text-2xl text-gray-300 mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to build something amazing together?
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MagneticButton>
              <motion.a
                href="mailto:vigneswar.pr2022@vitstudent.ac.in"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-2xl text-white font-bold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Email Me
              </motion.a>
            </MagneticButton>
            
            <MagneticButton>
              <motion.a
                href="tel:+916380128342"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-500 px-8 py-4 rounded-2xl text-white font-bold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📱 Call Me
              </motion.a>
            </MagneticButton>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
