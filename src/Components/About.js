
import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Good day! Ashutosh Sahu here. I'm an enthusiastic and committed web developer looking to make a difference in the online community.
        I'm eager to use this portfolio, as a newcomer to the profession of web development, to demonstrate my abilities, originality, and excitement.
        I developed a solid foundation in web programming throughout my studies for B.Tech. in Computer Science Engineering, focusing on the front-end, 
        and I have a working knowledge of the backend. I've studied Java, SQl, HTML, CSS, and JavaScript in depth and developed practical skills with framework tools like React JS.
        </p>

        <br />

        <p className="text-xl">
        I have finished a variety of web development projects, including interactive web applications, responsive layouts, and personal websites.
         In addition to honing my technical abilities, these projects have given me invaluable experience in problem-solving, user experience design, and teamwork.
         
        </p>
      </div>
    </div>
  );
};

export default About; 