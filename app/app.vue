<template>
  <div>
    <NuxtRouteAnnouncer />

    <div class="w-full">
      <CNButton :label="$t('shared.hello')" />

      {{ $t('shared.hello') }}
    </div>
  </div>
</template>
