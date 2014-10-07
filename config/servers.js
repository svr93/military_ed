// config/servers.js

module.exports = {
  www: {
    protocol: 'http',
    address:  '0.0.0.0',
    port:     80,
    nagle:    true, // Nagle algorithm, default true, set to false for latency optimization
    slowTime: '1s'
  },
};
