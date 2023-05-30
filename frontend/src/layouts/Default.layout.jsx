import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import styles from "./Default.module.css";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </>
  );
}

