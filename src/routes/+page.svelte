<script lang="ts">
	let { data } = $props();
</script>

<main
	class="max-w-container-max px-margin-mobile md:px-margin-desktop pb-section-gap gap-section-gap mx-auto flex w-full flex-grow flex-col pt-32"
>
	<section class="relative flex w-full flex-col items-center justify-center py-20">
		<div
			class="bg-primary-fixed-dim/5 pointer-events-none absolute inset-0 z-0 rounded-full blur-[120px]"
		></div>
		<a
			href="/upload"
			class="border-outline-variant hover:border-primary-fixed-dim bg-surface-container-highest/30 group relative z-10 flex w-full max-w-4xl cursor-pointer flex-col items-center justify-center gap-8 rounded-3xl border-2 border-dashed p-16 backdrop-blur-2xl transition-all duration-500 ease-out hover:shadow-[0_0_80px_rgba(0,219,233,0.15)]"
		>
			<div
				class="bg-surface-container-high border-outline-variant/30 group-hover:bg-primary-fixed-dim/20 group-hover:border-primary-fixed-dim/50 flex h-24 w-24 items-center justify-center rounded-full border transition-all duration-300"
			>
				<span
					class="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed-dim text-4xl transition-colors"
					style="font-variation-settings: 'FILL' 1;">cloud_upload</span
				>
			</div>
			<div class="flex flex-col gap-4 text-center">
				<h1 class="font-headline-xl text-headline-xl text-on-surface">
					ゲームをここにドロップして即座にデプロイ
				</h1>
				<p class="font-body-lg text-body-lg text-on-surface-variant">
					HTML5ゲームを含むZIPファイルをアップロードしてください。残りは私たちが対応します。
				</p>
			</div>
			<button
				class="bg-primary-fixed-dim text-background font-label-md text-label-md rounded-full px-8 py-4 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,219,233,0.3)] active:scale-95"
			>
				ファイルを参照
			</button>
		</a>
	</section>

	<section class="gap-stack-lg flex flex-col">
		<div class="border-outline-variant/20 flex items-end justify-between border-b pb-4">
			<h2 class="font-headline-lg text-headline-lg text-on-surface">トレンド</h2>
			<a
				class="font-label-md text-label-md text-primary-fixed-dim flex items-center gap-2 underline-offset-4 hover:underline"
				href="/games"
				>すべて見る <span class="material-symbols-outlined text-sm">arrow_forward</span></a
			>
		</div>

		<div class="gap-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#if data.trendingGames.length === 0}
				<!-- Fallbacks if no games -->
				<div
					class="group bg-surface-container-high border-outline-variant/20 relative h-[400px] overflow-hidden rounded-xl border transition-transform duration-300 hover:scale-[1.02]"
				>
					<div
						class="from-primary-fixed-dim/20 to-surface-container absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br"
					>
						<span class="material-symbols-outlined text-primary-fixed-dim/50 text-6xl"
							>sports_esports</span
						>
					</div>
					<div
						class="from-background via-background/50 absolute inset-0 z-10 bg-gradient-to-t to-transparent"
					></div>
					<div
						class="bg-surface-container-highest/20 border-outline-variant/20 absolute bottom-0 z-20 flex w-full translate-y-2 transform flex-col gap-4 border-t p-6 backdrop-blur-xl transition-transform duration-300 group-hover:translate-y-0"
					>
						<div class="flex items-start justify-between">
							<div>
								<h3 class="font-headline-md text-headline-md text-on-surface">Neon Overdrive</h3>
								<p class="font-body-sm text-body-sm text-on-surface-variant">
									by SynthWave Studios
								</p>
							</div>
							<div
								class="bg-secondary-fixed-dim/10 border-secondary-fixed-dim/30 font-label-sm text-label-sm text-secondary-fixed-dim rounded-full border px-3 py-1"
							>
								レーシング
							</div>
						</div>
						<a
							href="/p/demo"
							class="border-outline-variant/50 font-label-md text-label-md text-on-surface hover:bg-surface-variant hover:border-outline-variant flex w-full items-center justify-center gap-2 rounded-lg border py-3 transition-colors"
						>
							<span
								class="material-symbols-outlined text-sm"
								style="font-variation-settings: 'FILL' 1;">play_arrow</span
							> 今すぐプレイ
						</a>
					</div>
				</div>
			{:else}
				{#each data.trendingGames as game (game.id)}
					<div
						class="group bg-surface-container-high border-outline-variant/20 relative h-[400px] overflow-hidden rounded-xl border transition-transform duration-300 hover:scale-[1.02]"
					>
						{#if game.coverImage}
							<img
								src={game.coverImage}
								alt={game.title}
								class="absolute inset-0 z-0 h-full w-full object-cover"
							/>
						{:else}
							<div
								class="from-primary-fixed-dim/20 to-surface-container absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br"
							>
								<span class="material-symbols-outlined text-primary-fixed-dim/50 text-6xl"
									>sports_esports</span
								>
							</div>
						{/if}
						<div
							class="from-background via-background/50 absolute inset-0 z-10 bg-gradient-to-t to-transparent"
						></div>
						<div
							class="bg-surface-container-highest/20 border-outline-variant/20 absolute bottom-0 z-20 flex w-full translate-y-2 transform flex-col gap-4 border-t p-6 backdrop-blur-xl transition-transform duration-300 group-hover:translate-y-0"
						>
							<div class="flex items-start justify-between">
								<div>
									<h3 class="font-headline-md text-headline-md text-on-surface">{game.title}</h3>
									<p class="font-body-sm text-body-sm text-on-surface-variant">
										by {game.user ? game.user.username : game.authorName || 'Anonymous'}
									</p>
								</div>
								{#if game.genre}
									<div
										class="bg-primary-fixed-dim/10 border-primary-fixed-dim/30 font-label-sm text-label-sm text-primary-fixed-dim rounded-full border px-3 py-1"
									>
										{game.genre}
									</div>
								{/if}
							</div>
							<a
								href="/p/{game.uniqueId}"
								class="border-outline-variant/50 font-label-md text-label-md text-on-surface hover:bg-surface-variant hover:border-outline-variant flex w-full items-center justify-center gap-2 rounded-lg border py-3 transition-colors"
							>
								<span
									class="material-symbols-outlined text-sm"
									style="font-variation-settings: 'FILL' 1;">play_arrow</span
								> 今すぐプレイ
							</a>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</section>
</main>
