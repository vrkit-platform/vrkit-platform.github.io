// noinspection ES6UnusedImports
import React from "react"
import MDXComponents from "@theme-original/MDXComponents"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import * as FAB from "@awesome.me/kit-79150a3eed/icons/classic/brands"
import * as FAS from "@awesome.me/kit-79150a3eed/icons/classic/solid"
import { DownloadButton } from "../components/Download"
import { Screenshot } from "../components/Screenshot"

library.add(FAB, FAS)

export default {
  ...MDXComponents,
  FAIcon: FontAwesomeIcon,
  DownloadButton,
  Screenshot
}