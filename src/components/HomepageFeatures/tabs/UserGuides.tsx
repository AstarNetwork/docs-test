import Translate from "@docusaurus/Translate";
import { Feature } from "../Feature";
import { FeatureItem } from "..";
import "./tab-styles.scss";

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Astar Wallet</Translate>,
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
    title: <Translate>Transfers assets</Translate>,
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
    title: <Translate>Transfers assets</Translate>,
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
    title: <Translate>dApp Staking</Translate>,
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
    title: <Translate>Troubleshooting</Translate>,
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
];

export function UserGrid() {
  return (
    <div className="feature-grid">
      {FeatureList.map((meta) => {
        return <Feature {...meta} />;
      })}
    </div>
  );
}

export function UserOnboard() {
  return (
    <div className="feature-links">
      <div className="links-description">
        <div className="tab-title">
          <Translate>Astar Portal</Translate>
        </div>
        <div className="tab-text">
          <Translate>Multi-chain platform hub for asset management</Translate>
        </div>
      </div>
      <button className="website-button">
        <a href="https://astar.network/" className="button-text">
          Try it out!
        </a>
      </button>
    </div>
  );
}
