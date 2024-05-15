import Link from "@docusaurus/Link";
import { FeatureItem } from ".";
import "../../css/homepage-features.scss";

export function Feature({ title, iconClass, description, link }: FeatureItem) {
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
