import styles from "../../styles/Search.module.scss";

export const Search = ({ getSearchText }) => {
  return (
    <div className={styles.search}>
      <label htmlFor="searchInput">Search</label>
      <input
        id="searchInput"
        type="text"
        className={styles}
        onChange={(e) => getSearchText(e.target.value)}
      ></input>
    </div>
  );
};
