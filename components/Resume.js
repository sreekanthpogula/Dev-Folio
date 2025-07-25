import React from "react";
import userData from "@constants/data";

export default function Resume() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
          Sreekanth Pogula Resume
        </h1>
      </div>

      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto py-20 pb-40">
          <div className="relative w-full" style={{ paddingTop: "125%" }}>
            <iframe
              src={userData.resumeUrl}
              className="absolute top-0 left-0 w-full h-full border-2 rounded-lg"
              allow="autoplay"
              title="Resume Preview"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <a
              href={userData.resumeUrl.replace("/preview", "/view")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Open in Google Drive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
