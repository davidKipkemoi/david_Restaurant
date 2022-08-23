<template>
<div class="karibu">
    <hi>
        Welcome Home David
    </hi>

</div>
</template>
<script>

export default {
    name:'Home',
     mounted(){

    const user = localStorage.getItem('user-details');
    if(!user){
        this.$router.push({name:'Sign-Up'})
    }}
}

</script>
<style>
</style>