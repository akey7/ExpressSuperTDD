// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost:5432/express_super_tdd_dev'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/express_super_tdd_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
