import { useEffect, useState } from "react";
import styles from "../styles/FilmePage.module.css";

const FilmePage = () => {
  const [filmes, setFilmes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const response = await fetch("http://localhost:5005/api/filme");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFilmes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFilmes();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!filmes.length) return <p>Loading...</p>;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {filmes.map((filme) => (
          <div
            key={filme._id}
            className={styles.card}
            style={{ backgroundImage: `url(${filme.image})` }}
          >
            <a href={filme.link} target="_blank" rel="noopener noreferrer">
              <div className={styles.info}>
                <h2>{filme.englishTitle}</h2>
                <h3>{filme.originalTitle}</h3>
                <p>Language: {filme.language}</p>
                <p>Genre: {filme.genre}</p>
                <p>Year: {filme.yearOfRelease}</p> {/* Updated field */}
                <p>{filme.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmePage;
