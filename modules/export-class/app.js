import Employees from './module.js'//export default
import {Users, Admins} from './module.js'//export normal

//you can also import with these formats
// import Employees, {Users, Admins} from './module.js'


document.getElementById('employees_btn').addEventListener('click', () => {
  const Emp1 = new Employees('Employee1','Kaya')
  document.getElementById('employees').innerText = Emp1.fullName()
})


document.getElementById('users_btn').addEventListener('click', () => {
  const User1 = new Users('User1','Kaya')
  document.getElementById('users').innerText = User1.fullName()
})

document.getElementById('admins_btn').addEventListener('click', () => {
  const Admin1 = new Admins('Admin1','Kaya')
  document.getElementById('admins').innerText = Admin1.fullName()
})