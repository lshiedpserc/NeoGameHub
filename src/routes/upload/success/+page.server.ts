import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals }) => {
	const id = url.searchParams.get('id');
	const secret = url.searchParams.get('secret');

	if (!id) {
		throw redirect(302, '/');
	}

	const game = await prisma.game.findUnique({
		where: { uniqueId: id }
	});

	if (!game) {
		throw redirect(302, '/');
	}

	return {
		game,
		secret,
		user: locals.user
	};
};
