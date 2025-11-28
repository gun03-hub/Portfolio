import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function Resume() {
  const skills = [
    { name: "JavaScript / TypeScript", level: 90, color: "from-yellow-500 to-orange-500" },
    { name: "React / Next.js", level: 88, color: "from-cyan-500 to-blue-500" },
    { name: "Node.js / Express", level: 82, color: "from-green-500 to-emerald-500" },
    { name: "Python / Django", level: 75, color: "from-blue-500 to-indigo-500" },
    { name: "MongoDB / PostgreSQL", level: 80, color: "from-purple-500 to-pink-500" },
    { name: "HTML / CSS / Tailwind", level: 92, color: "from-pink-500 to-rose-500" },
  ];

  const certifications = [
    {
      title: "React Frontend Developer",
      issuer: "HackerRank",
      date: "July 2024",
      link: "https://www.hackerrank.com/certificates/1cd15de5ff41",
      description: "Proficiency in React.js, CSS, JavaScript, state management, and Node.js backend development.",
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "Google Cloud",
      date: "February 2024",
      link: "https://www.cloudskillsboost.google/public_profiles/f23dded4-ad03-4b42-842c-b10f4de2862d/badges/8031342",
      description: "Building generative AI applications with Python and TensorFlow, developing AI models for various tasks.",
    },
    {
      title: "Python Data Libraries",
      issuer: "HackerRank",
      date: "July 2024",
      link: "https://www.hackerrank.com/certificates/5da32f7b75e6",
      description: "Working with Pandas, NumPy, and Matplotlib for data manipulation and visualization.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Delhi",
      period: "2023 - Present",
      description: "Currently in 2nd year, focusing on software development, data structures, and algorithms.",
    },
  ];

  return (
    <section id="resume" className="py-12 xs:py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-10 xs:mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="section-heading mb-3 xs:mb-4">Resume</h2>
          <p className="section-subheading mx-auto">
            My educational background, certifications, and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-12">
          <div className="space-y-6 xs:space-y-8">
            <div data-aos="fade-right">
              <div className="flex items-center gap-2.5 xs:gap-3 mb-4 xs:mb-6">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400">
                  <SchoolIcon className="text-lg xs:text-xl" />
                </div>
                <h3 className="text-xl xs:text-2xl font-display font-bold text-white">Education</h3>
              </div>

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-4 xs:p-5 md:p-6 border-l-4 border-primary-500"
                >
                  <h4 className="text-base xs:text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                  <div className="text-primary-400 text-sm xs:text-base font-medium mb-1.5 xs:mb-2">{edu.institution}</div>
                  <div className="text-xs xs:text-sm text-dark-400 mb-2 xs:mb-3">{edu.period}</div>
                  <p className="text-dark-300 text-xs xs:text-sm">{edu.description}</p>
                </div>
              ))}
            </div>

            <div data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-center gap-2.5 xs:gap-3 mb-4 xs:mb-6">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-lg bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                  <VerifiedIcon className="text-lg xs:text-xl" />
                </div>
                <h3 className="text-xl xs:text-2xl font-display font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-3 xs:space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 xs:p-5 md:p-6 group hover:border-primary-500/30 transition-all"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-1 xs:gap-0 mb-1.5 xs:mb-2">
                      <h4 className="text-base xs:text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {cert.title}
                      </h4>
                      <span className="text-xs text-dark-400 whitespace-nowrap">{cert.date}</span>
                    </div>
                    <div className="text-primary-400 text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">{cert.issuer}</div>
                    <p className="text-dark-400 text-xs xs:text-sm mb-3 xs:mb-4 line-clamp-2 xs:line-clamp-none">{cert.description}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm text-primary-400 hover:text-primary-300 transition-colors touch-manipulation py-1"
                    >
                      <DownloadIcon className="text-sm xs:text-base" />
                      View Certificate
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="flex items-center gap-2.5 xs:gap-3 mb-4 xs:mb-6">
              <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                <WorkIcon className="text-lg xs:text-xl" />
              </div>
              <h3 className="text-xl xs:text-2xl font-display font-bold text-white">Technical Skills</h3>
            </div>

            <div className="glass-card p-4 xs:p-6 md:p-8 space-y-4 xs:space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="space-y-1.5 xs:space-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm xs:text-base font-medium">{skill.name}</span>
                    <span className="text-dark-400 text-xs xs:text-sm">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-bar-fill bg-gradient-to-r ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="pt-4 xs:pt-6 mt-4 xs:mt-6 border-t border-dark-700">
                <h4 className="text-base xs:text-lg font-semibold text-white mb-3 xs:mb-4">Other Skills</h4>
                <div className="flex flex-wrap gap-1.5 xs:gap-2">
                  {["Git", "Docker", "AWS", "Firebase", "REST APIs", "GraphQL", "Agile", "CI/CD"].map((skill, index) => (
                    <span key={index} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={require("../../assets/files/Resume.pdf")}
              download="Gunjan_Arora_Resume"
              className="btn-primary w-full mt-6 xs:mt-8 flex items-center justify-center gap-2"
              data-aos="fade-up"
            >
              <DownloadIcon className="text-lg xs:text-xl" />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
