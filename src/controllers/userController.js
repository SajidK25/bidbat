import UserView from '../views/userView.js';

class UserController {
  constructor() {
    this.userView = new UserView(document.querySelector('#user-container'));
  }

  async getUsers() {
    try {
      const response = await fetch('/api/v1/auction/users');
      const users = await response.json();
      this.userView.render(users);
    } catch (error) {
      console.error(error);
    }
  }

  async createUser(user) {
    try {
      const response = await fetch('/api/v1/auction/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const newUser = await response.json();
      console.log('User created:', newUser);
    } catch (error) {
      console.error(error);
    }
  }

  async updateUser(id, user) {
    try {
      const response = await fetch(`/api/v1/auction/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const updatedUser = await response.json();
      console.log('User updated:', updatedUser);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(id) {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(`/api/v1/auction/users/${id}`, {
        method: 'DELETE',
      });
      console.log('User deleted:', id);
    } catch (error) {
      console.error(error);
    }
  }
}

export default UserController;
