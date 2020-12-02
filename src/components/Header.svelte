<style>
    :global(body.dark-mode) .container {
        background-image: url("/assets/bg-desktop-dark.jpg");
    }
    .container {
        background-image: url("/assets/bg-desktop-light.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    img {
        width: 100%;
        height: auto;
        visibility: hidden;
        display: block;
    }
    .mobile {
        display: none;
    }
    @media (max-width: 680px) {
        :global(body.dark-mode) .container {
            background-image: url("/assets/bg-mobile-dark.jpg");
        }
        .container {
            background-image: url("/assets/bg-mobile-light.jpg");
        }
        .mobile {
            display: block;
        }
    }
</style>

<div class="container">
    <img alt="background desktop" src="assets/bg-desktop-dark.jpg" />
    <img
        alt="background desktop"
        src="assets/bg-mobile-dark.jpg"
        class="mobile" />
</div>
