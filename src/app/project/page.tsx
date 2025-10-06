// import React from "react";
// import {useState,useRef } from "react";
// import { Button} from "@/component/ui/button";

//  const Project =()=>{

//     const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const toggleVideo = () => {
//     if (!videoRef.current) return;

//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };


//     return(
//     <div className="bg-[#fffefa] w-full min-h-screen  relative">
    
//             {/* hero video */}

//             <section>
//             <video
//             ref={videoRef}
//             className="w-full h-full object-cover"
//             src="/Images/project-video.mp4"
//             autoPlay
//             muted
//             loop
//           />

//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <Button
//               className="w-[159px] h-[159px] bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition"
//               onClick={toggleVideo}
//             >
//               {isPlaying ? "⏸️" : "▶️"}
//             </Button>
//           </div>
//             </section>
//         </div>
//     )
// }

// export default Project

"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/component/ui/button";

const Project = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#fffefa] w-full min-h-screen relative">
      {/* hero video */}
      <section className="relative">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/Images/project-video.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button
            className="w-[159px] h-[159px] bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition"
            onClick={toggleVideo}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Project;
