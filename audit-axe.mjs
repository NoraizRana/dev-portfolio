import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'

const BASE = 'http://localhost:4173'
const ROUTES = ['/', '/work', '/work/collaborink', '/about', '/blog', '/contact']

const browser = await chromium.launch({ headless: true })
const allViolations = {}

for (const route of ROUTES) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await ctx.newPage()
  await page.goto(BASE + route, { waitUntil: 'networkidle' })
  // Skip preloader so it doesn't block content
  await page.evaluate(() => sessionStorage.setItem('preloader_done', '1'))
  await page.reload({ waitUntil: 'networkidle' })
  // Wait for lazy-loaded sections
  await page.waitForTimeout(1000)
  // Scroll to bottom so all lazy sections mount
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(800)

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()

  allViolations[route] = results.violations.map(v => ({
    id: v.id,
    impact: v.impact,
    description: v.description,
    nodes: v.nodes.length,
    example: v.nodes[0]?.html?.slice(0, 120),
  }))

  await ctx.close()
}

await browser.close()

// Print sorted by severity
const SEVERITY = { critical: 0, serious: 1, moderate: 2, minor: 3 }

for (const [route, violations] of Object.entries(allViolations)) {
  const sorted = violations.sort((a, b) => (SEVERITY[a.impact] ?? 9) - (SEVERITY[b.impact] ?? 9))
  console.log(`\n═══ ${route} (${sorted.length} violations) ═══`)
  for (const v of sorted) {
    console.log(`  [${v.impact?.toUpperCase()}] ${v.id} (${v.nodes} node${v.nodes !== 1 ? 's' : ''})`)
    console.log(`    ${v.description}`)
    if (v.example) console.log(`    example: ${v.example}`)
  }
}

const total = Object.values(allViolations).reduce((s, v) => s + v.length, 0)
console.log(`\nTOTAL: ${total} violations across ${ROUTES.length} routes`)
