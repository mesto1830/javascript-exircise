export default class Employees {
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
  }
  fullName(){
    return this.name +' '+ this.lastName
  }
}

//export normal
export class Users {
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
  }
  fullName(){
    return this.name +' '+ this.lastName
  }
}

export class Admins {
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
  }
  fullName(){
    return this.name +' '+ this.lastName
  }
}