const {
  login,
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require('./apiHelper');

// //access token alıp request atabilmek için burada dönen bilgileri kullanıyoruz
// login('test@gmail.com', '12345test')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//alınan token ile işlem yapabilmek için
// login('test@gmail.com', '12345test')
//   .then(async (data) => {
//     if (data.access_token) {
//       let response = await getUserById(true, data.access_token,'635b80b75722565e2226d187');
//       console.log(response);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//post işlemi
// addUser(
//   'sampleUser@gmail.com',
//   'test12345',
//   'test kullanıcı',
//   'test soyadı',
//   55
// )
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //put işlemi
// login('test@gmail.com', '12345test')
//   .then(async (data) => {
//     if (data.access_token) {
//       let response = await updateUser(
//         'sampleUser@gmail.com',
//         'test kullanıcı updated',
//         'test soyadı',
//         55,
//         '635b8be3cf57d1f22f1cb910',
//         data.access_token
//       );
//       console.log(response);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//delete işlemi
// login('test@gmail.com', '12345test')
//   .then(async (data) => {
//     if (data.access_token) {
//       let response = await deleteUser(
//         '635b8be3cf57d1f22f1cb910',
//         data.access_token
//       );
//       console.log(response);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });
