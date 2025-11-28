import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";

export default function Layout({ children }) {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    
    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    const handleMouseDown = () => {
      if (cursor) {
        cursor.style.height = "30px";
        cursor.style.width = "30px";
      }
    };

    const handleMouseUp = () => {
      if (cursor) {
        cursor.style.height = "20px";
        cursor.style.width = "20px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    Aos.init({ 
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen gradient-bg bg-grid relative overflow-x-hidden">
      <div className="floating-shapes" />
      <div className="relative z-10">
        {children}
      </div>
      <div className="cursor hidden lg:block" />
    </div>
  );
}
