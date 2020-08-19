<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let menuOpen = false;

    function handleClick(){
        dispatch('menu',{menuOpen:true});
        menuOpen = true;
    }
</script>

<style lang='scss'>
    @use "sass:map";
    @import '../styles/theme.scss';
    header{
        display: flex;
        justify-content: space-between;
        max-width: 1460px;
        margin:auto;
        margin-top:0px;
        a{
         font-family: 'gotham', sans-serif, arial;
         font-weight: bold;
         text-decoration: none;
        }
        div{
            margin: auto;
            margin-right: 0px;
            height: 16px;
            width:32px;
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            flex-direction: column;
            &:hover{
                span{
                    &:nth-child(2){
                        width:100%;
                        transition: 300ms;
                    }
                }
            }
            span{
                height: 2px;
                background-color: white;
                width: 100%;
                display: block;
                &:nth-child(2){
                    width: 70%;
                    align-self: flex-end;
                    transition: 300ms;
                }
            }
        }
    }
</style>

<header>
    <a href='/' rel='prefetch'>DONAËL WALTER</a>
    <div on:click={handleClick}>
        <span></span>
        <span></span>
        <span></span>
    </div>
</header>