
import { Diary } from '@/components/diary'
import { findManySnapshots } from '@/lib/snapshots'
import { timeZone } from '@/consts'

export const dynamic = 'force-dynamic'
export const revalidate = 60 * 15

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
