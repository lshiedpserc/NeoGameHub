<script lang="ts">
	let { data } = $props();

	let gameUrl = $derived(`/game-content/${data.game.uniqueId}/index.html`);
</script>

<main
	class="max-w-container-max px-margin-mobile md:px-margin-desktop pb-section-gap mx-auto w-full flex-grow pt-20"
>
	<section class="mt-stack-lg mb-stack-lg">
		<div
			class="glass-panel neon-glow-blue bg-surface-container-lowest relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl"
		>
			<iframe
				src={gameUrl}
				class="h-full w-full border-none"
				title={data.game.title}
				allow="fullscreen; autoplay; gamepad"
			></iframe>
		</div>
	</section>

	<div class="gap-gutter mb-section-gap grid grid-cols-1 lg:grid-cols-3">
		<div class="space-y-stack-md lg:col-span-2">
			<div>
				<h1 class="font-headline-xl text-headline-xl text-on-surface neon-text-blue mb-2">
					{data.game.title}
				</h1>
				<div class="mb-4 flex items-center gap-4">
					{#if data.game.genre}
						<span
							class="glass-panel font-label-md text-label-md text-primary-fixed-dim rounded-full px-3 py-1"
							>{data.game.genre}</span
						>
					{/if}
					<span class="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
						<span
							class="material-symbols-outlined text-sm"
							style="font-variation-settings: 'FILL' 1;">play_arrow</span
						>
						{data.game.playCount + 1}
					</span>
				</div>

				<div class="mb-6 flex items-center gap-3">
					<div
						class="bg-surface-container-high text-outline flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
					>
						<span class="material-symbols-outlined">person</span>
					</div>
					<div>
						<p class="font-body-sm text-body-sm text-on-surface-variant">開発元</p>
						<p class="font-body-md text-body-md text-on-surface font-bold">
							{data.game.user ? data.game.user.username : data.game.authorName || 'Anonymous'}
						</p>
					</div>
				</div>

				<p class="font-body-lg text-body-lg text-on-surface-variant whitespace-pre-line">
					{data.game.description || '説明はありません。'}
				</p>
			</div>
		</div>

		<div class="space-y-stack-md">
			<div class="glass-panel group relative overflow-hidden rounded-xl p-6">
				<div
					class="bg-primary-fixed-dim/5 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>
				<h3
					class="font-headline-md text-headline-md text-on-surface border-outline-variant/30 mb-4 border-b pb-2"
				>
					ターミナルリンク
				</h3>
				<button
					class="bg-primary-fixed-dim text-background font-label-md text-label-md hover:bg-primary-fixed neon-glow-blue shadow-primary-fixed-dim/20 flex w-full items-center justify-center gap-2 rounded-lg py-4 shadow-lg transition-colors"
				>
					<span class="material-symbols-outlined">share</span>
					スコアをネットワークに送信
				</button>
			</div>

			<div class="glass-panel rounded-xl p-4">
				<p
					class="font-label-sm text-label-sm text-on-surface-variant mb-2 tracking-widest uppercase"
				>
					SNSプレビュー
				</p>
				<div
					class="border-outline-variant/20 bg-surface-container-low overflow-hidden rounded-lg border"
				>
					<div class="bg-surface-container-highest relative flex h-32 items-center justify-center">
						{#if data.game.coverImage}
							<img
								src={data.game.coverImage}
								alt="OGP Preview"
								class="h-full w-full object-cover opacity-80 mix-blend-luminosity"
							/>
						{:else}
							<span class="material-symbols-outlined text-outline text-4xl">image</span>
						{/if}
					</div>
					<div class="p-3">
						<h4 class="font-body-md text-body-md text-on-surface truncate font-bold">
							{data.game.title}
						</h4>
						<p class="font-label-sm text-label-sm text-primary-fixed-dim truncate">
							neogame.com/p/{data.game.uniqueId}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
