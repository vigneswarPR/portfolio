"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div id="home" className="max-w-3xl mx-auto px-4 py-12 space-y-32">
      {/* About Section */}
      <motion.section
        id="about"
        className="space-y-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-2">Vigneswar P R</h1>
        <h2 className="text-xl text-blue-500 mb-4">Aspiring Electronics and Computer Engineering Student</h2>
        <p className="text-lg text-foreground/80">
          Aspiring Electronics and Computer Engineering student with strong technical expertise in embedded systems, machine learning, web development, and cloud technologies. Passionate about building innovative projects including Cloud-based solutions, AI-driven applications, and full-stack web solutions. Experienced in collaborative teamwork, hackathon participation, and conducting technical workshops at university-level clubs, aiming to leverage skills to create impactful technological solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 text-foreground/70">
          <span>📍 Chennai, India</span>
          <span>📧 <a href="mailto:vigneswar.pr2022@vitstudent.ac.in" className="underline">vigneswar.pr2022@vitstudent.ac.in</a></span>
          <span>📱 <a href="tel:+916380128342" className="underline">+91 6380128342</a></span>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
        <div className="space-y-4">
          <div className="bg-background/80 dark:bg-foreground/10 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-xl mb-1">Web Development Department Member, VIT</h3>
            <span className="text-sm text-foreground/60">Dec 2023 - Present</span>
            <ul className="list-disc ml-6 mt-2 text-foreground/80">
              <li>Conducted Hackathons and workshops</li>
            </ul>
          </div>
          <div className="bg-background/80 dark:bg-foreground/10 rounded-xl p-6 shadow">
            <h3 className="font-semibold text-xl mb-1">AI and Automation Intern, Hogist Technologies</h3>
            <span className="text-sm text-foreground/60">May 2025 - Jul 2025</span>
            <ul className="list-disc ml-6 mt-2 text-foreground/80">
              <li>Spearheaded automation initiatives by leveraging AWS services and generative AI to streamline operational workflows.</li>
              <li>Collaborated cross-functionally with team leads and stakeholders to coordinate deliverables, facilitate communication, and ensure high-quality output through meticulous content review and organization.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        className="space-y-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="inline-block bg-background/80 dark:bg-foreground/10 rounded-xl p-6 shadow">
          <h3 className="font-semibold text-xl mb-1">Vellore Institute of Technology - Chennai</h3>
          <span className="text-sm text-foreground/60">Bachelor of Technology in Electronics and Computer Engineering • 2022 - Present</span>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        id="certifications"
        className="space-y-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Licenses & Certifications</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">Smart Internz, Artificial Intelligence using Google TensorFlow</span>
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">Google Cloud: Generative AI, Introduction to Generative AI Learning, Gemini for Cloud Learning Path, Advanced AI for Developers</span>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="space-y-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">AWS</span>
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">Machine Learning</span>
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">Deep Learning</span>
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">Python</span>
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">TensorFlow</span>
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">Keras</span>
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">NLP</span>
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">Express.js</span>
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">Java</span>
          <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full font-medium">SQL</span>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-background/80 dark:bg-foreground/10 rounded-xl p-6 shadow hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl mb-2">EchoMine</h3>
            <p className="text-foreground/70">EchoMine is an AI-powered self-reflection platform that uses LangChain agents and vector databases to analyze journal entries and surface deep personal insights. It includes semantic memory search, life phase segmentation, emotion trend analysis, and Telegram-based journaling/chatbot interaction. Built using Python, Streamlit, SQLite, FAISS, OpenAI, and LangChain, it turns fragmented thoughts into structured understanding. EchoMine empowers users to track, explore, and evolve their mental and emotional journeys.</p>
          </div>
          <div className="bg-background/80 dark:bg-foreground/10 rounded-xl p-6 shadow hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl mb-2">The Social Sidekick</h3>
            <p className="text-foreground/70">AI-driven social media and CRM automation platform integrating Telegram, Instagram, and Facebook for seamless content and communication workflows. Features AI-powered image and caption generation, intelligent scheduling, real-time analytics, and CRM support for personalized lead engagement. Built with React.js, Python, Google Gemini, and social media APIs.</p>
          </div>
          <div className="bg-background/80 dark:bg-foreground/10 rounded-xl p-6 shadow hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl mb-2">IoT Anomaly Detection with AI & Blockchain</h3>
            <p className="text-foreground/70">Real-time IoT sensor data simulation, AI-driven anomaly detection (Isolation Forest), and immutable logging of anomalies on Ethereum blockchain, visualized via a live Streamlit dashboard.</p>
          </div>
          <div className="bg-background/80 dark:bg-foreground/10 rounded-xl p-6 shadow hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl mb-2">Prediction and Analysis of Liver Patient Data</h3>
            <p className="text-foreground/70">Predictive models using decision tree and logistic regression to identify liver disease from clinical datasets. Applied feature analysis and model evaluation to enhance detection accuracy.</p>
          </div>
          <div className="bg-background/80 dark:bg-foreground/10 rounded-xl p-6 shadow hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl mb-2">Book Recommendation System</h3>
            <p className="text-foreground/70">Personalized book recommendation system leveraging NLP to analyze user preferences and suggest relevant titles. Used sentiment analysis and keyword extraction for improved recommendations.</p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="space-y-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg text-foreground/80">Let&apos;s connect! Email me at <a href="mailto:vigneswar.pr2022@vitstudent.ac.in" className="text-blue-500 underline">vigneswar.pr2022@vitstudent.ac.in</a> or call <a href="tel:+916380128342" className="text-blue-500 underline">+91 6380128342</a></p>
      </motion.section>
    </div>
  );
}
