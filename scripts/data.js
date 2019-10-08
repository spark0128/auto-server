export const users = [
  {
    username: 'admin',
    phoneNumber: '+82 10-0000-0000',
    password: 'password',
    sellerType: 'Customer',
  },
];

export const brands = [
  {name: "Lexus", image: "https://i.imgur.com/kp27DPn.png"},
  {name: "Toyota", image: "https://i.imgur.com/tNGgrlW.png"},
  {name: "Ford", image: "https://i.imgur.com/INHeTx6.png"},
  {name: "Mercedes Benz", image: "https://i.imgur.com/s5iHrc7.png"},
  {name: "Land Rover", image: "https://i.imgur.com/Y5fZsCR.png"},
  {name: "Hyundai", image: "https://i.imgur.com/d6piULQ.png"},
  {name: "SsangYong", image: "https://i.imgur.com/1lCLOYJ.png"},
  {name: "BMW", image: "https://i.imgur.com/Veq5nhz.png"},
  {name: "Chevrolet", image: "https://i.imgur.com/QqhJ3au.png"},
  {name: "KIA", image: "https://i.imgur.com/oQIdOtl.png"},
  {name: "Audi", image: "https://i.imgur.com/viByoKq.png"},
  {name: "Honda", image: "https://i.imgur.com/ZwwOw2M.png"},
  {name: "Nissan", image: "https://i.imgur.com/qlKEAL0.png"},
  {name: "Bentley", image: "https://i.imgur.com/xUEgqSp.png"},
  {name: "Porsche", image: "https://i.imgur.com/erz7v51.png"},
  {name: "Mazda", image: "https://i.imgur.com/dEcFwXv.png"},
  {name: "Mitsubishi", image: "https://i.imgur.com/IpGGdQo.png"},
  {name: "Cadillac", image: "https://i.imgur.com/R9UNi2A.png"},
  {name: "Volkswagen", image: "https://i.imgur.com/GOYkoDB.png"},
  {name: "Suzuki", image: "https://i.imgur.com/kYPutVm.png"},
  {name: "Subaru", image: "https://i.imgur.com/yJvIt0g.png"},
  {name: "Peugeot", image: "https://i.imgur.com/Jm2xzak.png"},
  {name: "Mini", image: "https://i.imgur.com/9WnhX7g.png"},
  {name: "Rolls-Royce", image: "https://i.imgur.com/pFIJR5b.png"},
];

export const carTypes = [
  {name: "sedan", image: ""},
  {name: "luxury", image: ""},
  {name: "truck", image: ""},
  // TODO: 모든 CarType 추가
];

export const cars = [
  { name: 'Toyota Prius 2016', price: 3999, carTypes: ['sedan'], brand: "BMW", images: ['https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2047&q=80', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'] },
  { name: 'Bentley Luxury Car', price: 24999, carTypes: ['sedan', 'luxury'], brand: "BMW", images: ['https://images.unsplash.com/photo-1471289549423-04adaecfa1f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80']},
  { name: 'Ford F-150 Truck', price: 3999, carTypes: ['truck'], brand: "Lexus", images: ['https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80']},
  { name: 'Toyota Alphard', price: 3999, carTypes: ['van'], brand: "Lexus", images: ['https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80']},
  { name: 'Lexus RX300', price: 2999, carTypes: ['suv', 'luxury'], brand: "BMW", images: ['https://images.unsplash.com/photo-1469285994282-454ceb49e63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80']},
  { name: 'Jaguar Hot Car', price: 2499, carTypes: ['sedan', 'luxury'], brand: "BMW", images: ['https://images.unsplash.com/photo-1530906358829-e84b2769270f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80']},
  { name: 'BMW i3', price: 2499, carTypes: ['sports', 'luxury'], brand: "Lexus", images: ['https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80']},
  { name: 'Mercedes Benz S500 AMG', price: 3999, carTypes: ['sedan', 'luxury'], brand: "", images: ['https://images.unsplash.com/photo-1517994112540-009c47ea476b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1981&q=80']},
  { name: 'Hyundai Santa Fe', price: 4999, carTypes: ['suv'], brand: "Lexus", images: ['https://images.unsplash.com/photo-1529899090292-4756173a10a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80']},
  { name: 'Ssangyong Izbana', price: 8999, carTypes: ['van'], brand: "BMW", images: ['https://images.unsplash.com/photo-1524459588802-54e510a87b85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80']},
  { name: 'Chevrolet Bumble Bee', price: 14999, carTypes: ['sports'], brand: "", images: ['https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80']},
  { name: 'Ford Mustang', price: 12499, carTypes: ['sports'], brand: "Lexus", images: ['https://images.unsplash.com/photo-1496437792604-55ca7c5c3f6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80', 'https://images.unsplash.com/photo-1498595664159-2df8dee7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80']},
  { name: 'Hummer H3', price: 14999, carTypes: ['suv'], brand: "BMW", images: ['https://images.unsplash.com/photo-1528501028382-e587fcf3a03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80']},
  { name: 'Jeep Wrangler', price: 14999, carTypes: ['suv'], brand: "Lexus", images: ['https://images.unsplash.com/photo-1524597065459-600e5ac743cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80']},
  { name: 'Acura ILX', price: 6999, carTypes: ['sedan'], brand: "BMW", images: ['https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80']},
  { name: 'Daewoo Matiz', price: 8999, carTypes: ['small'], brand: "Lexus", images: ['https://images.unsplash.com/photo-1526550517342-e086b387edda?ixlib=rb-1.2.1&auto=format&fit=crop&w=2001&q=80']},
  { name: 'Kia Soul', price: 9999, carTypes: ['small'], brand: "BMW", images: ['https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80']},
  { name: 'Kia K5', price: 2499, carTypes: ['sedan'], brand: "Lexus", images: ['https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1611&q=80']},
];
