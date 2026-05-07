<script lang="ts">
	let { data } = $props();
</script>

<div class="max-w-container-max mx-auto flex h-screen w-full overflow-hidden pt-20">
	<aside
		class="py-stack-md px-stack-sm bg-surface-container-low/90 border-outline-variant/10 shadow-secondary/5 fixed top-0 left-0 z-40 mt-20 hidden h-screen w-64 flex-col border-r shadow-2xl backdrop-blur-2xl lg:flex"
	>
		<div class="mb-stack-lg mt-stack-md px-4">
			<h2 class="font-headline-md text-headline-md text-secondary">Developer Portal</h2>
			<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">NeoGame Hub v2.4</p>
		</div>
		<nav class="flex flex-1 flex-col gap-2">
			<a
				class="bg-secondary-container/20 text-secondary-fixed-dim border-secondary-container font-label-md text-label-md flex cursor-pointer items-center gap-3 rounded-lg border-l-4 px-4 py-3 transition-transform duration-200 hover:translate-x-1 active:opacity-80"
				href="/dashboard"
			>
				<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;"
					>folder_open</span
				>
				プロジェクト
			</a>
			<a
				class="text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-transform duration-200 hover:translate-x-1 active:opacity-80"
				href="/dashboard/analytics"
			>
				<span class="material-symbols-outlined">insights</span>
				アナリティクス
			</a>
			<a
				class="text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-transform duration-200 hover:translate-x-1 active:opacity-80"
				href="/dashboard/monetization"
			>
				<span class="material-symbols-outlined">payments</span>
				収益化
			</a>
			<a
				class="text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-transform duration-200 hover:translate-x-1 active:opacity-80"
				href="/dashboard/settings"
			>
				<span class="material-symbols-outlined">settings</span>
				設定
			</a>
		</nav>
		<div class="border-outline-variant/10 mt-auto border-t p-4">
			<a
				href="/upload"
				class="bg-primary-fixed-dim text-background font-label-md text-label-md neon-glow-primary flex w-full items-center justify-center gap-2 rounded-lg py-3 transition-all active:scale-95"
			>
				<span class="material-symbols-outlined text-sm">add</span>
				新規プロジェクト
			</a>
		</div>
	</aside>

	<main class="px-margin-mobile md:px-margin-desktop py-stack-lg flex-1 overflow-y-auto lg:ml-64">
		<div
			class="mb-stack-lg gap-stack-md flex flex-col items-start justify-between md:flex-row md:items-end"
		>
			<div>
				<h1 class="font-headline-lg text-headline-lg text-primary mb-2">
					おかえりなさい、{data.user.username}さん
				</h1>
				<p class="font-body-md text-body-md text-on-surface-variant">
					Here is the latest data for your indie titles.
				</p>
			</div>
			<a
				href="/upload"
				class="glass-panel border-primary-fixed-dim/30 text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-fixed-dim/10 flex items-center gap-2 rounded-lg px-6 py-3 transition-colors"
			>
				<span class="material-symbols-outlined">upload</span>
				Upload Update
			</a>
		</div>

		<div class="gap-gutter mb-section-gap grid grid-cols-1 md:grid-cols-3">
			<div class="glass-panel group relative overflow-hidden rounded-xl p-6">
				<div
					class="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20"
				>
					<span class="material-symbols-outlined text-primary-fixed-dim text-6xl"
						>sports_esports</span
					>
				</div>
				<p
					class="font-label-sm text-label-sm text-on-surface-variant mb-2 tracking-wider uppercase"
				>
					総プレイ数
				</p>
				<h3 class="font-headline-xl text-headline-xl text-primary neon-text-glow mb-4">
					{data.totalPlays}
				</h3>
			</div>

			<div class="glass-panel group relative overflow-hidden rounded-xl p-6">
				<div
					class="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20"
				>
					<span class="material-symbols-outlined text-secondary-fixed-dim text-6xl">group</span>
				</div>
				<p
					class="font-label-sm text-label-sm text-on-surface-variant mb-2 tracking-wider uppercase"
				>
					公開プロジェクト数
				</p>
				<h3 class="font-headline-xl text-headline-xl text-secondary mb-4">{data.games.length}</h3>
			</div>
		</div>

		<div class="gap-gutter mb-section-gap grid grid-cols-1 lg:grid-cols-3">
			<div class="glass-panel flex flex-col rounded-xl p-6 lg:col-span-2">
				<div class="mb-stack-md flex items-center justify-between">
					<h2 class="font-headline-md text-headline-md text-primary">マイプロジェクト</h2>
					<button class="text-primary-fixed-dim font-label-md text-label-md text-sm hover:underline"
						>View All</button
					>
				</div>
				<div class="flex flex-col gap-4">
					{#if data.games.length === 0}
						<div class="text-on-surface-variant font-body-sm py-8 text-center">
							まだプロジェクトがありません。<a
								href="/upload"
								class="text-primary-fixed-dim hover:underline"
								>最初のゲームをアップロードしましょう！</a
							>
						</div>
					{/if}

					{#each data.games as game (game.id)}
						<div
							class="bg-surface-container-low/50 border-outline-variant/10 hover:bg-surface-container-high/50 group flex items-center justify-between rounded-lg border p-4 transition-colors"
						>
							<div class="flex items-center gap-4">
								<div
									class="bg-surface-container relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-md"
								>
									{#if game.coverImage}
										<img
											src={game.coverImage}
											alt={game.title}
											class="h-full w-full object-cover"
										/>
									{:else}
										<span class="material-symbols-outlined text-outline">sports_esports</span>
									{/if}
									<div
										class="bg-background/20 absolute inset-0 transition-colors group-hover:bg-transparent"
									></div>
								</div>
								<div>
									<h4 class="font-label-md text-label-md text-on-surface mb-1 text-base">
										{game.title}
									</h4>
									<div class="flex items-center gap-2">
										<span
											class="font-label-sm text-label-sm text-primary-fixed-dim bg-primary-fixed-dim/10 border-primary-fixed-dim/20 rounded-full border px-2 py-0.5"
											>公開済み</span
										>
										<span class="font-body-sm text-body-sm text-on-surface-variant text-xs"
											>{game.version}</span
										>
									</div>
								</div>
							</div>
							<div class="flex items-center gap-4">
								<div class="mr-4 hidden text-right sm:block">
									<p class="font-label-md text-label-md text-primary">{game.playCount}</p>
									<p class="font-label-sm text-label-sm text-on-surface-variant">Views</p>
								</div>
								<a
									href="/p/{game.uniqueId}"
									class="text-on-surface-variant hover:text-primary-fixed-dim hover:bg-surface-container rounded-lg p-2 transition-colors"
									title="View Game"
								>
									<span class="material-symbols-outlined text-xl">open_in_new</span>
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="glass-panel flex h-full flex-col rounded-xl p-6">
				<h2 class="font-headline-md text-headline-md text-primary mb-stack-md">
					最近のアクティビティ
				</h2>
				<div
					class="before:bg-outline-variant/20 relative ml-2 flex flex-1 flex-col gap-4 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px]"
				>
					<div class="relative pl-8">
						<div
							class="bg-surface border-primary-fixed-dim absolute top-1 left-[-5px] z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-[0_0_10px_rgba(0,219,233,0.3)]"
						>
							<span class="material-symbols-outlined text-primary-fixed-dim text-[14px]">check</span
							>
						</div>
						<div
							class="bg-surface-container-low/50 border-outline-variant/10 rounded-lg border p-3"
						>
							<p class="font-body-sm text-body-sm text-on-surface">ログインしました。</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
