
import path from 'node:path'
import snapshotUrls from '../data/snapshots.json'
import { locale, timeZone } from '@/consts'
import { shuffleArray } from './array'

export interface Snapshot {
  src: string
  createdAt: Date
  alt: string
  dateString: string
  longDateString: string
  timeString: string
}

export const findManySnapshots = async (): Promise<Snapshot[]> => {
  const snapshotUrlsSlice = shuffleArray(snapshotUrls.slice()).slice(0, 24)
  snapshotUrlsSlice.sort()

  return snapshotUrlsSlice.reverse().map(url => {
    const baseName = path.basename(url)
    console.log('baseName', baseName.slice(9, 9 + 10))
    const createdAt = new Date(baseName.slice(9, 9 + 10))
    const longDateString = createdAt.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: timeZone
    })
    const dateString = createdAt.toLocaleDateString(locale, {
      day: '2-digit',
      month: '2-digit',
      timeZone: timeZone
    })
    const timeString = createdAt.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: timeZone
    })
    return {
      src: url,
      alt: 'Rocky’s place on ' + longDateString + ' at ' + timeString,
      createdAt,
      dateString,
      longDateString,
      timeString
    }
  })
}
