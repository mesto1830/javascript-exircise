import Employees from './module.js'//export default
import {Users, Admins} from './module.js'//export normal

//you can also import with these formats
// import Employees, {Users, Admins} from './module.js'

document.getElementById('employees_btn').addEventListener('click', () => {
  document.getElementById('employees').innerText = Employees('Employee1','Kaya')
})


document.getElementById('users_btn').addEventListener('click', () => {
  document.getElementById('users').innerText = Users('User1','Kaya')
})

document.getElementById('admins_btn').addEventListener('click', () => {
  document.getElementById('admins').innerText = Admins('Admin1','Kaya')
})