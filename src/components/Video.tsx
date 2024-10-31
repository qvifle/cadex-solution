"use client";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import React, { Suspense } from "react";

const Fallback = () => {
  return (
    <div className="bg-zinc-400 text-white w-[560px] h-[315px]">Loading...</div>
  );
};

const Video = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Suspense fallback={<Fallback />}>
      <iframe
        width={isMobile ? "298" : "560"}
        height={isMobile ? "200" : "315"}
        loading="lazy"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=VA0tZ7iqOalGDEFk"
        title="Rick Astley - Never Gonna Give You Up"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </Suspense>
  );
};

export default Video;
