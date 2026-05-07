import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, '/login');
	}

	const games = await prisma.game.findMany({
		where: {
			userId: locals.user.id
		},
		orderBy: {
			updatedAt: 'desc'
		}
	});

	const totalPlays = games.reduce((acc, game) => acc + game.playCount, 0);

	return {
		user: locals.user,
		games,
		totalPlays
	};
};
