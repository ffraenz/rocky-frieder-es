
import { Diary } from '@/components/diary'
import { findManySnapshots } from '@/lib/snapshots'
import { headers } from 'next/headers'
import { timeZone } from '@/consts'

export default async function Home() {
  // Turn on dynamic rendering for this route, by calling a dynamic function
  headers()
  const snapshots = await findManySnapshots()
  const date = new Date().toLocaleDateString('en-UK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: timeZone
  })
  return (
    <Diary date={date} snapshots={snapshots} />
  )
}
