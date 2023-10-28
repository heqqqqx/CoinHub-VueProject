<template>
        <h1 class="title">Are you ready to discover cryptocurrencies ?</h1>

       
        
            <div class="walkaround">
                <h2>Discover CoinHub</h2>
                <div class="walkaround-links">
                    <router-link to="/about">About us</router-link> 
                    <router-link to="/data">Get data on cryptocurrencies</router-link>
                    <router-link to="/beginner">Beginner's Guide</router-link>
                    <router-link to="/ressources">Resources</router-link>
                    <router-link to="/news">Get the last news</router-link>
                </div>
            </div>
            
</template>


<style>
.title-second{
    margin-top: 30px;
    color: #fff;
}
.walkaround {
            background-color: #131313;
            padding: 20px;
            margin-top: 50px;
            border-radius: 5px;
            color: #fff;


        }

        .walkaround h2 {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .walkaround-links {
            display: flex;
            justify-content: space-between;
        }

        .walkaround-links a {
            color: #FFF;
            text-decoration: none;
            font-size: 18px;
            padding: 10px;
            border: 1px solid #ec3e86;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
        }

        .walkaround-links a:hover {
            background-color: #ec3e86;
            color: #fff;
        }
.title {
    color:#fff;
    font-size: 36px;
    font-weight: bold;
    text-align: left;
    margin-top: 50px;
    margin-left: 0; 
    margin-right: 0; 
    left: -50%;
    padding: 0;
    position: relative; 
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3.5s steps(100, end) forwards;
}



@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

.title::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #ec3e86;
    transition: width 0.3s ease-in-out;
}

.title:hover::before {
    width: 85%; 
}

.title::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -5; 
    transform: translateY(-50%);
    height: 1.2em; 
    width: 3px;
    background-color: #ec3e86;
    animation: blink-caret .75s step-end infinite;
}

@keyframes blink-caret {
    from, to { background-color: transparent }
    50% { background-color: #ec3e86; }
}

.question-mark {
    color: #ec3e86;
}

</style>
