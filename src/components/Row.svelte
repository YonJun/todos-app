<style>
    :global(body.dark-mode) .container {
        background-color: var(--dt-very-dark-desaturated-blue);
    }
    .container {
        width: 100%;
        /* border: 1px solid greenyellow; */
        border-radius: 5px;
        padding: var(--padding);
        /* background-color: var(--lt-very-light-gray); */
        background-color: white;
        /* background-color: var(--lt-very-light-gray); */
        box-sizing: border-box;
    }
</style>

<div class="container">
    <slot />
</div>
