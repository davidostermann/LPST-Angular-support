module.exports = function() {
  const faker = require('faker')

  const getColor = () => Math.floor(Math.random() * 16777215).toString(16); 
  
  return { users: Array.from({ length: 15 }, (v, id) => ({
      id: id + 1,
      name: faker.name.findName(),
      image: `https://dummyimage.com/360x220/${getColor()}/fff/&text=user${id +
        1}`,
      jobTitle: faker.name.jobTitle(),
      position: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude()
      }
    })), posts: Array.from({ length: 40 }, (v, id) => ({
      id: id + 1,
      title: faker.lorem.sentence(),
      img: `https://dummyimage.com/360x220/${getColor()}/fff/&text=post${id +
        1}`,
      desc: faker.lorem.lines(),
      text: faker.lorem.paragraphs(),
      userId: Math.floor(Math.random() * 15) + 1
    })) };
}