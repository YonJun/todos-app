<script>
    export let active;
    export let onChange;

    function defaultOnChange() {
        onChange();
    }
</script>

<style>
    .module-border-wrap:hover {
        cursor: pointer;
        background: linear-gradient(
            to right,
            var(--check-background-light),
            var(--check-background-dark)
        );
    }

    :global(body.dark-mode) .module-border-wrap {
        background-color: var(--lt-very-dark-grayish-blue);
    }

    .module-border-wrap {
        /* padding: 1rem; */
        position: relative;
        background-color: var(--lt-light-grayish-blue);
        padding: 2px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    .module {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 50%;
        background: var(--lt-very-light-gray);
    }

    :global(body.dark-mode) .module {
        background-color: var(--dt-very-dark-desaturated-blue);
    }
    .checked {
        background: linear-gradient(
            to right,
            var(--check-background-light),
            var(--check-background-dark)
        );
    }
</style>

<div class="module-border-wrap" on:click={defaultOnChange}>
    {#if active}
        <div class="module checked">
            <img src={`assets/icon-check.svg`} alt="icon toggle" />
        </div>
    {:else}
        <div class="module" />
    {/if}
</div>

<!-- <input
    type="checkbox"
    value={active}
    on:change={defaultOnChange}
    id="active-todo" /> -->
<!-- <label for="active-todo">
    <img
        src={`assets/icon-${active ? 'check' : 'cross'}.svg`}
        alt="icon toggle" />
</label> -->
