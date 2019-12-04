const api = 'http://localhost:8080/java-cloud/v1';

export const environment = {
  production: false,
  vehicle: {
    all: `${api}/vehicle/all`,
    save: `${api}/vehicle/save`,
    edit: `${api}/vehicle/update`,
    byId: `${api}/vehicle/`,
    delete: `${api}/vehicle/delete`
  },
  vehicle_type: {
    all: `${api}/vehicle-type/all`,
    save: `${api}/vehicle-type/save`,
    edit: `${api}/vehicle-type/update`,
    byId: `${api}/vehicle-type/`,
    delete: `${api}/vehicle-type/delete`
  }
};
