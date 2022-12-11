import Styles from "../../styles/Search.module.scss";

export const Search = ({ getSearchText }) => {
  return (
    <div className={Styles.search}>
      <label htmlFor="searchInput">Search</label>
      <input
        id="searchInput"
        type="text"
        onChange={(e) => getSearchText(e.target.value)}
      ></input>
    </div>
  );
};
