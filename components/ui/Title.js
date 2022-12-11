import styles from "../../styles/Title.module.scss";

export const Title = () => {
  return (
    <div className={styles.title}>
      <div className={styles["flex-title"]}>
        <h1 className={styles.red}>Disney </h1>
        <h1>List</h1>
      </div>
      <h3>Look for some Disney Characters</h3>
    </div>
  );
};
