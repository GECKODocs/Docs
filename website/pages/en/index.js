/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_maintenance.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('gs1.html')}>Get started</Button>
            <Button href={docUrl('db1.html')}>Dashboard</Button>
            <Button href={docUrl('api2.html')}>API</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Developer Support</h2>
        <MarkdownBlock>Full support available please feel free to reach out</MarkdownBlock>
        <image src={`${baseUrl}img/undraw_developer.svg`}></image>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your onbarding experience great we are using best  UX  practises to have you up and ' +
              'runing on [**GECKO**](https://geckogovernance.io/) application, we also provide full support' +
              ' of other business elements like compliance, regulation and consultation.',
            image: `${baseUrl}img/undraw_onboarding.svg`,
            imageAlign: 'left',
            title: 'Full Onboarding Support',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'There is also blogs to keep you updated with our development roadmap and in progress features',
            image: `${baseUrl}img/undraw_blog.svg`,
            imageAlign: 'right',
            title: 'Blogs',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:'Constantly updated with every new released features or bugs ;)',
            image: `${baseUrl}img/undraw_files.svg`,
            imageAlign: 'right',
            title: 'Up to Date ',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="twoColumn">
        {[
          {
            content: 'Read our Documentation and check out our blogs to keep yourself updated and informed about upcoming changes',
            image: `${baseUrl}img/undraw_setup.svg`,
            imageAlign: 'top',
            title: 'Setup Docs',
          },
          {
            content: 'Video walk-through guides are available for onboarding users',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'top',
            title: 'Videos',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Anything we can help you with?</h2>
          <p>Just ask and we will come back regardless of where you are</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            {/*<a className="button" href={pageUrl('users.html')}>
               More {siteConfig.title} Users
               </a>*/}
            <a href="https://www.geckogovernance.io/contact/">support@geckogovernance.io </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
