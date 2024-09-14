<script setup lang="ts">

</script>

<template>
  <div>
    <h1>{{ $t('authLayer.page.login.title') }}</h1>

    {{ $vp.isDesktop() }}
    {{ $vp.isTablet() }}
    {{ $vp.isMobile() }}
  </div>
</template>
