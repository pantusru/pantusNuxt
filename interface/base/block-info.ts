export enum BlockInfoType {
  Error = 'blog_info-error',
  Info = 'blog_info-info',
  Good = 'blog_info-good',
  Null = '',
}

export interface BlockInfo {
  active: boolean
  text: string
  type: BlockInfoType | null
}
export interface BlockInfoStore {
  blockInfo: BlockInfo
}
