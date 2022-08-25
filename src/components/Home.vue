<template>
<div class="karibu">
    
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
<style scoped>
.karibu{
    
}
.links{
    display: flex;
}


</style>