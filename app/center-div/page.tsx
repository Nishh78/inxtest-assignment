import { Metadata } from 'next'
import styles from './style.module.css'

export const metadata: Metadata = {
  title: 'Center the Div',
  description: 'Centring the div using css',
}

export default function CenterDiv() {
  return (
    <div className={styles['container']}>
      <h1 className={styles['item']}>Center This</h1>
    </div>
  )
}
