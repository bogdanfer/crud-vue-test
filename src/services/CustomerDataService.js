import http from "../http-common";

class CustomerDataService {
  getAll(params) {
    return http.get("/customers", { params });
  }

  get(id) {
    return http.get(`/customers/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/customers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/customers/${id}`);
  }
}

export default new CustomerDataService();
