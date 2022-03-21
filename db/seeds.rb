# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
restaurants = Restaurant.create!([
  {name:"Soltana", country: "Egypt", city:"Assiut", address:"Ali street", price:"15", phone:"+2089064", img_url:"https://elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg"},
  {name:"Kamona", country: "Egypt", city:"Assiut", address:"Ali street", price:"15", phone:"+2089064", img_url:"https://www.ghanayello.com/img/cats/restaurants.jpg"},
  {name:"Chickana", country: "Egypt", city:"Assiut", address:"Ali street", price:"15", phone:"+2089064", img_url:"https://media.self.com/photos/5ef3b23e4b76967ef77115e6/4:3/w_2560%2Cc_limit/restaurants_covid.jpg"},
])


users = User.create!([
  {username: "bishoy", email:"bishoy@g.com", password:"123456"},
  {username: "luqman", email:"luqman@g.com", password:"123456"},
  {username: "erez", email:"erez@g.com", password:"123456"},
  {username: "bello", email:"bello@g.com", password:"123456"}
]
)


