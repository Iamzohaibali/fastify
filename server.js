const fastify = require('fastify')({ logger: true })

fastify.get('/', async () => {
  return { message: 'Fastify server is running' }
})

// Useful GET route - get current server time
fastify.get('/time', async () => {
  return {
    timestamp: Date.now(),
    date: new Date().toLocaleString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }
})

// Another useful route - get server information
fastify.get('/info', async () => {
  return {
    name: 'Fastify Server',
    version: '1.0.0',
    nodeVersion: process.version,
    platform: process.platform,
    memoryUsage: process.memoryUsage().rss / 1024 / 1024, // MB
    uptime: process.uptime() // seconds
  }
})

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3001
    await fastify.listen({ port, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()