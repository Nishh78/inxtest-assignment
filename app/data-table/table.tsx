import { Metadata } from 'next'
import styles from './style.module.css'

export const metadata: Metadata = {
    title: 'Data table',
    description: 'Populating table with data',
}

export default function TableLayout() {

    return (
        <div className={styles['page']}>
            <div className={styles['container']}>
                <h1 className={styles['title']}>Belgium train stations</h1>
                <TableLayout />
            </div>
        </div>
    )
}
