const api = 'http://ec2-3-83-15-79.compute-1.amazonaws.com:8080/java-cloud/v1';

export const environment = {
  production: true,
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
