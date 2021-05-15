import React from 'react'
import styles from './index.css'

export const TezIDProofs = (props) => {
  const proofs = props.proofs || []
  const selected = props.selected || proofs.map(p => p.id)

  const handleClick = (p) => {
    if (typeof props.onClick === 'function')
      props.onClick(p)
  }

  const proofComps = proofs.map(p => {
    let _selected = selected.indexOf(p.id) >= 0
    let logo = _selected ? 'https://tezid.net/logo-notext.svg' : 'https://tezid.net/logo-gray-notext.svg'
    return (
      <div key={p.id} className={styles.TezIDProofItem} onClick={() => handleClick(p)}>
        <img className={styles.TezIDProofImage} src={logo} alt="tezid-logo" />
        <div>{p.label}</div>
      </div>
    )
  })

  return (
    <div className={styles.TezIDProofs}>
      {proofComps}
    </div>
  )
}
