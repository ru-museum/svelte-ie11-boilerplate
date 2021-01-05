<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
  
	<h4>svelte-ie11-boilerplate</h4>
    
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p>この boilerplate は<a href="https://github.com/sveltejs/template">sveltejs/template</a> を基にしています.</p>
  
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

