
import { Diary } from '@/components/diary'
import { findManySnapshots } from '@/lib/snapshots'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const snapshots = await findManySnapshots()
  if (snapshots.length === 0) {
    // No snapshots, no diary
    notFound()
  }
  return (
    <Diary snapshots={snapshots} />
  )
}
