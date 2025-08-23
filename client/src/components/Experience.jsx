import styles from '../styles/App.module.css';

export default function Experience() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.experienceContainer}>
        <ExperienceItem
          title="Open Source Contributor"
          company="Various"
          date="2018 - Present"
          description="Contributed to multiple open source projects, focusing on improving documentation and fixing bugs."
        />
        <ExperienceItem
          title="Open Source Contributor"
          company="Various"
          date="2018 - Present"
          description="Contributed to multiple open source projects, focusing on improving documentation and fixing bugs."
        />
        <ExperienceItem
          title="Open Source Contributor"
          company="Various"
          date="2018 - Present"
          description="Contributed to multiple open source projects, focusing on improving documentation and fixing bugs."
        />
      </div>
    </section>
  );
}


export function ExperienceItem({ title, company, date, description }) {
    return (
        <div className={styles.experienceItem}>
            <h3 className={styles.experienceTitle}>{title}</h3>
            <p className={styles.experienceCompany}>{company}</p>
            <p className={styles.experienceDate}>{date}</p>
            <p className={styles.experienceDescription}>{description}</p>
        </div>
    );
}