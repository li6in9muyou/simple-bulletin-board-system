<nav class="navbar navbar-dark bg-dark sticky-top">
	<div class="container-fluid">
		<a href="" class="navbar-brand"> 公共留言板 </a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">评论区</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">功能开发中</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">功能开发中</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">功能开发中</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<main>
	<slot />
</main>

<svelte:head>
	<script
		defer
		type="text/javascript"
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
	></script>
	<link
		rel="preload"
		href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css"
		as="style"
	/>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css" />
</svelte:head>
