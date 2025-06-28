import { initDeleteUser } from '../auth/userPermissions.js';
import { updateUserAccess } from '../auth/userPermissions.js';

//render UI exclusive to admin/owner
export const adminUI = (usersData) => {
  firstCard.innerHTML = '';
  for (const email in usersData) {
    if (email !== 'issamstt@gmail.com') {
      const user = usersData[email];
      const p = document.createElement('p');
      const btnDiv = document.createElement('div')
      const deleteUserBtn = document.createElement('button');
      const giveAdminAccessBtn = document.createElement('button');
      const removeAdminAccessBtn = document.createElement('button');
      const hr = document.createElement('hr');

      btnDiv.classList.add('btnAdminContainer');

      p.textContent = `User: ${user.name} (${email})`;
      deleteUserBtn.textContent = 'Delete User';
      giveAdminAccessBtn.textContent = 'Give Access';
      removeAdminAccessBtn.textContent = 'Remove Access';

      btnDiv.append(deleteUserBtn, giveAdminAccessBtn, removeAdminAccessBtn);
      firstCard.append(p, btnDiv, hr); 

      deleteUserBtn.addEventListener('click', () => {
        initDeleteUser(email);
      })
      giveAdminAccessBtn.addEventListener('click', () => {
        updateUserAccess(email, 'admin');
      })
      removeAdminAccessBtn.addEventListener('click', () => {
        updateUserAccess(email, 'user');
      })
    }
  }
}