const fastify = require('fastify')({ logger: true })

fastify.get('/', async () => {
  return { message: 'Fastify server is running' }
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
