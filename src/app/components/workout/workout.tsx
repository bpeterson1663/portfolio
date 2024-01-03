import { PropsWithChildren } from 'react'
import styles from './workout.module.scss'

interface TableProps extends PropsWithChildren {
  sets: number
}

export const Table = ({ children, sets }: TableProps) => {
  const SETS = Array.from({ length: sets }, (_, index) => index + 1)
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th colSpan={2}>Exercise</th>
          {SETS.map((set) => (
            <th key={set}>Set {set}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

interface RowProps {
  name: string
  weight: string
  rep: string
  sets: number
  notes?: string
}

export const Row = ({ name, weight, rep, sets, notes }: RowProps) => {
  const SETS = Array.from({ length: sets }, (_, index) => index + 1)
  return (
    <>
      <tr>
        <td rowSpan={2}>
          {name} <br />
          <span className={styles.notes}>{notes && `*${notes}`}</span>
        </td>
        <td>Weight</td>
        {SETS.map((set) => (
          <td key={set}>{weight}</td>
        ))}
      </tr>
      <tr>
        <td>Rep</td>
        {SETS.map((set) => (
          <td key={set}>{rep}</td>
        ))}
      </tr>
    </>
  )
}
