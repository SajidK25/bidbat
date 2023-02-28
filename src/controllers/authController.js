import authView from '../views/authView.js';

class AuthController {
  constructor() {
    this.authView = new authView(document.querySelector('#auth-container'));
  }

  async register(name, email, password, avatar) {
    try {
      const response = await fetch('/api/v1/social/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          avatar: avatar,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        this.authView.showSuccessMessage('Registration successful');
      } else {
        this.authView.showErrorMessage(data.errors[0].message);
      }
    } catch (error) {
      console.error(error);
      this.authView.showErrorMessage('Error: Failed to register');
    }
  }

  async login(email, password) {
    try {
      const response = await fetch('/api/v1/social/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        this.authView.showSuccessMessage('Login successful');
      } else {
        this.authView.showErrorMessage(data.errors[0].message);
      }
    } catch (error) {
      console.error(error);
      this.authView.showErrorMessage('Error: Failed to login');
    }
  }

  async logout() {
    try {
      const response = await fetch('/api/v1/social/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        this.authView.showSuccessMessage('Logout successful');
      } else {
        this.authView.showErrorMessage('Error: Failed to logout');
      }
    } catch (error) {
      console.error(error);
      this.authView.showErrorMessage('Error: Failed to logout');
    }
  }
}

export default AuthController;
