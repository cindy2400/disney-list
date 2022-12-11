import Styles from "../../styles/Card.module.scss";

export const Card = ({ children, classname }) => {
  return <div className={Styles.card + " " + classname}>{children}</div>;
};
