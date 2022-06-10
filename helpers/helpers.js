module.exports = {
    heatLoss: function async(floorArea, heatingFactor, insulationFactor) {
      if(floorArea < 0 || heatingFactor < 0 || insulationFactor < 0){
        return 'Please enter a positive number'
      }
      return floorArea * heatingFactor * insulationFactor;
    },
    suitablePump: function async(pumps, powerLoss) {
      const capacity = pumps
        .filter((pump) => {
          if (powerLoss <= pump.outputCapacity) {
            return pump;
          }
        })
        .reduce((acc, cur) => {
          return acc.outputCapacity < cur.outputCapacity ? acc : cur;
        }, 0);
      return capacity;
    },
    totalCost: function async (pump) {
  
      let total = pump.reduce((acc, cur) => {
       return acc + cur.cost
     },0);
     return total
    },
  };