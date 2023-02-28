class UserView {
  constructor(container) {
    this.container = container;
  }

  render(users) {
    let html = '';
    users.forEach((user) => {
      html += `
        <div class="user">
          <h2>${user.name}</h2>
          <p>Email: ${user.email}</p>
        </div>
      `;
    });
    this.container.innerHTML = html;
  }
}

export default UserView;
