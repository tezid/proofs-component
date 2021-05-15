# @tezid/proofs-component

> TezID Proofs React Component

[![NPM](https://img.shields.io/npm/v/tezid-proofs-component.svg)](https://www.npmjs.com/package/tezid-proofs-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @tezid/proofs-component
```

## Usage

```jsx
import { TezIDProofs } from '@tezid/proofs-component'
import '@tezid/proofs-component/dist/index.css'

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
```

[!screenshot](https://raw.githubusercontent.com/tezid/proofs-component/main/screenshot.png "Screenshot")

## License

MIT © [asbjornenge](https://github.com/asbjornenge)
