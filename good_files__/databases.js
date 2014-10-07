// applications/main/config/databases.js

module.exports = {
    pgsqlConnection: {
      url: 'postgres://mil_svr93:39rvs_lim@localhost:5432/military', // connection string (required)
      slowTime: 1000,                                    // time to log query as slow (optional, default: '2s', in milliseconds or string like '5s')
    }
};
