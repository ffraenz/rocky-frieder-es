
import { S3 } from '@aws-sdk/client-s3'

const bucketUrlPrefix = process.env.AWS_BUCKET_URL_PREFIX ?? ''

export interface Snapshot {
  src: string
  createdAt: Date
  timeString: string
}

export const findManySnapshots = async (): Promise<Snapshot[]> => {
  const client = new S3({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    }
  })

  const bucketList = await client.listObjectsV2({
    Bucket: process.env.AWS_BUCKET_NAME!
  })

  const snapshotUrls = bucketList.Contents
    ?.map(snapshot => snapshot.Key)
    .filter(key =>
      key !== undefined &&
      key.startsWith('snapshot-') &&
      key.endsWith('.webp'))
    .reverse()
    .slice(0, 24 * 2) as string[]

  return snapshotUrls
    .map(key => {
      const createdAt = new Date(key.slice(9, -5))
      return {
        src: bucketUrlPrefix + key!,
        createdAt,
        timeString:
          createdAt.getHours().toString().padStart(2, '0') + ':' +
          createdAt.getMinutes().toString().padStart(2, '0')
      }
    })
}
