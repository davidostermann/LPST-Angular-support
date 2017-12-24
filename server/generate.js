module.exports = function() {
  const faker = require('faker')
  
  return {
    users : Array.from({length: 15}, (v, id) => ({
      id, 
      name: faker.name.findName(),
      image: faker.image.avatar(),
      jobTitle: faker.name.jobTitle(),
      position: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude()
      }
    }))
  }
}