
import styles from "../../App.module.css"

export const Banner = ({ name, description, image }: { name: string, description: string, image: string }) => {
  return(
    <div className={styles.container}>
      <img src={image} className={styles.banner} />
      <div className={styles.box}>
        <h1 style={{margin: 0}}>{name}</h1>
        <p>
          {description}
          
        </p>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </div>
  )
}