import "./styles.scss";

const labels = ["zkEVM", "dApp Staking", "dApp Staking"];

function SearchLabel(label: string) {
  return <div className="search-label">#{label}</div>;
}

function SearchLabelList() {
  return (
    <div className="label-list">
      <p className="no-margin">Popular searches:</p>
      {labels.map((label) => SearchLabel(label))}
    </div>
  );
}

function InputBox() {
  return (
    <button
      type="button"
      className="DocSearch button-input"
      aria-label="Search"
    >
      <span className="DocSearch-Button-Container">
        <svg
          width="20"
          height="20"
          className="DocSearch-Search-Icon"
          viewBox="0 0 20 20"
        >
          <path
            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
            stroke="currentColor"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <span className="DocSearch-Button-Placeholder">Search...</span>
      </span>
    </button>
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
