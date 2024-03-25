import * as React from 'react'
import styles from './tooltip.module.css'

export function Tooltip(props: React.ComponentProps<'span'>) {
    return (
      <>
        <span className={styles['tooltip']}>{props.children}</span>
      </>
    )
  }
