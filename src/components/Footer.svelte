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
        text-decoration:none;
        img{
            margin-top: 64px;
            height: 64px;
            width: 64px;
            margin-bottom: 16px;
        }
        img,p {
                opacity: 0;
                transition: 300ms;
                transform: translateY(-50%);
                text-decoration: none;
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
        <a rel='prefetch' href='https://www.linkedin.com/in/donaël-walter/' class='li element' target='_blank'>
            <img src='linkedin.png' alt='Logo of Linkedin' />
            <p>Linkedin</p>
        </a>
        <a rel='prefetch' href='https://dribbble.com/donaelwalter/' class='dr element' target='_blank'>
            <img src='dribbble.png' alt='Dribbble Logo' />
            <p>Dribbble</p>
        </a>
        <a rel='prefetch' href='https://www.behance.net/donawalt' class='be element' target='_blank'>
            <img src='behance.png' alt='Behance Logo' />
            <p>Behance</p>
        </a>
    </ul>
</footer>