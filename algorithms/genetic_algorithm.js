const GENES = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890,.-;:_!"#%&/()=?@\${[]}`;

// the target final answer
const TARGET = 'Genetic algorithms';

// Populational sample
const samples = 100;

let POPULATION = [];

const generate_cromosome = (cromo_length, genes) => {
    let cromosome = []
    for (let index = 0; index < cromo_length; index++) {
        cromosome.push(genes[roulette(genes.length)]);
    }
    return cromosome.join('');
}

// Used to generate random numbers to create cromosomes
const roulette = (ceil) => {
    return Math.floor(Math.random() * (ceil - 1));
};

// Function used to keep the variety of genes after some generations
// to prevent premature conversion
const mutation = (cromosome) => {
    let new_cromo = cromosome.cromo.split('');
    // 10% of mutation
    for (let index = 0; index <= Math.ceil(cromosome.cromo.length * 0.3); index++) {
        new_cromo[roulette(TARGET.length)] = GENES[roulette(GENES.length)];
    }

    return {
        cromo: new_cromo,
        score: cromosome.score
    };
}

const create_generation = (cromo_length) => {
    let population = [];

    for (let index = 0; index < samples; index++) {
        let cromo = generate_cromosome(cromo_length, GENES);
        let individual = {
            cromo,
            score: cromosome_score(cromo, TARGET)
        }
        population.push(mutation(individual));
    }

    return population.sort((a, b) => { a.score - b.score });
}

// Calculates the number of different letters from the offspring and cromosome target
const cromosome_score = (cromo, target) => {
    let score = 0;

    for (let index = 0; index < cromo.length; index++) {
        if (cromo[index] != target[index])
            score++;
    }
    return score
}

const mate = (father, mother) => {
    let offspring = '';
    let mutated_cromo = generate_cromosome(TARGET.length, GENES);

    for (let index = 0; index < TARGET.length; index++) {
        let crossover_prob = Math.random();

        if (crossover_prob < 0.45)
            offspring += mother.cromo[index]
        else if (crossover_prob >= 0.45 && crossover_prob <= 0.90)
            offspring += father.cromo[index]
        else
            offspring += mutated_cromo[index]
    }

    offspring = {
        cromo: offspring,
        score: cromosome_score(offspring, TARGET)
    }

    return offspring;
}

const offspring = () => {
    const population_fittest = POPULATION.length / 2
    let new_pop = [];

    for (let index = 0; index <= population_fittest; index++) {
        const offspring = mate(POPULATION[index], POPULATION[population_fittest - index]);
        new_pop.push(POPULATION[index], offspring);
    }

    return new_pop.sort((a, b) => a.score - b.score);
}

POPULATION = create_generation(TARGET.length);
let converved = false;
let generation = 0;

const main = () => {
    while (!converved) {
        const new_pop = offspring();
        POPULATION = new_pop;

        if (POPULATION[0].score === 0) {
            converved = true;
        }

        generation++;
        console.log(`generation: ${generation} string: ${POPULATION[0].cromo} fitness: ${POPULATION[0].score}`)
    }
}

main();
