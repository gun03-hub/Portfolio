import Tilt from "react-parallax-tilt";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Work({ title, desc, tags, link, code, img }) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      transitionSpeed={300}
      className="h-full"
    >
      <div className="project-card h-full flex flex-col">
        <div className="relative overflow-hidden group/image">
          <img
            src={img}
            alt={title}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover/image:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover/image:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/image:translate-y-0">
            {link && (
              <button
                onClick={() => window.open(link, "_blank")}
                className="w-10 h-10 rounded-lg bg-dark-800/90 backdrop-blur-sm border border-dark-600 flex items-center justify-center text-white hover:bg-primary-500 hover:border-primary-500 transition-all"
                title="Visit Site"
              >
                <LaunchIcon className="text-lg" />
              </button>
            )}
            {code && (
              <button
                onClick={() => window.open(code, "_blank")}
                className="w-10 h-10 rounded-lg bg-dark-800/90 backdrop-blur-sm border border-dark-600 flex items-center justify-center text-white hover:bg-primary-500 hover:border-primary-500 transition-all"
                title="View Code"
              >
                <GitHubIcon className="text-lg" />
              </button>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {desc.length > 150 ? `${desc.substring(0, 150)}...` : desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-700">
            {tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-dark-700/50 text-dark-200 border border-dark-600"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
