'use client'

import { useEffect } from 'react'

export default function AmplitudeProvider() {
  useEffect(() => {
    async function initAmplitude() {
      const amplitude = await import('@amplitude/unified')
      amplitude.initAll('5fa4eab022df395336ca298f13dd139c', {
        serverZone: 'EU',
        analytics: {
          autocapture: {
            attribution: true,
            fileDownloads: true,
            formInteractions: true,
            pageViews: true,
            sessions: true,
          },
        },
        sessionReplay: {},
      })
    }
    initAmplitude()
  }, [])

  return null
}
