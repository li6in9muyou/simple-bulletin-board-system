<script>
	import Piece from '$components/Piece.svelte';
	export let data;
</script>

<ul class="list-group px-1">
	{#each data.comments as comment}
		<Piece {comment} />
	{/each}
</ul>
