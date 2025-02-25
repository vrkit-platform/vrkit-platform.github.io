import React, { useState, useEffect, useCallback } from "react"

export interface AsyncState<T> {
  data:T | null;
  
  error:Error | null;
  
  isLoading:boolean;
  
  hasError:boolean
}

export function useAsync<T>(
    asyncFunction:() => Promise<T>,
    dependencies:React.DependencyList = []
):AsyncState<T> {
  
  const [state, setState] = useState<AsyncState<T>>({
    data: null, error: null, isLoading: true, hasError: false
  })
  
  const execute = useCallback(async () => {
    setState({ data: null, error: null, isLoading: true, hasError: false })
    try {
      const data = await asyncFunction()
      setState({ data, error: null, isLoading: false, hasError: false })
    } catch (error:any) {
      setState({ data: null, error, isLoading: false, hasError: true })
    }
  }, dependencies)
  
  useEffect(() => {
    execute()
  }, [execute])
  
  return state
}