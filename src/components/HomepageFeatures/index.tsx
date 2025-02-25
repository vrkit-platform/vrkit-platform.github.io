import React, { ReactNode } from "react"
import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.scss"
import Link from "@docusaurus/Link"

type FeatureItem = {
  title:string;
  Svg:React.ComponentType<React.ComponentProps<"svg">>;
  description:ReactNode;
};

const FeatureList:FeatureItem[] = [
  {
    title: "1-Copy Rendering",
    Svg: require("@site/static/img/feature_high_performance.svg").default,
    description: (
        <>
          From frame render in the VRKit Overlay Window
          (an <code>electron</code> window underneath), to the <code>OpenXR
          Layer</code>,
          a single frame buffer copy is all the overhead required.
        </>
    )
  }, {
    title: "High Performance Layer",
    Svg: require("@site/static/img/feature_openxr.svg").default,
    description: (
        <>
          The stack is designed with <code>OpenXR</code> and potentially
          other render targets as <code>first class requirements</code>.
        </>
    )
  }, {
    title: "Create a Plugin",
    Svg: require("@site/static/img/feature_plugin_hub.svg").default,
    description: (
        <>
          Anyone can create a plugin & submit it via the <Link
            href={"https://github.com/vrkit-platform/vrkit-plugin-manifest"}
        >
          vrkit-plugin-manifest
        </Link> repo.
          
          More docs are coming soon...
        </>
    )
  }
]

function Feature({ title, Svg, description }:FeatureItem) {
  return (
      <div className={clsx("col col--4")}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img"/>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default function HomepageFeatures():ReactNode {
  return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
  )
}
