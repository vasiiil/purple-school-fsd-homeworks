<script setup lang="ts">
import { RouteNames } from '@/shared/router';
</script>

<template>
	<div>
		<div>Main Page</div>
		<router-link :to="{ name: RouteNames.about }">About</router-link>
	</div>
</template>
