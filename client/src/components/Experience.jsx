import styles from '../styles/App.module.css';

export default function Experience() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.experienceContainer}>
        <ExperienceItem
          title="Software Engineer Intern"
          company="Lucid Motors"
          date="June 2025 - Present"
          description=""
        />
        <ExperienceItem
          title="VP of Technology"
          company="UCSD CSE Society"
          date="June 2025 - Present"
          // description="Contributed to multiple open source projects, focusing on improving documentation and fixing bugs."
        />
        <ExperienceItem
          title="Software Engineer"
          company="UCSD CSE Society"
          date="June 2025 - Nov 2024"
          // description="Contributed to multiple open source projects, focusing on improving documentation and fixing bugs."
        />
        <ExperienceItem
          title="Software Engineer Intern"
          company="Brio"
          date="June 2024 - Sept 2024"
          // description="Contributed to multiple open source projects, focusing on improving documentation and fixing bugs."
        />
        <ExperienceItem
          title="Undergraduate Researcher @ SALAD Lab"
          company="UC San Diego CSE Dept. @ SALAD Lab"
          date="Sep 2023 - June 2024"
          // description="Contributed to multiple open source projects, focusing on improving documentation and fixing bugs."
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