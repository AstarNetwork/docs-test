import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import React, { useState } from "react";
import "../../css/homepage-features.scss";
import "./styles.scss";

type FeatureItem = {
  title: JSX.Element;
  link: string;
  iconClass: string;
  description: JSX.Element;
};

type TabButtonMeta = {
  title: string;
  icon: string;
  isActive: boolean;
  setPage: () => void;
};

const pages = ["aboutAstar", "builders", "dappStaking", "usersGuides"] as const;
type Page = (typeof pages)[number];

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

function TabButton({ title, icon, isActive, setPage }: TabButtonMeta) {
  return (
    <button
      className={
        isActive
          ? "tab-button-base tab-button-active"
          : "tab-button-base tab-button-inactive"
      }
      onClick={setPage}
    >
      {title}
    </button>
  );
}

function Feature({ title, iconClass, description, link }: FeatureItem) {
  return (
    <Link to={link} className="box">
      <div className="row--title">
        {/* <div className={`${iconClass} icon`} /> */}
        <span className="text--title">{title}</span>
      </div>
      <div className="row--description">
        <span className="text--description">{description}</span>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const [page, setPage] = useState<Page>("aboutAstar");
  const buttonMetaData: TabButtonMeta[] = [
    {
      title: "About Astar",
      icon: "",
      isActive: page === "aboutAstar",
      setPage: () => setPage("aboutAstar"),
    },
    {
      title: "Builders",
      icon: "",
      isActive: page === "builders",
      setPage: () => setPage("builders"),
    },
    {
      title: "dApp Staking",
      icon: "",
      isActive: page === "dappStaking",
      setPage: () => setPage("dappStaking"),
    },
    {
      title: "User Guides",
      icon: "",
      isActive: page === "usersGuides",
      setPage: () => setPage("usersGuides"),
    },
  ];
  return (
    <section className="section--front-page">
      <div className="tab-button-list">
        {buttonMetaData.map((meta) => {
          return <TabButton {...meta} />;
        })}
      </div>
      <div className="container--front-page">
        {page === "aboutAstar" && <>About astar</>}
        {page === "builders" && <>builders</>}
        {page === "dappStaking" && <>dappstaking</>}
        {page === "usersGuides" && <>usersGuides</>}
      </div>
    </section>
  );
}
