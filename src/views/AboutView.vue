<script setup>
import BaseCard from '@/components/base/BaseCard.vue'
</script>

<template>
  <div class="container grid place-content-center pt-36">
    <h1 class="mb-4 text-xl font-bold">Using Tailwind Form</h1>

    <BaseCard>
      <form class="">
        <div>
          <label class="block">
            Nombre
            <input type="text" class="" />
          </label>
        </div>
        <div>
          <label class="block">
            Email
            <input type="text" class="" />
          </label>
        </div>
        <div>
          <label class="block">
            Departamento
            <select name="" id="" class="">
              <option value="">Ventas</option>
              <option value="">Soporte</option>
            </select>
          </label>
        </div>
        <div>
          <label class="block">
            Descripción
            <textarea name="" id="" cols="30" rows="10" class=""></textarea>
          </label>
        </div>
        <div>
          <label class="block">
            <input type="checkbox" class="" /> Acepto términos y condiciones
          </label>
          <label class="block">
            <input type="checkbox" class="" /> Acepto términos y condiciones
          </label>
          <label class="block">
            <input type="checkbox" class="" /> Acepto términos y condiciones
          </label>
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<style></style>
