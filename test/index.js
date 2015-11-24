/* eslint-disable no-var */
var testAdapter = require('fortune/test/adapter');
var adapter = require('../lib');
var redis = require('fakeredis');

testAdapter(adapter, {
  createClientFactory() {
  	console.log('createClientFactory');
    return redis.createClient();
  },
});
