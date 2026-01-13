// src/components/LoadingScreen.jsx
import React from "react";
import styles from "./LoadingScreen.module.css";
import { Spinner } from "react-bootstrap";

export const LoadingScreen = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContent}>
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
        <p>Carregando o aplicativo...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
