import React from "react";

import brasilPhoto from "../../Assets/brasil.png";
import alemanhaPhoto from "../../Assets/alemanha.png";
import italiaPhoto from "../../Assets/italia.png";

import styles from "./Titles.module.css";

const TITLES_STATS = [
  {
    name: "Brasil",
    titles: 5,
    photo: brasilPhoto,
  },
  {
    name: "Alemanha",
    titles: 4,
    photo: alemanhaPhoto,
  },
  {
    name: "Itália",
    titles: 4,
    photo: italiaPhoto,
  },
];

const Titles = () => {
  return (
    <div className={styles.statsBox}>
      <h1 className={styles.title}>Títulos por Seleções</h1>
      <div>
        {TITLES_STATS.map(({ name, titles, photo }) => (
          <div className={styles.item} key={name}>
            <img src={photo} alt={name} />
            <h1 className={styles.nameTeam}>{name}</h1>
            <span className={styles.titlesTeam}>{titles} Títulos</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Titles;
