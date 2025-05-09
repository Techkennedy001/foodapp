import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Powered by <strong>Anonymous Tech</strong>
        </p>
      </footer>
    </div>
  );
}
