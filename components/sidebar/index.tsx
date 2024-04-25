import { sidba1, sidebar2, sidebar3, sidebar4 } from "../icons";
import styles from "./index.module.css";
export function Sidebar() {
  return (
    <section className={styles.section}>
      {sidba1}
      {sidebar2}
      {sidebar3}
      {sidebar4}
    </section>
  );
}
