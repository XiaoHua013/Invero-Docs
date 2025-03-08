import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">
                <Translate>Versatile and flexible GUI creation plugin</Translate>
            </p>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/about">
                    <Translate>Quick Start 🥵</Translate>
                </Link>
            </div>
        </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
        title={translate({
            id: 'site.title',
            message: 'Home',
        })}
        description="Minecraft GUI Plugin">
        <HomepageHeader/>
        <main>
            <HomepageFeatures/>
        </main>
    </Layout>
  );
}
