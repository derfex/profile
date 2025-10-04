import { dxActivities, type DXActivityCard } from "./dx-activities"

function main(doc: Document): void {
  const [scrollableContainer] = doc.getElementsByClassName('app-scrollable-container')
  scrollableContainer.appendChild(createLayoutSectionSeparatorClone(doc))
  scrollableContainer.appendChild(createDXActivitiesSectionClone(doc, dxActivities))
}

document.addEventListener('DOMContentLoaded', (): void => {
  setTimeout((): void => {
    main(document)
  }, 100)
})



function newDevError(): Error {
  return new Error('dev profile')
}

function createLayoutSectionSeparatorClone(doc: Document): HTMLElement {
  const node = doc.querySelector('app-layout-section-separator')
  if (!node) throw newDevError()
  return node.cloneNode(true) as HTMLElement
}

function createDXProjectsSectionClone(doc: Document): HTMLElement {
  const node = doc.querySelector('app-dx-projects-section')
  if (!node) throw newDevError()
  return node.cloneNode(true) as HTMLElement
}

function createDXActivitiesSectionClone(doc: Document, activities: readonly DXActivityCard[]): HTMLElement {
  const node = createDXProjectsSectionClone(doc)
  const [sectionNumber] = node.getElementsByClassName('app-section__number')
  sectionNumber.textContent = '03'
  const [article] = node.getElementsByClassName('app-article')
  const [title] = article.getElementsByClassName('app-title')
  title.textContent = 'Activities'
  const [projects] = article.getElementsByClassName('app-projects')
  projects.remove()
  const list = doc.createElement('ul')
  for (const activity of activities) {
    const li = doc.createElement('li')
    const card = createDXActivityCard(activity)
    li.appendChild(card)
    list.appendChild(li)
  }
  article.appendChild(list)
  return node
}

function createDXActivityCard({ period, results, role, shortDescription }: DXActivityCard): HTMLElement {
  let resultsList = ``
  for (const result of results) {
    resultsList += `<li>${result}</li>
`
  }
  resultsList = `
<ul>
${resultsList}
</ul>
`
  const el = document.createElement('article')
  el.innerHTML = `
<h3>${role}</h3>
<p>${shortDescription}</p>
<p>${period}</p>
${resultsList}
`
  return el
}
