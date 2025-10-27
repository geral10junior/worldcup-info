import React from "react";

import maradonaPhoto from "../../Assets/maradona.png";
import messiPhoto from "../../Assets/messi.png";
import littbarskiPhoto from "../../Assets/littbarski.png";

import styles from "./Assists.module.css";

const ASSISTS_STATS = [
  {
    name: "D Maradona",
    assists: 8,
    photo: maradonaPhoto,
  },
  {
    name: "L Messi",
    assists: 8,
    photo: messiPhoto,
  },
  {
    name: "P Littbarski",
    assists: 7,
    photo: littbarskiPhoto,
  },
];

const Assists = () => {
  return (
    <div className={styles.statsBox}>
      <h1 className={styles.title}>Assistentes</h1>
      <div>
        {ASSISTS_STATS.map(({ name, assists, photo }) => (
          <div className={styles.item} key={name}>
            <img src={photo} alt={name} />
            <h1 className={styles.namePlayer}>{name}</h1>
            <span className={styles.assistsPlayer}>{assists} Assists</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assists;
