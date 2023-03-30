export const ssr = false;

import PocketBase from 'pocketbase';

export async function load() {
	const pb = new PocketBase('https://stocky-candle.pockethost.io');
	const commentsModel = pb.collection('comments');
	return {
		comments: (await commentsModel.getList(1, 20, { expand: 'isVerified' })).items
	};
}
