<script>
	export let comment;

	const isAdmin = comment.isVerified !== '' && comment.expand.isVerified.isVerified;
</script>

<li class="list-group-item">
	<div class="d-flex justify-content-between">
		<div>
			<h6 class="mb-0 fw-bold">{comment.nickname}</h6>
			<small class="text-muted">
				{new Date(comment.created).toLocaleString()}
			</small>
		</div>
		<div>
			{#if isAdmin}
				<h6 class="badge bg-success rounded-pill">已认证身份</h6>
			{:else}
				<h6 class="badge bg-secondary rounded-pill">不可靠</h6>
			{/if}
		</div>
	</div>
	<pre style="white-space: pre-wrap;" class="fs-5 mt-2 mb-0">
{comment.text}
</pre>
</li>
