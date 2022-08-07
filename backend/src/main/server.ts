import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helpers';
import env from './config/env';

console.log(`MONGO URL: ${env.mongoUrl}`);
MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default;

    app.listen(env.appPort ?? 5050, () =>
      console.log(`Server running at http://localhost:${env.appPort}`),
    );
  })
  .catch(err => {
    console.log(err);
  });
