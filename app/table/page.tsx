import { Metadata } from 'next'
import styles from './style.module.css'

export const metadata: Metadata = {
    title: 'Table',
    description: 'Creating Table layout',
}

const tableItemList: number[] = Array.from({ length: 12 }, (_, index) => index + 1);

export default function Table() {
    return (
        <div className={styles['page']}>
            <div>
                <div className={styles['table-grid']}>
                    {tableItemList.map((item, i) => (
                        <div key={i} className={styles['table-grid__cell']}>
                            <Tooltip>Tooltip {i+1}</Tooltip>
                            Item {i+1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Tooltip(props: React.ComponentProps<'span'>) {
    return (
        <>
            <span className={styles['tooltip']}>{props.children}</span>
        </>
    )
}
