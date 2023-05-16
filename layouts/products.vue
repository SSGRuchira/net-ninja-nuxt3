<template>
  <div>
    <header class="header shadow-sm bg-white">
      <nav class="nav container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/" class="btn">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="btn">Aout Us</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>
