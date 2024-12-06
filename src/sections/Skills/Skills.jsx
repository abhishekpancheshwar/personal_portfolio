import styles from './SkillsStyles.module.css';
// import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
const checkMarkIconDark = checkMarkIconLight; // For testing only
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  console.log('Current theme:', theme);
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <div>Skill Placeholder</div>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Node JS" />
        <SkillList src={checkMarkIcon} skill="Express JS" />
        <SkillList src={checkMarkIcon} skill="Mongo DB" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Saas" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Github" />
      </div>
      <hr />
      <h2>Academic Skills</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Operating System" />
        <SkillList src={checkMarkIcon} skill="Database Management System" />
        <SkillList src={checkMarkIcon} skill="Computer Network" />
        <SkillList src={checkMarkIcon} skill="Artificial Intelligence" />
      </div>
      <hr />
      
      <h2>Other Skills</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Communication Skills" />
        <SkillList src={checkMarkIcon} skill="Problem Solving" />
        <SkillList src={checkMarkIcon} skill="Time Management" />
        <SkillList src={checkMarkIcon} skill="Leadership" />
      </div>

    </section>
  );
}

export default Skills;
