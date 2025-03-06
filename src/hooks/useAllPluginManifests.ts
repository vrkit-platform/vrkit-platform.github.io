import type { PluginManifest } from "@vrkit-platform/models"
import { AsyncState, useAsync } from "./useAsync"
import { getAllPluginManifest } from "../utils/PluginHelper"


export function useAllPluginManifests():AsyncState<PluginManifest[]> {
  return useAsync<PluginManifest[]>(async () => {
    const manifests = await getAllPluginManifest()
    console.log(`Plugin Manifests (count=${manifests.length})`, manifests)
    return manifests
  }, [])
}