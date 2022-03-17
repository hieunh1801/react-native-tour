const randomString = () => {
  return (
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Date.now().toString()
  );
};

export default randomString;
