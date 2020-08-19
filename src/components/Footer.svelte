<style lang="scss">
    @use "sass:map";
    @import '../styles/theme.scss';
    ul{
        display: flex;
        justify-content: space-around;
    }
    footer{
        margin-bottom: 0;
        height: 200px;
    }
    .element{
        height: 440px;
        width: 272px;
        border: 24px solid map-get($theme-colors, "secondary");
        background-color: black;
        transition: 300ms;
        display: flex;
        align-items: center;
        flex-direction: column;
        img{
            margin-top: 64px;
            height: 64px;
            width: 64px;
            background-color: white;
            margin-bottom: 16px;
        }
        img,p {
                opacity: 0;
                transition: 300ms;
                transform: translateY(-50%);
        }
        &:hover{
            img,p {
                opacity: 1;
                transition: 600ms;
                transform: translateY(0);
            }
            transform: translateY(-20%);
            transition: 300ms;
            &:nth-child(1){
                border: 24px solid #0e76a8;
            }
            &:nth-child(2){
                border: 24px solid #EA4C89;
            }
            &:nth-child(3){
                border: 24px solid #053eff;
            }
        }
    }
</style>

<footer>
    <ul>
        <li class='li element'>
            <img src='' alt='' />
            <p>Linkedin</p>
        </li>
        <li class='dr element'>
            <img src='' alt='' />
            <p>Dribble</p>
        </li>
        <li class='be element'>
            <img src='' alt='' />
            <p>Behance</p>
        </li>
    </ul>
</footer>