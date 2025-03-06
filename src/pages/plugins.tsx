import React from "react"
import Layout from "@theme/Layout"
import { useAllPluginManifests } from "../hooks/useAllPluginManifests"
import {
  faSpinner
} from "@awesome.me/kit-79150a3eed/icons/duotone/solid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PluginsView } from "../components/Plugins"
import Link from "@docusaurus/Link"

export default function PluginsPage() {
  
  const pluginManifestState = useAllPluginManifests(), {
    data: pluginManifests,
    isLoading,
    error,
    hasError
  } = pluginManifestState
  
  return (
      <Layout title="Plugins" description="Plugin Marketplace">
        <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
          {isLoading ?
              <FontAwesomeIcon icon={faSpinner} spin /> :
              hasError ? <><p>Error: {error?.message ?? "Unknown error"}</p>
                <p>{error?.stack ?? "No details available"}</p></> : <>
                <PluginsView manifests={pluginManifests} />
              </>}
          
          <hr
            style={{
              width: "80%",
              backgroundColor: "rgba(0,0,0,.2)"
            }}
          />
          <p>
            <Link to="/docs/guides/plugins/create-plugin-quick-start">Create your own plugin</Link>
            &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            <a href="https://github.com/vrkit-platform/vrkit-platform.github.io/issues/new?assignees=&labels=bug&template=bug_report.md&title=">Report a bug</a>
          </p>
        
        </div>
      </Layout>
  )
}