
const Network = require('./Network');

module.exports = class Population {
  networks = [];

  /**
   * @constructor
   * @param {Number} popSize 
   * @param {Number} netSize 
   * @example
   * const population = new Population(10, 5); // Create a population with 10 Networks of 5 Neurons each
   */
  constructor(popSize, netSize) {
    for (let i = 0; i < popSize; i++) this.networks.push(new Network(netSize));
  };
};
