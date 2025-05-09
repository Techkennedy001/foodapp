import styles from "./nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <img
        src="/images/bagger.jpeg"
        alt="emoji"
        style={{
          width: "2em",
          height: "2em",
          verticalAlign: "middle",
          display: "inline-block",
        }}
      />
      Food App
    </div>
  );
}
