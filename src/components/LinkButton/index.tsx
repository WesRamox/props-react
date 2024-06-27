import { LinkButtonProps } from "./interfaces"
import styles from "./styles.module.css"

export default function LinkButton(props: LinkButtonProps) {
  return (
    <a className={styles.wrapper} href={props.href} target="_blank">{props.children}</a>
  )
}