export function changeRoute(name) {
  // 获取pathname
  const pathname = window.location.pathname.split('/')[1]
  const route =  name ? `/${pathname}${name}` : `/${pathname}/`
  return route
}
