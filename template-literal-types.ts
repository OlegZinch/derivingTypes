// const mainUserName = 'Max'

// const greeting = `Hi there, ${mainUserName}.`

type ReadPermissions = 'no-read' | 'read'
type WritePermissions = 'no-write' | 'write'

type FilePermisions = `${ReadPermissions}-${WritePermissions}`

type DataFile = {
  data: string
  permissions: FilePermisions
}

type DataFileEventNames = `${keyof DataFile}Changed`

type DataFileEvents = {
  [Key in DataFileEventNames]: () => void
}
