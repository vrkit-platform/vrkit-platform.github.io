import React from "react"
import { Toaster } from "react-hot-toast"

export interface RootProps {
  children: React.ReactNode
}

export default function Root({ children }: RootProps) {
  return <>
    {children}
    <Toaster/>
  </>
}