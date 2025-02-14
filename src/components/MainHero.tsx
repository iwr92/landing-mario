import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
          <span className="block xl:inline text-[#484848]">
            {mainHero.title}
          </span>{' '}
          <span className="block text-[#4a759f] xl:inline">
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-[#2C3E50] hover:bg-[#4a759f] transition-colors duration-300 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
