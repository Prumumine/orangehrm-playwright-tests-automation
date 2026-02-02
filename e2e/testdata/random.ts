import { EmployeeDetails } from "./orangeHrmInterfaces";
import { faker } from "@faker-js/faker";

// compteur global, point de départ 398
let employeeCounter = 400;

export function getRandomEmployeeDetails(): EmployeeDetails {


  return {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
  };
}
