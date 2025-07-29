const { createClient } = require('redis');

async function run() {
  const client = createClient();

  client.on('error', (err) => console.error('Redis Client Error', err));

  await client.connect();

  await client.set('name', 'deeksha');
  const value = await client.get('name');

  console.log('Stored value:', value);

  await client.disconnect();
}

run();
