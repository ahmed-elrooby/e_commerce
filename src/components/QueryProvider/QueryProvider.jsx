"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'

const QueryProvider = ({children}) => {
  const queryclient = new QueryClient({
    defaultOptions:{
      queries: {
refetchOnWindowFocus:false,
      },
    }
  })

    return <>
  <QueryClientProvider client={queryclient}>
    {children}
  </QueryClientProvider>
  </>
}

export default QueryProvider