import Styles from "../../styles/Title.module.scss";

export const Title = () => {
  return (
    <div className={Styles.title}>
      <div className={Styles["flex-title"]}>
        <h1 className={Styles.red}>Disney </h1>
        <h1>List</h1>
      </div>
      <h3>Look for some Disney Characters</h3>
    </div>
  );
};
