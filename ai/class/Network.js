
const Neuron = require('./Neuron');

module.exports = class Network {
  neurons = [];
  maxID = 0;

  /**
   * @constructor
   * @param {Number} netSize 
   * @example
   * const network = new Network(10); // Creates a Network with 10 Neurons
   */
  constructor(netSize){
    for (let i = 0; i < netSize; i++) this.neurons.push(new Neuron(i));
    this.maxID = netSize;
  };

  /**
   * @function
   * @returns {void}
   * @example
   * const network = new Network(10);
   * 
   * network.appendNeuron(); // Adds Neuron with a unique id
   */
  appendNeuron(){
    this.neurons.push(new Neuron(maxID));
    this.maxID++;
  };

  /**
   * @function
   * @returns {void}
   * @example
   * const network = new Network(10);
   * 
   * network.removeNeuron(4); // Removes Neuron with id 4
   */
  removeNeuron(id){
    if (id) delete this.neurons[id];
    else delete this.neurons[Math.floor(Math.random * this.neurons.length)];
  };

  /**
   * @function
   * @returns {void}
   * @example
   * const network = new Network(10);
   * 
   * network.mutate(); // Mutates Network (adds Neuron, remove Neuron, modify Neuron)
   */
  mutate(){
    switch (Math.floor(Math.random * 3)){
      case 0: // Add neuron
        this.appendNeuron();
        break;
      case 1: // Remove neuron
        this.removeNeuron();
        break;
      case 2: // Modify neuron (change weight)
      this.neurons[Math.floor(Math.random * this.neurons.length)].mutate();
        break;
    };
  };
};
