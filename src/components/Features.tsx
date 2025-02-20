import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, img } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-4xl text-lg text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            alt="sobre_mi"
            src={img}
            style={{
              marginTop: 40,
            }}
            className="shadow-2xl rounded-2xl w-full lg:w-3/4 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
