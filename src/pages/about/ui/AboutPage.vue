<script setup lang="ts">
import { RouteNames } from '@/shared/router';
import {
	CButton,
	CCard,
	CCheckbox,
	CGraph,
	CInfoBox,
	CInput,
	CLink,
	CRadioButton,
	CRating,
	CTabs,
	CTag,
} from '@/shared/ui';
</script>

<template>
	<div>
		<div>About Page</div>
		<router-link :to="{ name: RouteNames.main }">Main</router-link>
		<div><c-button>Button</c-button></div>
		<div><c-card /></div>
		<div><c-checkbox /></div>
		<div><c-graph /></div>
		<div><c-info-box /></div>
		<div><c-input /></div>
		<div><c-link /></div>
		<div><c-radio-button /></div>
		<div><c-rating /></div>
		<div><c-tabs /></div>
		<div><c-tag /></div>
	</div>
</template>
