
import { Diary } from '@/components/diary'
import { findManySnapshots } from '@/lib/snapshots'

export default async function Home() {
  const snapshots = await findManySnapshots()
  const date = new Date().toLocaleDateString('en-UK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  return (
    <Diary date={date} snapshots={snapshots} />
  )
}
