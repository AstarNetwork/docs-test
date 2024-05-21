import SearchBar from "@theme/SearchBar";
import "./styles.scss";
import { useState } from "react";
import { DocSearch } from "@docsearch/react";

const labels = ["zkEVM", "dApp Staking", "dApp Staking"];

function SearchLabel(label: string) {
  return <div className="search-label">#{label}</div>;
}

function SearchLabelList() {
  return (
    <div className="label-list">
      <p className="no-margin">Popular searches:</p>
      <div className="labels">{labels.map((label) => SearchLabel(label))}</div>
    </div>
  );
}

function InputBox() {
  const [query, setQuery] = useState("");
  return (
    <div className="button-input">
      <DocSearch
        appId=""
        apiKey=""
        indexName=""
        initialQuery={query}
        
      />
    </div>
  );
}

export default function SearchBox() {
  return (
    <div className="search-box">
      <InputBox />
      <SearchLabelList />
    </div>
  );
}
