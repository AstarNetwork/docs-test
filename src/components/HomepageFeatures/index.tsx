import React, { useEffect, useState } from "react";
import "../../css/homepage-features.scss";
import "./styles.scss";
import { AboutAstarGrid, AboutAstarLinks } from "./tabs/AboutAstar";
import { useMedia } from "react-use";
import { BuildersGrid, BuildersOnboard } from "./tabs/Builders";
import { DappStakingGrid, DappStakingOnboard } from "./tabs/DappStaking";
import { UserGrid, UserOnboard } from "./tabs/UserGuides";
import { useColorMode } from "@docusaurus/theme-common";

export type FeatureItem = {
  title: JSX.Element;
  link: string;
  iconClass: string;
  description: JSX.Element;
};

type TabButtonMeta = {
  title: string;
  iconWhite: string;
  iconColored: string;
  isActive: boolean;
  setPage: () => void;
};

const pages = ["aboutAstar", "builders", "dappStaking", "usersGuides"] as const;
type Page = (typeof pages)[number];

function TabButton({
  title,
  iconWhite,
  iconColored,
  isActive,
  setPage,
}: TabButtonMeta) {
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <button
      className={
        isActive
          ? "tab-button-base tab-button-active"
          : "tab-button-base tab-button-inactive"
      }
      onClick={setPage}
    >
      <img src={isActive || isDark ? iconWhite : iconColored} />
      {title}
    </button>
  );
}

// function pulldownActiveContents({
//   page,
//   isOpen,
// }: {
//   page: Page;
//   isOpen: boolean;
// }) {
//   const [title, setTitle] = useState<string>("");
//   const [icon, setIcon] = useState<JSX.Element>(<></>);
//   switch (page) {
//     case "aboutAstar":
//       setTitle("About Astar");
//       setIcon(<img />);
//     case "builders":
//       setTitle("Builders");
//       setIcon(<img />);
//     case "dappStaking":
//       setTitle("dApp Staking");
//       setIcon(<img />);
//     case "usersGuides":
//       setTitle("Users Guides");
//       setIcon(<img />);
//   }
//   return (
//     <>
//       {icon}
//       <>{title}</>
//       <img src={isOpen ? "" : ""} />
//     </>
//   );
// }

export default function HomepageFeatures(): JSX.Element {
  const [page, setPage] = useState<Page>("aboutAstar");
  const [tabOpen, setTabOpen] = useState<boolean>(false);
  const isMobile = useMedia("(max-width: 730px)");
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  useEffect(() => {
    setTabOpen(false);
  }, [isMobile]);
  useEffect(() => {}, [page]);
  const buttonMetaData: TabButtonMeta[] = [
    {
      title: "About Astar",
      iconWhite: "/img/astar-logo-white.svg",
      iconColored: "/img/astar-logo.svg",
      isActive: page === "aboutAstar",
      setPage: () => setPage("aboutAstar"),
    },
    {
      title: "Builders",
      iconWhite: "/img/tabbutton/commandline-white.svg",
      iconColored: "/img/tabbutton/commandline-black.svg",
      isActive: page === "builders",
      setPage: () => setPage("builders"),
    },
    {
      title: "dApp Staking",
      iconWhite: "/img/tabbutton/inbox-white.svg",
      iconColored: "/img/tabbutton/inbox-black.svg",
      isActive: page === "dappStaking",
      setPage: () => setPage("dappStaking"),
    },
    {
      title: "User Guides",
      iconWhite: "/img/tabbutton/book-white.svg",
      iconColored: "/img/tabbutton/book-black.svg",
      isActive: page === "usersGuides",
      setPage: () => setPage("usersGuides"),
    },
  ];
  return (
    <section className="section--front-page">
      {!isMobile && (
        <div className="tab-button-list">
          {buttonMetaData.map((meta) => {
            return <TabButton {...meta} />;
          })}
        </div>
      )}
      {isMobile && (
        <div
          className="tab-button-pulldown"
          onClick={() => {
            setTabOpen(!tabOpen);
          }}
        >
          {buttonMetaData
            .filter((meta) => meta.isActive === true)
            .map((meta) => {
              return (
                <button className="tab-button-base mobile-active-button">
                  <img src={isDark ? meta.iconWhite : meta.iconColored} />
                  {meta.title}
                  <img src="/img/tabbutton/arrow-down.svg" />
                </button>
              );
            })}
          {tabOpen && (
            <div className="pulldown-button-wrapper">
              {buttonMetaData
                .filter((meta) => meta.isActive === false)
                .map((meta) => {
                  return <TabButton {...meta} />;
                })}
            </div>
          )}
        </div>
      )}
      {page === "aboutAstar" && (
        <div className="container--front-page">
          <AboutAstarGrid />
          <AboutAstarLinks />
        </div>
      )}
      {page === "builders" && (
        <div className="container--front-page">
          <BuildersGrid />
          <BuildersOnboard />
        </div>
      )}
      {page === "dappStaking" && (
        <div className="container--front-page">
          <DappStakingGrid />
          <DappStakingOnboard />
        </div>
      )}
      {page === "usersGuides" && (
        <div className="container--front-page">
          <UserGrid />
          <UserOnboard />
        </div>
      )}
    </section>
  );
}
