import React from "react";
import useCountDown from "../Hooks/useCountDown";
import styles from "./CountDown.module.css";

const CountDown = ({ futureDate, title }) => {
  const timeLeft = useCountDown(futureDate);

  const days = timeLeft.days ?? 0;
  const hours = timeLeft.hours ?? 0;
  const minutes = timeLeft.minutes ?? 0;
  const seconds = timeLeft.seconds ?? 0;

  if (timeLeft.isFinished) {
    return (
      <div className={styles.finished}>
        <h1>A COPA COMEÇOU ⚽</h1>
      </div>
    );
  }

  const formatValue = (value) => String(value).padStart(2, "0");

  const countDownItems = [
    { label: "Dias", value: formatValue(days) },
    { label: "Horas", value: formatValue(hours) },
    { label: "Minutos", value: formatValue(minutes) },
    { label: "Segundos", value: formatValue(seconds) },
  ];

  if (timeLeft)
    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.containerItems}>
            {countDownItems.map(({ label, value }) => (
              <div key={label} className={styles.item}>
                <span className={styles.label}>{label}</span>
                <span className={styles.time}>{value}</span>
              </div>
            ))}
          </div>
          <p className={`${styles.infos} `}>
            Início será dia 11 de Junho de 2026 (Estados Unidos, Canadá, México)
          </p>
        </div>
      </>
    );
};

export default CountDown;
