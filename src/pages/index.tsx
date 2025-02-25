import { ReactNode, useMemo, useState } from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import Heading from "@theme/Heading"

import styles from "./index.module.scss"
import { useGithubLatestRelease } from "../hooks/useGithubLatestRelease"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext(),
      releaseState = useGithubLatestRelease(), {
        data: release,
        isLoading,
        hasError,
        error
      } = releaseState,
      downloadUrl = useMemo<string>(() => {
        if (isLoading || hasError || !release) return ""
        return (
            release.assets?.find(asset => asset.name.endsWith(".exe"))?.browser_download_url ?? ""
        )
      }, [isLoading, hasError, release])
  
  
  
  return (
      <header className={clsx("hero hero--primary", styles.heroBanner, {
        [styles.heroError]: hasError
      })}>
        <div className="container">
          {isLoading ? <>Loading...</> : hasError ? <>
            {error?.message ?? "Unknown error"}
          </> : <>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                  className="button button--secondary button--lg"
                  href={downloadUrl}
              >
                Download {release.tag_name} Windows
              </Link>
            </div>
          </>}
        </div>
      </header>
  )
}

export default function Home():ReactNode {
  const { siteConfig } = useDocusaurusContext()
  return (
      <Layout
          title={siteConfig.title}
          description="vrkit is a platform designed to facilitate low-overhead multi-target rendering of `always-on-top` overlays/widgets.  Plus there's a plugin system">
        <HomepageHeader/>
        <main>
          <HomepageFeatures/>
        </main>
      </Layout>
  )
}
