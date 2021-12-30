import type { ErrorMessageMode } from './typing'

export interface ContentOptions {
  errorFunction: AnyFunction<any>
  errorModalFunction: AnyFunction<any>
  getTokenFunction: () => unknown
  errorLogFunction: (error: any) => void
  unauthorizedFunction: (msg?: string) => void
  timeoutFunction: () => void
  handleErrorFunction: (message?: string, mode?: ErrorMessageMode) => void
  urlPrefix?: string
  apiUrl?: string
  uploadUrl?: string
}

export let context: ContentOptions = {
  getTokenFunction: () => undefined,
  unauthorizedFunction: () => {},
  errorFunction: () => {},
  errorModalFunction: () => {},
  errorLogFunction: () => {},
  handleErrorFunction: () => {},
  timeoutFunction: () => {},
  urlPrefix: '',
  apiUrl: '',
}

export const initServiceModule = async (_context: ContentOptions) => {
  context = _context
}