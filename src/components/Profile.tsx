import { useContext } from 'react';
import { ChallengesContext } from './contexts/ChallengesContext'
import styles from'../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/67236066?s=400&u=409b70a21d42858c5713323c37a7668830d7c585&v=4" alt="Luiz Guilherme"/>
      <div>
        <strong>Luiz Guilherme</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
          </p>
      </div>
    </div>
  )
}