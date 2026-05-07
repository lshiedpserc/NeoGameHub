import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const game = await prisma.game.findUnique({
		where: { uniqueId: params.id },
		include: { user: true }
	});

	if (!game) {
		throw redirect(302, '/');
	}

	// Update play count
	await prisma.game.update({
		where: { id: game.id },
		data: { playCount: { increment: 1 } }
	});

	return { game };
};
