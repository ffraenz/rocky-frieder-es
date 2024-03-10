
'use client'

import { Paw } from './paw'
import { Snapshot } from '@/lib/snapshots'
import { useRef, useState } from 'react'

interface DiaryProps {
  snapshots: Snapshot[]
}

export function Diary(props: DiaryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const heroRef = useRef<HTMLButtonElement | null>(null)
  const onSnapshotSelect = (index: number) => {
    setSelectedIndex(index)
    heroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const onNextSnapshotSelect = () => {
    setSelectedIndex(index => (index + 1) % props.snapshots.length)
  }
  return (
    <div>
      <div className="">
        <h1 className="relative font-extrabold text-7xl sm:text-9xl -mb-10 sm:-mb-16 z-10 text-yellow-300">
          Rocky’s<br />Diary
        </h1>
        <button
          ref={heroRef}
          className="relative aspect-square w-full rounded-full overflow-hidden"
          onClick={onNextSnapshotSelect}
        >
          <img
            className="w-full h-full scale-105 grayscale"
            src={props.snapshots[selectedIndex].src}
            alt={props.snapshots[selectedIndex].alt}
          />
        </button>
      </div>
      <div className="pt-12">
        <p className="font-extrabold text-4xl sm:text-5xl leading-tight sm:leading-tight">
          <span>{props.snapshots[0].dateString}</span><br />
          <span className='text-yellow-300'>Dear diary,</span>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-12">
          {props.snapshots.map((snapshot, index) => (
            <button
              className="relative aspect-square rounded-full overflow-hidden"
              onClick={onSnapshotSelect.bind(null, index)}
              key={snapshot.src}
            >
              <img
                className="w-full h-full scale-105 grayscale"
                src={snapshot.src}
                alt={snapshot.alt}
                loading="lazy"
              />
              {selectedIndex === index && (
                <div className="absolute top-0 right-0 bottom-0 left-0 border-4 border-yellow-300 rounded-full" />
              )}
              <span className="absolute inline-block px-1.5 bottom-3 left-1/2 -translate-x-1/2 bg-white text-zinc-950 font-medium rounded-full">
                {snapshot.timeString}
              </span>
            </button>
          ))}
        </div>
        <p className="font-extrabold text-4xl sm:text-5xl text-yellow-300 leading-tight sm:leading-tight">
          That's it for now. Meow
          <Paw />
        </p>
      </div>
    </div>
  )
}
