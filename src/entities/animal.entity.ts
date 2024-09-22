import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
// extends abilities from BaseEntity
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  species: string

  @Column()
  age: number

  @Column({ default: true })
  isActive: boolean

  static findByName(name: string): Promise<Animal[]> {
    return this.createQueryBuilder('animal').where('animal.name = :name', { name }).getMany()
  }
}

// Example usage of the Animal entity
// Create a new animal
const newAnimal = new Animal()
newAnimal.name = 'Leo'
newAnimal.species = 'Lion'
newAnimal.age = 5
await newAnimal.save()

// Find animals by name
const animalsNamedLeo = await Animal.findByName('Leo')
console.log('Animals named Leo:', animalsNamedLeo)

// Update an animal
if (animalsNamedLeo.length > 0) {
  const leo = animalsNamedLeo[0]
  leo.age = 6
  await leo.save()
  console.log('Updated Leo:', leo)
}
