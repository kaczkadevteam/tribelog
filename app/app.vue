<template>
  <div>
    <NuxtRouteAnnouncer />

    <div class="w-full">
      <UiButton :label="$t('shared.hello')" />

      {{ $t('shared.hello') }}
    </div>
  </div>
</template>
