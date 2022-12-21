import React from 'react'
import Photos from './components/Photos'
import { SWRConfig } from 'swr'
const App = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  return (
    <SWRConfig value={{ fetcher }}>
      <Photos />
    </SWRConfig>
  )
}

export default App