import type { PluginManifest } from "@vrkit-platform/models"
import { fetchJson } from "./FetchHelper"
import { GithubOrgCDNUri } from "./GithubAPI"

/**
 * Fetches the plugin manifest from the specified CDN URL.
 *
 * The method performs an asynchronous operation to retrieve the plugin manifest
 * in JSON format and logs the received manifest for debugging purposes.
 *
 * @return {Promise<PluginManifest[]>} A promise that resolves to the plugin manifest object.
 */
export async function getAllPluginManifest(): Promise<PluginManifest[]> {
  
  const url = `${GithubOrgCDNUri}/vrkit-plugin-manifest@master/plugins.json?raw=true`,
      manifests = await fetchJson<PluginManifest[]>(url, `Error fetching plugin manifest @ (${url})`)
  
  if (!Array.isArray(manifests))
    throw new Error(`Invalid plugin manifest @ (${url}), should be an array of PluginManifest objects`)
  
  console.debug(`Plugin Manifest received`, manifests)
  
  return manifests
}