import styles from "../../styles/Card.module.scss";

export const Card = ({ children, classname }) => {
  return <div className={styles.card + " " + classname}>{children}</div>;
};
