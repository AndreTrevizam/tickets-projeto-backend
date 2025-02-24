export function parseRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g

  const params = path.replaceAll(routeParametersRegex,
    "(?<$1>[a-z0-0-_]+)"
  )
  
  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

  return pathRegex
}