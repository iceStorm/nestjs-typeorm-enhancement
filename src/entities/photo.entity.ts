import { EntitySchema } from 'typeorm'

export interface Photo {
  id: number
  name: string
}

// https://typeorm.io/separating-entity-definition#defining-schemas
export const PhotoEntity = new EntitySchema<Photo>({
  name: 'photo',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
  },
})
