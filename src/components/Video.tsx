"use client";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";

const Video = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
 
  return (
    <YouTubeEmbed
      videoid="dQw4w9WgXcQ"
      width={isMobile ? 298 : 560}
      height={isMobile ? 200 : 315}
    />
  );
};

export default Video;
