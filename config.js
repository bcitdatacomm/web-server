module.exports = {
  // TODO: Move secret to ENV variable
  // Current secret is just random hex.
  // Generated with:
  // node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
  'secret': '046d10868ccba27ef446b2b23d4ca5e9af1ed937485680294862ad121c3cd2c0',
  'database': 'mongodb://admin:testpass@localhost:27017/highnoon'
};