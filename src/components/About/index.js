import "../../App.css";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import CloudIcon from "@mui/icons-material/Cloud";

export default function About() {
  const services = [
    {
      icon: <CodeIcon className="text-3xl" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <StorageIcon className="text-3xl" />,
      title: "Backend Development",
      description: "Creating robust APIs and server-side applications with Node.js, Express, and database integration.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BrushIcon className="text-3xl" />,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing interfaces that enhance user experience.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <CloudIcon className="text-3xl" />,
      title: "Cloud & DevOps",
      description: "Deploying and managing applications on cloud platforms with CI/CD pipelines.",
      color: "from-green-500 to-teal-500",
    },
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
    "Python", "MongoDB", "PostgreSQL", "Firebase", "Tailwind CSS", "Git"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-heading mb-4">About Me</h2>
          <p className="section-subheading mx-auto">
            Passionate developer with expertise in building modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Crafting Digital Excellence with
              <span className="text-gradient"> Modern Technologies</span>
            </h3>
            
            <p className="text-dark-300 leading-relaxed">
              I'm a passionate Full Stack Developer currently pursuing my BS in Computer Science 
              at the University of Delhi. With a strong foundation in both frontend and backend 
              technologies, I specialize in building scalable, user-centric applications.
            </p>
            
            <p className="text-dark-300 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to solve real-world 
              problems. I've worked on diverse projects ranging from e-commerce platforms to 
              financial management tools, always focusing on clean code and exceptional user experiences.
            </p>

            <p className="text-dark-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="tech-tag"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-purple/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400">
                    <CodeIcon />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">3+ Years</div>
                    <div className="text-dark-400">of Development Experience</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/20 flex items-center justify-center text-accent-purple">
                    <StorageIcon />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">20+ Projects</div>
                    <div className="text-dark-400">Successfully Delivered</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                    <BrushIcon />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">5+ Certifications</div>
                    <div className="text-dark-400">Professional Credentials</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:border-primary-500/30 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-dark-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
