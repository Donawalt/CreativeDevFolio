<script>
    // your script goes here
    
	import { blur } from 'svelte/transition';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let menuOpen = true;

    function handleClick(){
        dispatch('menu',{menuOpen:false});
        menuOpen = false;
    }

    function handleClickUrl(){
        setTimeout(() => {
           handleClick(); 
        }, 500);
    }

    export let segment;
</script>
<style lang='scss'>
    @use "sass:map";
    @import '../styles/theme.scss';
    .close{
        position: absolute;
        top: 8px;
        right: 64px;
    }
    .menu-wrapper{
        display:flex;
        align-items: center;
        position:fixed;
        z-index: 1000;
        top:0;
        left:0;
        min-height:100vh;
        width:100vw;
        background-color: map-get($theme-colors, "primary");
    }
    ul>li>a{
        text-decoration: none;
        font-size: 80px;
        transition: 300ms;
        height: 134px;
        display:block;
        overflow:hidden;
        .kate{
            font-family: 'Kate', serif;
            font-weight: normal;
            line-height: 120px;
        }
        .normal{
            font-family: 'gotham', Avenir, Arial, sans-serif;
            font-style: italic;
            line-height: 120px;
        }
    }
    ul>li{
        margin-bottom: 8px;
        .valueWrapper{
                transform: translateY(0%);
                transition:300ms;
        }
        &::after{
            position: absolute;
            content: '→';
            left: -90px;
            top: 0;
            transition: 300ms;
            font-family: 'kate', serif;
            font-size: 80px;
        }
        &:hover{
            .valueWrapper{
                transform: translateY(-60%);
                transition:300ms;
            }
        }
    }
    ul{
        margin-top: auto;
        margin-left: 12.5vw;
        margin-bottom: auto;
    }
    [aria-current] {
		position: relative;
		display: inline-block;
        font-family: 'gotham', Avenir, Arial, sans-serif; 
        font-weight: bold;
        transition: 300ms;
        a{
            font-family: 'gotham', Avenir, Arial, sans-serif; 
        }
	}

	[aria-current]::after {
        opacity: 1;
        left: -100px;
        top: 0;
        transition: 300ms;
	}
</style>

<section class='menu-wrapper' transition:blur="{{amount: 10}}">
    <p on:click={handleClick} class='close'>close</p>
    <ul>
        <li aria-current='{segment === undefined ? "page" : undefined}'>
            <a  on:click={handleClickUrl} href="/" alt=''>
                <div class='valueWrapper'>
                    <p class='kate'>Home<p>
                    <p class='normal' aria-hidden='true'>Home</p>
                </div>
            </a>
        </li>
        <li aria-current='{segment === 'portfolio' ? "page" : undefined}'>
            <a on:click={handleClickUrl} href="/portfolio" alt='' >
                <div class='valueWrapper'>
                    <p class='kate'>Projects<p>
                    <p class='normal' aria-hidden='true'>Projects</p>
                </div>
            </a>
        </li>
        <li aria-current='{segment === 'about' ? "page" : undefined}'>
            <a on:click={handleClickUrl} href="/about" alt=''>
                <div class='valueWrapper'>
                    <p class='kate'>About<p>
                    <p class='normal' aria-hidden='true'>About</p>
                </div>
            </a>
        </li>
        <li>
            <a href='https://www.donaelwalter.com/' target='_blank' alt=''>
                <div class='valueWrapper'>
                    <p class='kate'>donaelwalter.com<p>
                    <p class='normal' aria-hidden='true'>donaelwalter.com</p>
                </div>
            </a>
        </li>
    </ul>
</section>
