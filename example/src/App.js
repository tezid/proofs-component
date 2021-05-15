import React from 'react'

import { TezIDProof, TezIDProofs } from 'tezid-proofs-component'
import 'tezid-proofs-component/dist/index.css'

const App = () => {
  const proofs = [
    { id: 'email', label: 'Email' }, 
    { id: 'phone', label: 'Phone' }
  ] 
  const proofItems = proofs.map(p => 
    <TezIDProof 
      key={p.id} 
      proof={p} 
      selected={p.id === 'email'} 
      onClick={p => console.log(p)} 
    />
  )
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {proofItems}
      </div>
      <div>
        <TezIDProofs 
          proofs={proofs} 
          selected={['email']}
          onClick={p => console.log(p)} 
        />
      </div>
    </div>
  )
}

export default App
