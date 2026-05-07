<script lang="ts">
	let { data } = $props();

	let publicUrl = $derived(`neogame.com/p/${data.game.uniqueId}`);
	let secretUrl = $derived(`neogame.com/manage/${data.game.uniqueId}?key=${data.secret}`);

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
		alert('コピーしました');
	}
</script>

<main
	class="max-w-container-max px-margin-mobile md:px-margin-desktop pb-section-gap gap-section-gap mx-auto flex w-full flex-grow flex-col pt-32"
>
	<section class="mt-stack-lg flex flex-col items-center justify-center text-center">
		<div class="mb-stack-md relative">
			<div class="bg-primary-fixed-dim/20 absolute inset-0 rounded-full blur-[80px]"></div>
			<div
				class="bg-surface-container border-primary-fixed-dim/50 relative z-10 flex h-24 w-24 items-center justify-center rounded-full border shadow-[0_0_40px_rgba(0,219,233,0.15)] backdrop-blur-xl"
			>
				<span
					class="material-symbols-outlined text-primary-fixed-dim text-[48px]"
					style="font-variation-settings: 'FILL' 1;">rocket_launch</span
				>
			</div>
		</div>
		<h1 class="font-headline-xl text-headline-xl text-on-surface mb-stack-sm tracking-tight">
			アップロード完了！
		</h1>
		<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
			ビルドが大気圏を突破し、グローバルグリッドに公開されました。世界中のプレイヤーに遊んでもらう準備が完了しました。
		</p>
	</section>

	<section
		class="grid grid-cols-1 {data.secret
			? 'lg:grid-cols-2'
			: 'mx-auto max-w-3xl'} gap-gutter w-full"
	>
		<div
			class="bg-surface-container-low/40 border-outline-variant/20 p-stack-lg group relative w-full overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-xl"
		>
			<div
				class="from-primary-fixed-dim/0 via-primary-fixed-dim/50 to-primary-fixed-dim/0 absolute top-0 left-0 h-1 w-full bg-gradient-to-r opacity-50"
			></div>
			<div class="mb-stack-md flex items-center gap-3">
				<div
					class="bg-primary-fixed-dim/10 flex h-10 w-10 items-center justify-center rounded-full"
				>
					<span class="material-symbols-outlined text-primary-fixed-dim">public</span>
				</div>
				<div>
					<h2 class="font-headline-md text-headline-md text-on-surface">公開プレイ用URL</h2>
					<p class="font-body-sm text-body-sm text-on-surface-variant">
						このリンクをプレイヤーに直接シェアしてください。
					</p>
				</div>
			</div>
			<div
				class="bg-surface border-outline-variant/30 mb-stack-md flex items-center rounded-lg border p-1 shadow-inner"
			>
				<input
					readonly
					type="text"
					value={publicUrl}
					class="font-body-md text-on-surface selection:bg-primary-fixed-dim/30 w-full border-none bg-transparent px-4 py-3 outline-none"
				/>
				<button
					onclick={() => copyToClipboard(publicUrl)}
					class="bg-surface-container-high hover:bg-surface-variant text-on-surface mr-1 flex items-center gap-2 rounded-md px-4 py-3 transition-colors"
				>
					<span class="material-symbols-outlined text-[18px]">content_copy</span>
					<span class="font-label-md text-label-md">コピー</span>
				</button>
			</div>
			<a
				href="/p/{data.game.uniqueId}"
				class="bg-primary-fixed-dim text-background font-label-md text-label-md flex w-full items-center justify-center gap-2 rounded-lg py-4 transition-all hover:shadow-[0_0_20px_rgba(0,219,233,0.3)] active:scale-[0.98]"
			>
				<span
					class="material-symbols-outlined text-[18px]"
					style="font-variation-settings: 'FILL' 1;">play_arrow</span
				>
				ゲームをプレイ
			</a>
		</div>

		{#if data.secret}
			<div
				class="bg-surface-container-low/40 border-secondary/20 p-stack-lg relative overflow-hidden rounded-2xl border shadow-[0_0_60px_rgba(235,178,255,0.05)] backdrop-blur-xl"
			>
				<div
					class="from-secondary/0 via-secondary/50 to-secondary/0 absolute top-0 left-0 h-1 w-full bg-gradient-to-r opacity-50"
				></div>
				<div class="mb-stack-md flex items-center gap-3">
					<div class="bg-secondary/10 flex h-10 w-10 items-center justify-center rounded-full">
						<span
							class="material-symbols-outlined text-secondary text-[20px]"
							style="font-variation-settings: 'FILL' 1;">key</span
						>
					</div>
					<div>
						<h2 class="font-headline-md text-headline-md text-on-surface">管理用シークレットURL</h2>
						<p class="font-body-sm text-body-sm text-secondary">
							このURLは秘密にしてください！後でゲームを編集または削除するために使用します。
						</p>
					</div>
				</div>
				<div
					class="bg-surface border-secondary/30 mb-stack-md group relative flex items-center rounded-lg border p-1 shadow-inner"
				>
					<div
						class="bg-background/80 pointer-events-none absolute inset-0 z-10 flex cursor-pointer items-center justify-center rounded-lg opacity-100 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0"
					>
						<span class="font-label-md text-label-md text-secondary tracking-widest uppercase"
							>ホバーして表示</span
						>
					</div>
					<input
						readonly
						type="text"
						value={secretUrl}
						class="font-body-md text-on-surface w-full border-none bg-transparent px-4 py-3 blur-sm transition-all duration-300 outline-none group-hover:blur-none"
					/>
					<button
						onclick={() => copyToClipboard(secretUrl)}
						class="bg-surface-container-high hover:bg-secondary/20 hover:text-secondary text-on-surface relative z-20 mr-1 flex items-center gap-2 rounded-md px-4 py-3 transition-colors"
					>
						<span class="material-symbols-outlined text-[18px]">content_copy</span>
						<span class="font-label-md text-label-md">コピー</span>
					</button>
				</div>
				<div
					class="bg-surface-container-lowest border-outline-variant/10 flex items-start gap-3 rounded-lg border p-4"
				>
					<span class="material-symbols-outlined text-outline mt-0.5 text-[18px]">info</span>
					<p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
						匿名でアップロードされたため、このURLがビルドを管理できる<strong
							class="text-on-surface font-semibold">唯一</strong
						>のアクセスキーとなります。絶対に紛失しないでください。
					</p>
				</div>
			</div>
		{/if}
	</section>

	{#if !data.user}
		<section
			class="bg-surface-container-low border-outline-variant/20 p-stack-lg relative flex min-h-[300px] flex-col justify-center overflow-hidden rounded-2xl border"
		>
			<div
				class="bg-primary-fixed-dim/10 absolute -right-20 -bottom-20 h-64 w-64 rounded-full blur-[100px]"
			></div>
			<div class="relative z-10 max-w-xl">
				<div
					class="bg-surface-container-high border-outline-variant/30 mb-stack-md inline-flex items-center gap-2 rounded-full border px-3 py-1"
				>
					<span
						class="material-symbols-outlined text-primary-fixed-dim text-[16px]"
						style="font-variation-settings: 'FILL' 1;">stars</span
					>
					<span class="font-label-sm text-label-sm text-on-surface tracking-widest uppercase"
						>レベルアップ</span
					>
				</div>
				<h2 class="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">
					シークレットリンクに頼らない管理を
				</h2>
				<p class="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed">
					開発者アカウントを作成すると、プロジェクトをライブラリに永久保存できます。プレイヤー分析機能の解放、コミュニティコメントの有効化など、すべてのビルドを一元管理できるようになります。
				</p>
				<div class="flex flex-wrap gap-4">
					<a
						href="/register"
						class="bg-on-surface text-surface font-label-md text-label-md hover:bg-inverse-surface rounded-full px-8 py-4 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-colors active:scale-95"
					>
						アカウント作成
					</a>
				</div>
			</div>
		</section>
	{/if}
</main>
