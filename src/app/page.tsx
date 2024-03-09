
import { Diary } from '@/components/diary'
import { timeZone } from '@/consts'
import { findManySnapshots } from '@/lib/snapshots'

export default async function Home() {
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
