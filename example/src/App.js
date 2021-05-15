import React from 'react'

import { TezIDProofs } from 'tezid-proofs-component'
import 'tezid-proofs-component/dist/index.css'

const App = () => {
  return (
    <TezIDProofs 
      proofs={[
        { id: 'email', label: 'Email'}, 
        { id: 'phone', label: 'Phone'}
      ]} 
      onClick={(p) => console.log(p)} 
      selected={['email']}
    />
  )
}

export default App
