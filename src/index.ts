/**
 * 1. TIPAGEM ESTATICA
 */
const age: number = 18
const fullName: string = 'Yaba Ernesto'
const isActive: boolean = true

function sum(a: number, b:number): number {
  const result = a + b

  return result
}

function greeting(name: string | boolean): string | void {
  if (name) {
    return `Hello ${name}`
  }
}

function stringOrNumberSize(value: string | number): number {
  if (typeof value === 'string') {
    return value.length
  }

  return value
}

/**
 * 2. INTERFACES E TIPOS PERSONALIZADOS
 */
type Coordinate = {
  x: number
  y: number
}

function calculateDistance(pointA: Coordinate, pointB: Coordinate): number {
  const dx = pointB.x - pointA.x
  const dy = pointB.y - pointA.y

  const result = Math.sqrt(dx * dx + dy * dy)

  return result
}

const pointA: Coordinate = { x: 5, y: 10 }
const pointB: Coordinate = { x: 3, y: 15 }

const distance = calculateDistance(pointA, pointB)

interface Car {
  brand: string
  model: string
  year: number
  hasDocument?: boolean
  startEngine: () => void
}

function drive(car: Car): void {
  console.log(`Driving ${car.brand} ${car.model} - ${car.year}`)
  car.startEngine()

  if (!car.hasDocument) {
    console.log('Busted!')
  }
}

const myCar: Car = {
  brand: 'Audi',
  model: 'A3',
  year: 2024,
  hasDocument: true,
  startEngine: () => {
    console.log('Engine Started!')
  }
}

drive(myCar)

/**
 * 3. ENUMS
 */
enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}

interface Person {
  name: string
  age: number
  gender: Gender
}

const person: Person = {
  name: 'Yaba',
  age: 23,
  gender: Gender.MALE,
}

if (person.gender === Gender.FEMALE) {
  console.log(person)
}

/**
 * 4. GENERICS
 */
interface Request<B = any, Q = any, P = any> {
  body: B
  query: Q
  params: P
}

interface Response<R = any> {
  send: (response: R) => void
}

function controller(request: Request<Person, Car>, response: Response<Person>): any {
  const { body, query } = request

  return response.send(body)
}

/**
 * 5. UTILITY TYPES
 */
type CustomCar = Pick<Car, 'brand' | 'model' | 'year'>
type CustomCar2 = Omit<Car, 'startEngine'>
type CustomCarPartial = Partial<Car>
type CustomCarPartial2 = Partial<Omit<Car, 'startEngine'>>
type CustomCarRequired = Required<Car>
