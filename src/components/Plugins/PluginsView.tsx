import type { PluginManifest } from "@vrkit-platform/models"
import classes from "./PluginsView.module.scss"
import clsx from "clsx"

function isNotEmptyString(s:string):boolean {
  return typeof s === "string" && s.length > 0
}

export interface PluginGridProps {
  manifests:PluginManifest[]
}

export function PluginGrid({ manifests }:PluginGridProps) {
  return <div className={classes.grid}>
    {manifests.map(plugin => <PluginGridItem
        key={plugin.id}
        manifest={plugin}
    />)}
  </div>
}

export interface PluginGridItemProps {
  manifest:PluginManifest
}

export function PluginGridItem({ manifest: plugin }:PluginGridItemProps) {
  
  const authorLabel = isNotEmptyString(plugin.author?.company) ? plugin.author.company :
      isNotEmptyString(plugin.author?.name) ? plugin.author.name :
      "No author provided"
  return <div
      className={classes.item}
  >
    <div className={classes.top}>
      <img
          className={classes.icon}
          src={plugin.overview?.iconUrl}
          alt={plugin.name}
      />
    </div>
      <div className={classes.content}
      
      >
        <div className={clsx(classes.ellipsis, classes.name)}>
          {plugin.name}
        </div>
        
        <div className={clsx(classes.ellipsis, classes.author)}>
          v{plugin.version}
          &nbsp;&bull;&nbsp; {authorLabel}
        </div>
        
        {isNotEmptyString(plugin.description) &&
            (
                <div className={clsx(classes.description, classes.ellipsis)}>
                  {plugin.description}
                </div>
            )}
      </div>
    
  
  </div>
}

export interface PluginsViewProps {
  manifests:PluginManifest[]
}

export function PluginsView({ manifests }:PluginsViewProps) {
  return <PluginGrid manifests={manifests}/>
}