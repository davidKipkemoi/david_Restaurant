<template>
<div class="karibu">
    <p>Welcome Home David</p>

</div>
</template>
<script>

export default {
    name:'Home',
     mounted(){

    const user = localStorage.getItem('user-details');
    if(!user){
         this.$router.push({ name: 'Home' })
        }
    }
}

</script>
<style>
.karibu{
   display: flex;
}
</style>