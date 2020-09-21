/**
 *
 * @param element
 * @param name 事件名称
 * @param detail 传递的值
 * @param bubbles
 * @param composed
 */
export function fire(element: HTMLElement, name: string, detail?: any, bubbles = true, composed = true) {
  const event = new CustomEvent(name, {
    detail,
    bubbles,
    composed
  })

  element.dispatchEvent(event)
}
