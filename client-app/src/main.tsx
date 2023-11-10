import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/Route'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import {
  QueryClient,
  QueryClientProvider
} from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChakraProvider>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </ChakraProvider>
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode >,
)
