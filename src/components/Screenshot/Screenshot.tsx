import React, { ReactNode, useMemo } from "react"
import clsx from "clsx"
import classes from "./Screenshot.styles.module.scss"

export interface ScreenshotProps {
  src:string
  
  alt:string
  
  imgProps?:Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">
  
  containerProps?:React.HTMLAttributes<HTMLDivElement>
}

export function Screenshot({
  src,
  alt,
  imgProps = {},
  containerProps = {}
}:ScreenshotProps):ReactNode {
  return (
      <div className={clsx(
          classes.imageContainer,
          containerProps.className
      )} {...containerProps}>
        <img alt={alt} src={src} {...imgProps} />
      </div>
  
  )
}

export default Screenshot