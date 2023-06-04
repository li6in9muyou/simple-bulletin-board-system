<script>
	import Piece from '$components/Piece.svelte';
	import CommentInput from '$components/CommentInput.svelte';
	export let data;
</script>

<ul class="list-group px-1">
	{#each data.comments as comment}
		<Piece {comment} />
	{/each}
</ul>

<CommentInput />
