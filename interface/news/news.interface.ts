import {
  NewsCategoriesIdApiInterface,
  NewsCategoriesIdInterface,
} from '~/interface/news/news-categories.interface'

export interface NewsInterface {
  id: number
  name: string
  code: string
  // categories: NewsCategoriesIdInterface
  preview: {
    image: string
    text: string
  }
}
export interface NewsIdInterface {
  id: number
  name: string
  code: string
  categories: NewsCategoriesIdInterface
  dates: {
    created: string
  }
  content: string
  preview: {
    image: string
    text: string
  }
}
export interface NewsApiInterface {
  id: number
  name: string
  code: string
  activity: boolean
  content: string
  categories: NewsCategoriesIdApiInterface
  dates: {
    // eslint-disable-next-line camelcase
    active_from: string
    created: string
    updated: string
  }
  preview: {
    image: string
    text: string
  }
}
