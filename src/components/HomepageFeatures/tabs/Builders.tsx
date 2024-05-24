import Translate from "@docusaurus/Translate";
import { Feature } from "../Feature";
import { FeatureItem } from "..";
import "./tab-styles.scss";

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Introduction</Translate>,
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
    title: <Translate>Nodes</Translate>,
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
    title: <Translate>Build Environment</Translate>,
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
    title: <Translate>Astar zkEVM</Translate>,
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
    title: <Translate>Integrations</Translate>,
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
    title: <Translate>WASM smart-contracts</Translate>,
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
  {
    title: <Translate>EVM smart-contracts</Translate>,
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

function BuildersArrow() {
  return <img src="/img/arrow-right.svg" />;
}

export function BuildersGrid() {
  return (
    <div className="feature-grid">
      {FeatureList.map((meta) => {
        return <Feature {...meta} />;
      })}
    </div>
  );
}

export function BuildersOnboard() {
  return (
    <div className="builders-links">
      <div className="builders-card">
        <div>
          <div className="tab-text">
            <Translate>Need tokens for testing?</Translate>
          </div>
          <div className="tab-title">
            <Translate>Faucet</Translate>
          </div>
        </div>
        <BuildersArrow />
      </div>
      <div className="builders-card">
        <div>
          <div className="tab-text">
            <Translate>Encountering issues?</Translate>
          </div>
          <div className="icon-and-title">
            <img src="/img/discord.svg" />
            <div className="tab-title">
              <Translate>Support</Translate>
            </div>
          </div>
        </div>
        <BuildersArrow />
      </div>
      <div className="builders-card">
        <div>
          <div className="tab-text">
            <Translate>Developer toolings</Translate>
          </div>
          <div className="tab-title">
            <Translate>Check our Ecosystem</Translate>
          </div>
        </div>
        <BuildersArrow />
      </div>
    </div>
  );
}
