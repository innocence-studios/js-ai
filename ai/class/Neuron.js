
const getWeight = require('../function/getWeight');

module.exports = class Neuron {
  id;
  weight;

  /**
   * @constructor
   * @param {Number} ID 
   */
  constructor(ID){
    this.id = ID;
    this.weight = getWeight();
  };

  mutate(){
    this.weight = getWeight();
  };
};
