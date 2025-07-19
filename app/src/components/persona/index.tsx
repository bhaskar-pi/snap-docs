import React from "react";
import styles from './persona.module.css';

interface Props {
  firstName: string;
  lastName: string;
  avatar?: string;
  role?: string;
}

const Persona: React.FC<Props> = ({ firstName, lastName, avatar, role = 'Admin' }) => {
  const initials = `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase();

  return (
    <div className={styles.container}>
      {avatar ? (
        <img src={avatar} alt="Avatar" className={styles.avatar} />
      ) : (
        <div className={styles.initials}>{initials}</div>
      )}
      <div className={styles.info}>
        <p className={styles.name}>{`${firstName} ${lastName}`}</p>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
};

export default Persona;
