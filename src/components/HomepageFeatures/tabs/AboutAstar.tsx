import Translate from "@docusaurus/Translate";
import { Feature } from "../Feature";
import { FeatureItem } from "..";
import "./tab-styles.scss";

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>About Astar Network</Translate>,
    link: "/docs/learn",
    iconClass: "docs",
    description: (
      <>
        <Translate>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Astar Token</Translate>,
    link: "/docs/build/",
    iconClass: "wrench",
    description: (
      <>
        <Translate>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Architecture</Translate>,
    link: "/docs/build/zkEVM",
    iconClass: "evm",
    description: (
      <>
        <Translate>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Tokenomics 2.0</Translate>,
    link: "/docs/learn/dapp-staking/",
    iconClass: "staking",
    description: (
      <>
        <Translate>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Networks</Translate>,
    link: "/docs/build/nodes/",
    iconClass: "node",
    description: (
      <>
        <Translate>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Astar zkEVM</Translate>,
    link: "/docs/learn/interoperability/xcm/",
    iconClass: "broadcast",
    description: (
      <>
        <Translate>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Translate>
      </>
    ),
  },
];

export function AboutAstarGrid() {
  return (
    <div className="feature-grid">
      {FeatureList.map((meta) => {
        return <Feature {...meta} />;
      })}
    </div>
  );
}

export function AboutAstarLinks() {
  return (
    <div className="feature-links">
      <div className="links-description">
        <div className="tab-title">
          <Translate>Connecting you to web3</Translate>
        </div>
        <div className="tab-text">
          <Translate>
            Creating opportunities for individuals to use web3 technology
          </Translate>
        </div>
      </div>
      <button className="website-button">
        <a href="https://astar.network/" className="button-text">
          Astar website
        </a>
      </button>
    </div>
  );
}
