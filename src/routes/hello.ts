import { FastifyPluginAsync } from 'fastify'

const hello: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/hello', async function (request, reply) {
    console.log(request); // https://www.fastify.io/docs/latest/Reference/Request/
    return { hello: "hello word from hello route" }
  })
}

export default hello;
