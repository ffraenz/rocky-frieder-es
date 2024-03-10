
import { S3 } from '@aws-sdk/client-s3'
import {
  awsAccessKeyId,
  awsBucketName,
  awsRegion,
  awsSecretAccessKey,
  bucketUrlPrefix,
  locale,
  timeZone
} from '@/consts'

export interface Snapshot {
  src: string
  createdAt: Date
  alt: string
  dateString: string
  timeString: string
}

export const findManySnapshots = async (): Promise<Snapshot[]> => {
  const client = new S3({
    region: awsRegion,
    credentials: {
      accessKeyId: awsAccessKeyId,
      secretAccessKey: awsSecretAccessKey,
    }
  })

  const bucketList = await client.listObjectsV2({
    Bucket: awsBucketName
  })

  const snapshotUrls = bucketList.Contents
    ?.map(snapshot => snapshot.Key)
    .filter(key =>
      key !== undefined &&
      key.startsWith('snapshot-') &&
      key.endsWith('.webp'))
    .reverse()
    .slice(0, 24) as string[]

  return snapshotUrls.map(key => {
    const createdAt = new Date(key.slice(9, -5))
    const dateString = createdAt.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: timeZone
    })
    const timeString = createdAt.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: timeZone
    })
    return {
      src: bucketUrlPrefix + key,
      alt: 'Rocky’s place on ' + dateString + ' at ' + timeString,
      createdAt,
      dateString,
      timeString
    }
  })
}
