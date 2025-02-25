import { getGithubLatestRelease, GithubRelease } from "../utils/GithubAPI"
import { AsyncState, useAsync } from "./useAsync"


export function useGithubLatestRelease():AsyncState<GithubRelease> {
  return useAsync<GithubRelease>(async () => {
    const release = await getGithubLatestRelease()
    console.log(`Received release (${release.tag_name})`, release)
    return release
  }, [])
}