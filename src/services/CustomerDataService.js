import http from "../http-common";

class CustomerDataService {
  getAll(params) {
    return http.get("/customers", { params });
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/customers/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }
}

export default new CustomerDataService();
