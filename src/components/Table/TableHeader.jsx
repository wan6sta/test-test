import styles from './table.module.css'
import Field from "../Field/ Field";

const header = ['Дата', 'Название', 'Количество', 'Расстояние']

const TableHeader = () => {
  return <div className={styles.tableHeader}>
    {header.map(el =>
      <Field>{el}</Field>
    )}
  </div>
}

export default TableHeader