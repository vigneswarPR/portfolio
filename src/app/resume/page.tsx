import React from "react";

const ResumePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>
      <div className="w-full h-[80vh] mb-6 border rounded-lg overflow-hidden shadow-lg bg-background dark:bg-foreground/10">
        <iframe
          src="/Resume-Vigneswar-P-R.pdf"
          title="Resume PDF"
          className="w-full h-full"
        />
      </div>
      <a
        href="/Resume-Vigneswar-P-R.pdf"
        download
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors"
      >
        Download PDF
      </a>
    </div>
  );
};

export default ResumePage; 