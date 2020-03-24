import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const main = [ {
  title: <>Easy to Use</>,
  imageUrl: 'img/undraw_docusaurus_mountain.svg',
  description: (
    <>
      Docusaurus was designed from the ground up to be easily installed and
      used to get your website up and running quickly.
    </>
  ),
},]

const features = [
 
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const Main = ({imageUrl, title, description}) =>{
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--12', styles.main)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.main} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Welcome to the GECKO Documentation. You will find manual, APIs, docs and all support here">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
        <img alt="GECKO" class="gecko" src="img/geckoWhite.png"></img>
          {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
          <h1 className="hero__title">
          Fetch 
          <span className="hero_title_blue"> relevant </span>
          documentation
          <span className="hero_title_blue"> quickly</span>
          , stay
          <span className="hero_title_blue"> updated </span>
          and get
          <span className="hero_title_blue"> support</span>
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline primary button button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/gs1')}>
              get started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
                 {main.map((props,idx) =>(
                  <Main key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
