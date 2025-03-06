import React, { ReactNode, useMemo } from "react"
import clsx from "clsx"
import { useGithubLatestRelease } from "../../hooks/useGithubLatestRelease"
import Link from "@docusaurus/Link"

export default function DownloadButton():ReactNode {
  const releaseState = useGithubLatestRelease(), {
    data: release, isLoading, hasError, error
  } = releaseState, downloadUrl = useMemo<string>(() => {
    if (isLoading || hasError || !release) {
      return "#"
    }
    return (
        release.assets?.find(asset => asset.name.endsWith(".exe"))?.browser_download_url ??
        ""
    )
  }, [isLoading, hasError, release])
  return (
      <Link
          className="button button--secondary button--lg"
          href={downloadUrl}
      >
        {isLoading ? <>Loading...</> : hasError ? <>
          {error?.message ?? "Unknown error"}
        </> : <>
          Download {release.tag_name} Windows
        </>}
      </Link>
  )
}
