<script>
	import { onMount } from 'svelte';
	import PocketBase from 'https://cdn.jsdelivr.net/npm/pocketbase@0.10/dist/pocketbase.es.mjs';

	let pb, commentsModel;
	let domCommentSend = document.querySelector('[data-ssg-comment-send]');
	let domCommentVerificationChallenge = document.querySelector('[data-ssg-challenge]');
	let domCommentNickname = document.querySelector('[data-ssg-comment-nickname]');
	let domCommentText = document.querySelector('[data-ssg-comment-text]');

	function inputNickname() {
		return domCommentNickname.value;
	}

	function inputText() {
		return encodeURIComponent(domCommentText.value);
	}

	function verificationChallenge() {
		return domCommentVerificationChallenge.value;
	}

	function clearInput() {
		domCommentNickname.value = '';
		domCommentText.value = '';
	}

	function createUnverifiedComment() {
		pb.collection('is_comment_verified')
			.create({
				isVerified: false
			})
			.then((token) => {
				commentsModel.create({
					nickname: inputNickname(),
					text: inputText(),
					isVerified: token.id
				});
			})
			.catch(createUnverifiedComment);
	}

	function createVerifiedComment() {
		pb.collection('is_comment_verified')
			.create({
				challenge: verificationChallenge(),
				isVerified: true
			})
			.then((token) => {
				commentsModel.create({
					nickname: inputNickname(),
					text: inputText(),
					isVerified: token.id
				});
			})
			.catch(createUnverifiedComment);
	}

	onMount(() => {
		pb = new PocketBase('https://stocky-candle.pockethost.io');
		commentsModel = pb.collection('comments');
		domCommentSend = document.querySelector('[data-ssg-comment-send]');
		domCommentVerificationChallenge = document.querySelector('[data-ssg-challenge]');
		domCommentNickname = document.querySelector('[data-ssg-comment-nickname]');
		domCommentText = document.querySelector('[data-ssg-comment-text]');
		domCommentSend.addEventListener('click', (e) => {
			e.preventDefault();
			domCommentSend.disabled = true;
			try {
				if (verificationChallenge() === '') {
					createUnverifiedComment();
				} else {
					createVerifiedComment();
				}
			} catch (e) {
				console.warn('not implemented');
				console.warn(e);
			} finally {
				domCommentSend.disabled = false;
			}
		});
	});
</script>

<form class="p-2 my-0 sticky-bottom bg-light">
	<div class="row align-items-center w-100">
		<div class="col">
			<label for="username">网名</label>
			<input
				type="text"
				class="form-control"
				id="username"
				required
				minlength="1"
				maxlength="20"
				data-ssg-comment-nickname
			/>
		</div>
		<div class="col">
			<label for="auth-code">身份认证密码（可不填）</label>
			<input
				type="password"
				class="form-control"
				id="auth-code"
				minlength="1"
				maxlength="20"
				pattern="[0-9a-z]+"
				data-ssg-challenge
			/>
		</div>
		<div class="col">
			<label for="send-comment">确认发送</label>
			<button id="send-comment" type="submit" class="btn btn-primary w-100" data-ssg-comment-send>
				发送
			</button>
		</div>
	</div>
	<div class="form-group">
		<label for="comment-text">留言</label>
		<textarea
			data-ssg-comment-text
			class="form-control"
			id="comment-text"
			minlength="1"
			maxlength="200"
			required
		/>
	</div>
</form>
