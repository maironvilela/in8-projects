export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://root:123@localhost:27017/admin',
  appPort: process.env.PORT ?? 5050,
};
