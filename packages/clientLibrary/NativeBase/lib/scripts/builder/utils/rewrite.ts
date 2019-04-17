export const rewriteAst = (list) => {
  const items = list.slice(0)
  let swapped = false
  let p
  let q
  for (p = 1; p < items.length; ++p) {
    for (q = 0; q < items.length - p; ++q) {
      if (items[q + 1] < items[q]) {
        swapped = true
        let temp = items[q]
        items[q] = items[q + 1]
        items[q + 1] = temp
      }
    }
    if (!swapped) break
  }
  return items
  // alert("Finish");
}
