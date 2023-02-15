import {faker} from '@faker-js/faker';

export class RouteService {

  /**
   * Simulated server-side retrieval of route records from a database.
   *
   * @param {Object} filters
   * @returns {Promise<{summary: string, image: string, distance: {kilometers, miles: number}, created_at: Date, id: string, title: string, vehicle: {model: string, type: string, manufacturer: string}}[]>}
   */
  async fetchRoutes(filters = {}) {
    faker.seed(parseInt(filters?.page) || 1);

    let results = [];

    results = Array.from({length: 10}, () => {
      const distance = faker.datatype.number({min: 5, max: 50});

      return {
        id: faker.datatype.uuid(),
        title: faker.lorem.words(5),
        summary: faker.lorem.paragraph(4),
        distance: {
          miles: distance,
          kilometers: distance * 1.6,
        },
        vehicle: {
          type: faker.vehicle.type(),
          manufacturer: faker.vehicle.manufacturer(),
          model: faker.vehicle.model(),
        },
        image: faker.image.transport(240, 180, true),
        created_at: faker.date.recent()
      };
    });

    if (filters?.type) {
      results = results.filter((result) => this.#isValueInFilter(filters.type, result.vehicle.type));
    }

    if (filters?.manufacturer) {
      results = results.filter((result) => this.#isValueInFilter(filters.manufacturer, result.vehicle.manufacturer));
    }

    if (filters?.model) {
      results = results.filter((result) => this.#isValueInFilter(filters.model, result.vehicle.model));
    }

    return results;
  }

  /**
   * Return available values for populating filters
   *
   * @returns {Promise<{models: string[], types: string[], manufacturers: string[]}>}
   */
  async fetchFilters() {
    return {
      manufacturers: faker.definitions.vehicle.manufacturer,
      models: faker.definitions.vehicle.model,
      types: faker.definitions.vehicle.type,
    }
  }

  /**
   * Parse CSV query string parameters and check existence of value
   *
   * @param {String} filterValue
   * @param {String} checkValue
   *
   * @private
   *
   * @returns {boolean}
   */
  #isValueInFilter(filterValue, checkValue) {
    return (filterValue ? filterValue.split(',') : []).includes(checkValue)
  }

}
