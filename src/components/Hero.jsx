import React from "react";
import { logo } from "../assets";
export const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex w-full mb-10 pt-3 justify-between items-center">
        <img src={logo} alt="Logo" className="w-28 object-contain" />
        <button
          className="black_btn "
          type="button"
          onClick={() => window.open("https://github.com/vivekdogra02")}
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};
