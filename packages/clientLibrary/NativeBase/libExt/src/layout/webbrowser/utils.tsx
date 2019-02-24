export function noop() {}
export function isTrue() {
  return true
}

export function jsonToQueryString(json) {
  const items = Object.keys(json).map(
    (key) => encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
  )
  if (items.length) {
    return `?${items.join('&')}`
  }
  return ''
}

/**
 * url is like 'https://politicl.com/?oauth_token=GD66gQAAAAAAw9-CAAABZFNnAQI&oauth_verifier=hkpNcUwoPBHtm1K9FOfb7v3cruKw9vdM'
 * @param url
 */
export function isTwitterCallBack(url: string) {
  return url.indexOf('oauth_token') !== -1 && url.indexOf('//politicl.com') !== -1
}

export function isFacebookCallBack(url: string) {
  return url.indexOf('signed_request') !== -1 && url.indexOf('expires_in') !== -1
}

/**
 * https://www.facebook.com/dialog/return/close?post_id=2058310397830772#_=_
 *
 * https://twitter.com/intent/tweet/complete?url=http%3A%2F%2Fwww.firstpost.co…ty%20component%20for%20smart%20cities&latest_status_id=1019490609713774592
 *
 * @param url
 */
export function isShareCallBack(url: string) {
  return url.indexOf('dialog/return/close') !== -1 || url.indexOf('intent/tweet/complete') !== -1
}
