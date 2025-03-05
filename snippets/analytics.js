import { Databeat } from '@databeat/tracker'

export const analytics = new Databeat('https://databeat.sequence.app', {
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJzZXEtZG9jcyIsImV4cCI6MTcxMjIxNDYzNn0.qWxTAvdiD1mWUZaEMFwp3_Xq-aFmMzzoIU8h4a8xG9c',
})

export default function Footer() {
  if (typeof document === "undefined") {
    return null;
  }

  analytics.trackView()
  
  return document.createElement('div')
} 