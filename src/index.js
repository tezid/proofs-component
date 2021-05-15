import React from 'react'
import styles from './index.css'

export const TezIDProof = (props) => {
  const p = props.proof
  const selected = props.selected != undefined ? props.selected : true
  const handleClick = (p) => {
    if (typeof props.onClick === 'function')
      props.onClick(p)
  }
  const logo = selected ? 'https://tezid.net/logo-notext.svg' : 'https://tezid.net/logo-gray-notext.svg'

  return ( 
      <div key={p.id} className={styles.TezIDProofItem} onClick={() => handleClick(p)}>
        <img className={styles.TezIDProofImage} src={logo} alt="tezid-logo" />
        <div>{p.label}</div>
      </div>
  )
}

export const TezIDProofs = (props) => {
  const proofs = props.proofs || []
  const selected = props.selected || proofs.map(p => p.id)

  const proofComps = proofs.map(p => 
    <div key={p.id} className={styles.TezIDProofItemWrapper}>
      <TezIDProof 
        proof={p} 
        selected={selected.indexOf(p.id) >= 0} onClick={props.onClick} 
      />
    </div>
  )

  return (
    <div className={styles.TezIDProofs}>
      {proofComps}
    </div>
  )
}
