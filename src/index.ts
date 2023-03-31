import { AppDataSource } from './data-source';
import App from './App';

const PORT = 6060;

// Initializes the Datasource for TypeORM
AppDataSource.initialize()
  .then(async () => {
    // Express setup
    const app = App();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
  });
