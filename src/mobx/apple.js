import { action, computed, observable } from 'mobx'
class AppleMobx {
  @observable 
  apples = [    
    {
    id: 0,
    weight: 233,
    isEaten: false
    },
    {
      id: 1,
      weight: 235,
      isEaten: true
    },
    {
      id: 2,
      weight: 256,
      isEaten: false
    }
  ]
  @observable eatApples = []
  @action getApplesLenght = () => {
    return this.apples.length
  }
  @computed getApplesWeight = () => {
    let sum = 0
    this.apples.forEach( fruit => {
      sum += fruit.weight
    })
    return sum
  }
  @action getEatApplesLenght = () => {
    return this.eatApples.length
  }
  @computed getEatApplesWeight = () => {
    let sum = 0
    this.eatApples.forEach( fruit => {
      sum += fruit.weight
    })
    return sum
  }
  @action eatApplesHandle = (id) => {
    this.apples.splice(id -1, 1)
    console.log(this.apples)
  }
}

const store = new AppleMobx()

export default store