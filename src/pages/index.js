import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const main = [ {
  title: <>Full Onboarding Support</>,
  imageUrl: 'img/onboarding.svg',
  description: (
    <>
       To make your onbarding experience great we are using best  UX  practises to have you up and 
       runing on <a target="_blank" href="https://www.geckogovernance.io/"><b> GECKO </b></a>application, we also provide full 
       support of other business elements like compliance, regulation and consultation.
    </>
  ),
},]

const features = [
 
  {
    title: <>Up to Date</>,
    imageUrl: 'img/docsUpdated.svg',
    description: (
      <>
        Constantly updated with every new released features or bugs ;)
      </>
    ),
  },
  {
    title: <>Help is just click away</>,
    imageUrl: 'img/devSupport.svg',
    description: (
      <>
        Full support provided shall you feel lost or need any extra video
        tutorials. Further open APIs are currently in progress.
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
