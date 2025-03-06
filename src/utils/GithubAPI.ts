import { fetchJson } from "./FetchHelper"

export interface GithubRelease {
  url:string
  
  assets_url:string
  
  upload_url:string
  
  html_url:string
  
  id:number
  
  author:GithubAuthor
  
  node_id:string
  
  tag_name:string
  
  target_commitish:string
  
  name:string
  
  draft:boolean
  
  prerelease:boolean
  
  created_at:string
  
  published_at:string
  
  assets:GithubAsset[]
  
  tarball_url:string
  
  zipball_url:string
  
  body:string | null
}

export interface GithubAuthor {
  login:string
  
  id:number
  
  node_id:string
  
  avatar_url:string
  
  gravatar_id:string
  
  url:string
  
  html_url:string
  
  followers_url:string
  
  following_url:string
  
  gists_url:string
  
  starred_url:string
  
  subscriptions_url:string
  
  organizations_url:string
  
  repos_url:string
  
  events_url:string
  
  received_events_url:string
  
  type:string
  
  user_view_type:string
  
  site_admin:boolean
}

export interface GithubAsset {
  url:string
  
  id:number
  
  node_id:string
  
  name:string
  
  label:string
  
  uploader:GithubAuthor
  
  content_type:string
  
  state:string
  
  size:number
  
  download_count:number
  
  created_at:string
  
  updated_at:string
  
  browser_download_url:string
}

export type GithubRepoPath = `${string}/${string}`

export const GithubOrgCDNUri = `https://cdn.jsdelivr.net/gh/vrkit-platform`

export async function getGithubLatestRelease(repoPath:GithubRepoPath = "vrkit-platform/vrkit-platform"):Promise<GithubRelease> {
  const url = `https://api.github.com/repos/${repoPath}/releases/latest`
  
  return await fetchJson(url, "Error fetching latest release")
}

