import Translate from "@docusaurus/Translate";
import { Feature } from "../Feature";
import { FeatureItem } from "..";
import "./tab-styles.scss";

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Learn About Astar Network</Translate>,
    link: "/docs/learn",
    iconClass: "docs",
    description: (
      <>
        <Translate>
          Explains our foundations and provides comprehensive insights into the
          inner workings of Astar network.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Build</Translate>,
    link: "/docs/build/",
    iconClass: "wrench",
    description: (
      <>
        <Translate>
          Find all the resources you need to start testing, deploying, and
          interacting with smart contracts on Astar networks.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Build on Astar zkEVM</Translate>,
    link: "/docs/build/zkEVM",
    iconClass: "evm",
    description: (
      <>
        <Translate>
          Jump right into building on Astar zkEVM the Layer 2 scaling solution
          for Ethereum, powered by Polygon CDK.
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
          Earn tokens for yourself and your dApp by staking tokens and
          registering your dApp with Astar’s dApp Staking.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Run A Node</Translate>,
    link: "/docs/build/nodes/",
    iconClass: "node",
    description: (
      <>
        <Translate>
          Explain how to run full nodes, collators, indexers, and everything you
          need to know related to infrastructure.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Learn Cross-Chain Message (XCM)</Translate>,
    link: "/docs/learn/interoperability/xcm/",
    iconClass: "broadcast",
    description: (
      <>
        <Translate>
          Explains how XCM is used in Astar and how developers can use it to
          interact with the rest of the Polkadot network.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Integrate Toolings</Translate>,
    link: "/docs/build/integrations/",
    iconClass: "tool",
    description: (
      <>
        <Translate>
          Contains relevant information about the wallets, bridges, indexers,
          and oracles that are integrated with the network.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>User Guides</Translate>,
    link: "/docs/use/",
    iconClass: "docs",
    description: (
      <>
        <Translate>
          Learn how to create different types of wallets, obtain tokens, and
          manage your assets.
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
