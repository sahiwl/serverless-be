export interface Env{

}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			message: "Hi there warm-blooded mammals!"
		})
	},
} satisfies ExportedHandler<Env>;
