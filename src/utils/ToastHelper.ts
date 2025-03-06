import toast from "react-hot-toast"

export function showToastError(msg: string, err: Error, rethrow: boolean = false) {
  if (!msg || msg.trim().length === 0)
    msg = err?.message ?? "Unknown error"
  
  console.error(msg, err)
  toast.error(`${msg}: ${err.message}`)
  if (rethrow)
    throw err
}

export function asyncToastErrorHandler<T>(fn: () => Promise<T>, msg: string = null, rethrow: boolean = false): () => Promise<T> {
  return async (): Promise<T> => {
    try {
      return await fn()
    } catch (err) {
      showToastError(msg, err, rethrow)
      return null
    }
  }
}