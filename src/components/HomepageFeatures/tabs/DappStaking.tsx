import Translate from "@docusaurus/Translate";
import { Feature } from "../Feature";
import { FeatureItem } from "..";
import "./tab-styles.scss";

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>What is dApp Staking</Translate>,
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
    title: <Translate>Technical Overview</Translate>,
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
    title: <Translate>Parameters</Translate>,
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
    title: <Translate>For Users</Translate>,
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
    title: <Translate>For Developers</Translate>,
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
    title: <Translate>Building with dApp Staking</Translate>,
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

export function DappStakingGrid() {
  return (
    <div className="feature-grid">
      {FeatureList.map((meta) => {
        return <Feature {...meta} />;
      })}
    </div>
  );
}

export function DappStakingOnboard() {
  return (
    <div className="feature-links">
      <div className="links-description">
        <div className="tab-title">
          <Translate>dApp Staking</Translate>
        </div>
        <div className="tab-text">
          <Translate>
            Incentivized program connecting devs to Astar community
          </Translate>
        </div>
      </div>
      <button className="website-button">
        <a href="https://astar.network/" className="button-text">
          Build & Earn
        </a>
      </button>
    </div>
  );
}
