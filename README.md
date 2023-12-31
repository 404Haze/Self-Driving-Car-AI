# Artificial Intelligence Self-Driving Car Simulation

Welcome to my Self-Driving Car AI project! This project is a part of a course taught by Professor Radu Mariescu-Istodor. Here, following his course, I have created a feedforward neural network and a traffic environment capable of running accurate self-driving car simulations. In this README file, I will explain an overview of the project's components and how they come together to create a neural network-based self-driving car simulation.

## Table of Contents

1. [Introduction](#introduction)
2. [Simulation](#simulation)
3. [Functionality](#functionality)
4. [Network Components](#components) 
5. [Files](#files)
6. [Getting Started](#getting-started)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction<a name="introduction"></a>

In this project, you will be able to see this neural network's ability to make driving decisions based on sensory input. You will also be able to see a live visualization of the neural network's inner workings, where you will be able to notice connections, weights, and biases.

### Key Definitions

- **Connections:** Connections encompass both weights and biases. They define how neurons are linked and how signals flow through the neural network.
- **Weights:** Weights are values that determine the strength of connections between neurons. They influence how much one neuron affects another in decision-making.
- **Biases:** Biases are constants added to neuron inputs. They enable neurons to capture complex patterns by shifting the input-output relationship.

## Simulation<a name="simulation"></a>

The simulation includes the following features:

- **Traffic**: Simulates interactions with other vehicles on the road.
- **Parallel Simulations**: Runs multiple cars simultaneously to train the network.
- **Mutations**: Experiment with different neural network architectures and settings by introducing low, normal, or high mutation rates.
- **Save Brain**: Save the neural network's parameters for future use or analysis.
- **Discard Brain**: Delete the saved neural network.

## Functionality<a name="functionality"></a>

When you load in the project, 200 cars will be generated by default, each with a randomized neural network. Your screen will follow the most successful car and show its neural network schematic on the right. Once you save the most successful car, the next simulation you run will contain  the original neural network that you saved and 199 mutated versions of it. You may notice 6 buttons between the simulation and the network visualization, these are used to control the "evolution" of your cars.

### Main buttons:

- 🧬 Launch a new simulation. 
- 💾 Save the current selected car's neural network to local storage.
- 🗑️ Delete the current saved neural network in your local storage.

### Mutation control: 

- ⬆️ High neural network mutation. (More randomized cars)
- ↔️ Normal neural network mutation. (Recommended mutation potency)
- ⬇️ Low neural network mutation. (More similar cars)

## Network Components<a name="components"></a>

### Feedforward Neural Network Chart
![The structure of the two-layered feed-forward neural network.](https://media.discordapp.net/attachments/1153814448524492811/1154787635840163910/Feedforward_Diagram.png?width=1345&height=881)

### Input Layer

The self-driving car takes object proximity inputs from sensors, simulating the data a real car would gather from its surroundings.

### Hidden Layer

These represent the neural network's hidden layers, where complex computations occur to make driving decisions.

### Output Layer

The outputs of neural network correspond to the actions the car takes, such as steering, accelerating, and braking.

## Files<a name="files"></a>

The project is organized into several files and directories:

- **car.js**: Manages the car's properties including collision detection, movement, etc.
- **controls.js**: Handles control type (player or AI) input for controlling the car. 
- **index.html**: The main HTML file that displays the simulation.
- **main.js**: The main JavaScript file that initializes and runs the simulation.
- **network.js**: Contains the neural network implementation.
- **road.js**: Defines the road environment with lanes.
- **sensor.js**: Implements sensor and data collection.
- **style.css**: Styles the visual elements of the simulation.
- **utils.js**: Utility functions used throughout the project.
- **visualizer.js**: Manages the visualization of the neural network.

## Getting Started<a name="getting-started"></a>

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Open `index.html` in a web browser to launch the simulation.
3. Use the buttons provided to interact with the simulation and experiment with the AI.

## Contributing<a name="contributing"></a>

I welcome contributions and suggestions from the community. If you have ideas for improvements, new features, or bug fixes, please feel free to open an issue or submit a pull request.

## License<a name="license"></a>

This project is licensed under the [MIT License](LICENSE.md). You are free to use, modify, and distribute this software.
