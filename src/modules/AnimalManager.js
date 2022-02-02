const remoteURL = "http://localhost:8088"

export const getAnimalById = (animalId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/animals/${animalId}?_expand=locationId&_expand=customerId`)
  .then(res => res.json())
}

export const getAllAnimals = () => {
  return fetch(`${remoteURL}/animals`)
  .then(res => res.json())
}
