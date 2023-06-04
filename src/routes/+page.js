export const ssr = false;

import PocketBase from 'pocketbase';

export async function load() {
	const pb = new PocketBase('https://stocky-candle.pockethost.io');
	const commentsModel = pb.collection('comments');
	const comments = (await commentsModel.getList(1, 20, { expand: 'isVerified' })).items;
	const printableComment = (comment) => {
		comment.text = decodeURIComponent(comment.text);
	};
	comments.forEach(printableComment);
	return {
		comments
	};
}
