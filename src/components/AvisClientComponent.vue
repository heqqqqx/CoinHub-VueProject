<template>
    
    <div class="avis-client">
        <div class="avis">
            <div class="avis-header">
                <h3 class="name">{{ client.name }}</h3>
            </div>
            <div class="avis-body">
                <div class="grade">
                    <i v-for="n in client.grade" :key="n" class="fas fa-star"></i>
                </div>
                <p class="review">{{ client.review }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AvisClientComponent',
    props: {
        client: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.avis-client {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem;
}


.avis {
    background-color: #131313;
    color:white;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 100%;
    max-width: 300px;
    width: 250px;
    height: 350px;
}

.avis-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.pfp {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
}

.name {
    font-size: 1.5rem;
    margin: 0;
}

.avis-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.grade {
    font-size: 2rem;
    margin-bottom: 1rem;
}
.fa-star {
    color: #ec3e86;}

.review {
    font-size: 1.25rem;
    text-align: center;
}

.stars {
    display: flex;
    justify-content: center;
}

.star-group {
    margin: 0 1rem;
}
</style>
