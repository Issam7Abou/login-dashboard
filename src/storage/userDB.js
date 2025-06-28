// ─── Users CRUD ────────────────────────────────────────────────────────────────
export const setToLocalStorage = (user) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    users[user.email] = user;
    localStorage.setItem('users', JSON.stringify(users));
    userLoggedIn(user);
}

export const getUserData = (userEmail) => {
  const users = JSON.parse(localStorage.getItem('users'));
  if (userEmail) {
    return users[userEmail] || null;
  }
  return Object.keys(users).length > 0 ? users : null;
}

export const deleteUser = (userEmail) => {
  const users = JSON.parse(localStorage.getItem('users')) || {};
  delete users[userEmail];
  localStorage.setItem('users', JSON.stringify(users));
}

// ─── Auth (login/logout) ───────────────────────────────────────────────────────
export const userLoggedIn = (user) => {
    localStorage.setItem('userLoggedIn', JSON.stringify(user));
}

export const getUserLoggedIn = () => {
  const userLoggedIn = localStorage.getItem('userLoggedIn');
  return userLoggedIn ? JSON.parse(userLoggedIn) : null;
}

export const logoutUser = () => {
  localStorage.removeItem('userLoggedIn');
}

// ─── Permissions ──────────────────────────────────────────────────────────────
export const usersInitialPermissions = (userPermissions) => {
  const existing = JSON.parse(localStorage.getItem('userPermissions'));
  if (existing && Object.keys(existing).length > 0) return;
  localStorage.setItem('userPermissions', JSON.stringify(userPermissions || {}));
}

export const setUserPermission = (userEmail, permission) => {
  const usersPermissions = JSON.parse(localStorage.getItem('userPermissions')) || {};
  console.log('userBD.js - ANTES de mudar permission', usersPermissions);
  usersPermissions[userEmail] = permission;
  console.log('userBD.js - DEPOIS de mudar permission', usersPermissions);
  localStorage.setItem('userPermissions', JSON.stringify(usersPermissions));
}

export const getUserPermissions = (userEmail) => {
  const userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
  return userPermissions[userEmail];
}

export const deleteUserPermission = (userEmail) => {
  const usersPermissions = JSON.parse(localStorage.getItem('userPermissions')) || {};
  delete usersPermissions[userEmail];
  localStorage.setItem('userPermissions', JSON.stringify(usersPermissions));
}