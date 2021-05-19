# @tezid/proofs-component

> TezID Proofs React Component

[![NPM](https://img.shields.io/npm/v/@tezid/proofs-component.svg)](https://www.npmjs.com/package/@tezid/proofs-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @tezid/proofs-component
```

## Usage

```jsx
import { TezIDProof } from '@tezid/proofs-component'
import '@tezid/proofs-component/dist/index.css'

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
    <div style={{ display: 'flex' }}>
      {proofItems}
    </div>
  )
}
```

![screenshot](screenshot.png?raw=true "Screenshot")

## License

MIT © [tezid](https://github.com/tezid)
