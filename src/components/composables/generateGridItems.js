import { computed } from "vue";

/**
 * Creates a style-binding for grid-template rows or columns.
 *
 * @param {string} type - Either 'column' or 'row'
 *
 * @returns {arr} A stardard array or computed value.
 */
export function generateGridItems(type, arr) {
  return computed(() =>
    `grid-template-${type}: repeat(${arr.length ? arr.length : ''}, minmax(0, 1fr));`
  )
}