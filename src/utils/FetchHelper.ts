import { asyncToastErrorHandler } from "./ToastHelper"


/**
 * Asynchronously fetches JSON data from the provided URL.
 *
 * @param {string} url - The URL from which the JSON data should be fetched.
 * @param errorMessage
 * @return {Promise<Object>} A promise that resolves to the parsed JSON object if the request is successful, or null if an error occurs.
 */
export function fetchJson<T = any>(url: string, errorMessage: string = null): Promise<T> {
  const fetcher = async (): Promise<T> => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(errorMessage ?? `Error fetching JSON @ (${url}): ${response.status}`)
    }
    
    return await response.json()
  }
  
  return asyncToastErrorHandler<T>(fetcher, errorMessage)()
}