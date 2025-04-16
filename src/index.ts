export default {
  async fetch(request, env) {
    let url = new URL(request.url)
    const inputs = {
      prompt: url.searchParams.get('p')??'a cyberpunk dog'
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
