import React from "react";

import klosePhoto from "../../Assets/klose.png";
import ronaldoPhoto from "../../Assets/ronaldo.png";
import mullerPhoto from "../../Assets/muller.png";

import styles from "./Goals.module.css";

const GOALS_STATS = [
  {
    name: "M Klose",
    goals: 16,
    photo: klosePhoto,
  },
  {
    name: "R Nazario",
    goals: 15,
    photo: ronaldoPhoto,
  },
  {
    name: "G Müller",
    goals: 14,
    photo: mullerPhoto,
  },
];

const Goals = () => {
  return (
    <div className={styles.statsBox}>
      <h1 className={styles.title}>Artilharia</h1>
      <div>
        {GOALS_STATS.map(({ name, goals, photo }) => (
          <div className={styles.item} key={name}>
            <img src={photo} alt={name} />
            <h1 className={styles.namePlayer}>{name}</h1>
            <span className={styles.goalsPlayer}>{goals} Gols</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
