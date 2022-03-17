// const uuidGenerator = (length = 20) => {
//   for (
//     var s = '';
//     s.length < length;
//     s += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(Math.random() * 62 || 0)
//   );
//   return s;
// };

const randomString = () => {
  return (
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Date.now().toString()
  );
};

export default randomString;

// export default uuidGenerator;
