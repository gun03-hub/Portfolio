import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "../../App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Home() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
              data-aos="fade-up"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-primary-300">Available for opportunities</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient">Gunjan Arora</span>
            </h1>

            <div
              className="text-xl md:text-2xl lg:text-3xl text-dark-300 mb-8 h-[80px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "React & Node.js Expert",
                    "UI/UX Enthusiast",
                    "Problem Solver",
                  ],
                  delay: 80,
                  deleteSpeed: 50,
                  pauseFor: 2000,
                  autoStart: true,
                  loop: true,
                  stringSplitter: stringSplitter,
                }}
              />
            </div>

            <p
              className="text-lg text-dark-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I craft exceptional digital experiences with modern technologies.
              Passionate about building scalable applications and solving complex problems.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button onClick={scrollToContact} className="btn-primary">
                Get In Touch
              </button>
              <a
                href={require("../../assets/files/Resume.pdf")}
                download="Gunjan_Arora_Resume"
                className="btn-outline"
              >
                Download Resume
              </a>
            </div>

            <div
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-sm text-dark-400">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-dark-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-dark-400">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-dark-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-dark-400">Technologies</div>
              </div>
            </div>
          </div>

          <div
            className="flex-1 relative"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple opacity-20 blur-3xl animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary-600/20 to-accent-purple/20 border border-primary-500/30" />
              <img
                src={require("../../assets/images/profile-pic.png")}
                alt="Gunjan Arora"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-dark-700 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-dark-800 border border-dark-700 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">5+</div>
                  <div className="text-xs text-dark-400">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-400 hover:text-primary-400 transition-colors animate-bounce"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <KeyboardArrowDownIcon className="text-4xl" />
      </button>
    </section>
  );
}
