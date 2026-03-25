import heroBg from '../assets/tentang/hero-bg.png'
import docsBg from '../assets/images/BG-8.png'
import visionBg from '../assets/images/BG-5.png'
import { documentationImageAssets } from '../data/tentang'

const tentangPriorityAssets = [
  heroBg,
  visionBg,
  docsBg,
  ...documentationImageAssets.slice(0, 2).map((image) => image.src),
]

const tentangDeferredAssets = documentationImageAssets.slice(2).map((image) => image.src)

let tentangRoutePromise
let tentangCoreAssetsPromise
let tentangAllAssetsPromise

function preloadImage(source) {
  return new Promise((resolve) => {
    const image = new Image()

    image.onload = resolve
    image.onerror = resolve
    image.decoding = 'async'
    image.src = source

    if (image.complete) {
      resolve()
    }
  })
}

function preloadImages(sources) {
  return Promise.allSettled(sources.map(preloadImage))
}

export function preloadTentangRoute() {
  tentangRoutePromise ??= import('../pages/Tentang')
  return tentangRoutePromise
}

export function preloadTentangCoreAssets() {
  tentangCoreAssetsPromise ??= preloadImages(tentangPriorityAssets)
  return tentangCoreAssetsPromise
}

export function preloadTentangAllAssets() {
  tentangAllAssetsPromise ??= Promise.allSettled([
    preloadTentangRoute(),
    preloadTentangCoreAssets(),
    preloadImages(tentangDeferredAssets),
  ])

  return tentangAllAssetsPromise
}

export function warmTentangPage({ full = false } = {}) {
  preloadTentangRoute()
  return full ? preloadTentangAllAssets() : preloadTentangCoreAssets()
}
