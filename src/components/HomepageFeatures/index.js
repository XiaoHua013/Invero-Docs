import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {translate} from '@docusaurus/Translate'

const FeatureList = [
    {
        trim: translate({
            id: 'features.1.tag',
            message: 'Simple & User-friendly',
        }),
        title: translate({
            id: 'features.1.title',
            message: 'Efficient',
        }),
        description: translate({
            id: 'features.1.description',
            message: "Invero greatly reducing complexity and redundancy in the configuration process. Ideal for users who want to achieve their goals quickly and effortlessly."
        }),
    },
    {
        trim: translate({
            id: 'features.2.tag',
            message: 'Versatile & Customizable',
        }),
        title: translate({
            id: 'features.2.title',
            message: 'Powerful',
        }),
        description: translate({
            id: 'features.2.description',
            message: "Invero is an incredibly powerful GUI plugin designed for a wide range of scenarios. It enables users to bring their ideas to life and create amazing plugin-level experiences."
        }),
    },
    {
        trim: translate({
            id: 'features.3.tag',
            message: 'API & Expandability',
        }),
        title: translate({
            id: 'features.3.title',
            message: 'Open-Source',
        }),
        description: translate({
            id: 'features.3.description',
            message: "Invero offers seamless compatibility with a broad range of popular plugins, providing developers with an API to expand even more  features. It's also an open-source project on GitHub."
        }),
    },
];

function Feature({Svg, title, trim, description}) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center">
        <h4 className='subColor'>「 {trim} 」</h4>
      </div>

      <div className="text--center padding-horiz--md">
        <h1 className='mainColor'>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
