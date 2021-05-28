import fetch from 'isomorphic-fetch'

export function getPosts () {
  return fetch('https://kfg6bckb-dev.preview.zesty.io/nextjs/gb-articles.json?limit=5')
}

export function getPost (slug) {
  return fetch(`https://kfg6bckb-dev.preview.zesty.io/nextjs/gb-articles.json?title=${slug}`)
}
