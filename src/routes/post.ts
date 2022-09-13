import { FastifyPluginAsync } from 'fastify'

const post: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/post', async function (request, reply) {
    return "i post";
  })
}

export default post;
