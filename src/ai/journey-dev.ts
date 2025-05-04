import { JourneyPlanner } from './journey-planner';

const planner = new JourneyPlanner();

const destination = await planner.generateDestination('Paris', 'romantic', 7);

console.log(destination);