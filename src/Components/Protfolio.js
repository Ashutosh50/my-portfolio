import React from "react";
import spotify from "../Assets/Portfolio/Spotify-clone.jpg";
import todo from "../Assets/Portfolio/Todo.png";
import ecomm from "../Assets/Portfolio/Ecomm.png";
import news from "../Assets/Portfolio/News.jpg";
import Restaurant from "../Assets/Portfolio/Restaurant.avif";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: spotify,
      github: "https://github.com/Ashutosh50/spotify-app",
      demo: "https://spotify-clone-app-for-project.netlify.app",
    },
    {
      id: 2,
      src: todo,
      github: "https://github.com/Ashutosh50/Todo",
      demo: "https://ashu-todo.netlify.app/",
    },
    {
      id: 3,
      src: ecomm,
      github: "https://github.com/Ashutosh50/E-Commerse-Landing-Page",
      demo: "https://e-comm-landing-page.netlify.app",
    },
    {
      id: 4,
      src: news,
      github: "https://github.com/Ashutosh50/News-site-With-pagination",
      demo: "spotify-clone-app-for-project.netlify.app",
    },
    {
      id: 5,
      src: Restaurant,
      github: "https://github.com/Ashutosh50/News-site-With-pagination",
      demo: "https://ashu-restaurant.netlify.app/",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, github, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={github}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
