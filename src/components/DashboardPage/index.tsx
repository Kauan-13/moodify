/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import styles from "./styles.module.css"
import useCSAT from "../../hooks/CSATHook"

const DashboardPage = () => {

  const { processed, getAllRatings, loading, error } = useCSAT()

  useEffect(() => { getAllRatings() }, [])

  if (loading) return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Avaliação CSAT do Moodify</h1>
            <p className={styles.emptyState}>Carregando...</p>
        </div>
    </div>
  )
  if (error) return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Avaliação CSAT do Moodify</h1>
            <p className={styles.emptyState}>Ocorreu um erro</p>
        </div>
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Avaliação CSAT do Moodify</h1>

        {processed.length === 0 && <div className={styles.emptyState}>Não há avaliações disponíveis ainda</div>}

        <div className={styles.grid}>
          {processed.map((rating) => (
            <div key={rating.function_id} className={styles.card}>
              <h2 className={styles.cardTitle}>{rating.function_name}</h2>
              <div className={styles.cardContent}>
                <p className={styles.functionId}>#{rating.function_id}</p>
                <p className={styles.percentage}>{rating.percentage_above_four.toFixed(2)}%</p>
                <p className={styles.label}>Avaliações acima de 4</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage