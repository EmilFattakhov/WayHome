const BASE_URL = 'http://localhost:3000/api/v1';

// requests

export const Pet = {
  index() {
    return fetch(`${BASE_URL}/pets`)
      .then(res => {
        return res.json();
      })
  },
  create(params) {
    return fetch(`${BASE_URL}/pets`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      return res.json();
    })
  },
  show(id) {
    return fetch(`${BASE_URL}/pets/${id}`)
      .then(res => res.json());
  },
  delete(id) {
    return fetch(`${BASE_URL}/pets/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(res => res.json());
  },
  update(params) {
    return fetch(`${BASE_URL}/pets/${params.id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}

export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    });
  },
  getCurrentUser() {
    return fetch(`${BASE_URL}/current_user`, {
      credentials: 'include'
    }).then(res => res.json());
  }
}

export const User = {

  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  
  }
}

export const Comment = {
  create(id, params) {
    return fetch(`${BASE_URL}/pets/${id}/comments`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

export const Location = {
  create(id, params) {
    return fetch(`${BASE_URL}/pets/${id}/locations`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

