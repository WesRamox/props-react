import { ProfileSectionProps } from "./interfaces/ProfileSectionProps"
import styles from "./styles.module.css"

export default function ProfileSection(props: ProfileSectionProps) {
  return <div className={styles.wrapper}>{props.children}</div>
}