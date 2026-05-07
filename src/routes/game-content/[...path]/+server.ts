import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import mime from 'mime';

export const GET = async ({ params }) => {
	try {
		const filePath = path.join(process.cwd(), 'uploads', params.path);

		// Basic security check to prevent directory traversal
		if (!filePath.startsWith(path.join(process.cwd(), 'uploads'))) {
			throw error(403, 'Forbidden');
		}

		const fileContent = await fs.readFile(filePath);
		const mimeType = mime.getType(filePath) || 'application/octet-stream';

		return new Response(fileContent, {
			headers: {
				'Content-Type': mimeType,
				'Cache-Control': 'public, max-age=3600',
				// Sandbox headers for security
				'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:;"
			}
		});
	} catch (err) {
		console.error('File serving error:', err);
		throw error(404, 'Not found');
	}
};
