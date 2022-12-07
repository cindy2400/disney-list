import styles from "../../styles/Card.module.scss";

export const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
