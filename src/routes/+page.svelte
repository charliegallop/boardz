<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { BrandYoutube, BrandGithub } from 'tabler-icons-svelte';
</script>

<div class="card p-4 flex flex-col items-center container max-w-lg my-auto">
	<p>{ $LL.title() }</p>
	<p>{ $LL.tagline() }</p>
	<p class="p-2 text-center">
		OK. Who put my calculator in Jell-O? Good one. But uh, seriously, guys who did this? Seriously
		guys, who did this? I need to know who put my calculator in Jell-O, or I'm gonna lose my
		freaking mind! OK. Who put my calculator in Jell-O? Good one. But uh, seriously, guys who did
		this? Seriously guys, who did this? I need to know who put my calculator in Jell-O, or I'm gonna
		lose my freaking mind!
	</p>
	<div class="flex flex-col items-center py-6 space-y-3 w-[90%]">
		<a
			href="/onboarding"
			class="btn variant-filled-primary btn-base min-w-min w-full inline-flex gap-2 cursor-pointer"
		>
			{ $LL.signUp() } YouTube <BrandYoutube size={36} strokeWidth={1} />
		</a>
		<a
			href="/onboarding"
			class="btn variant-filled-primary btn-base min-w-min w-full inline-flex gap-2 cursor-pointer"
		>
			{ $LL.signUp() } GitHub <BrandGithub size={36} strokeWidth={1} />
		</a>
	</div>
</div>
