<script>
    import { selected } from "../modules/store";
    import { onMount } from "svelte";

    let cboSelected = 1;
    function handleClickOption(event) {
        console.log(event.currentTarget.value);
        let itemSelectedVal = event.currentTarget.value;
        if (itemSelectedVal === selected) return null;
        selected.set(itemSelectedVal);
    }
    onMount(() => {
        cboSelected = $selected;
    });
</script>

<style>
    .radio-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .radio-button input[type="radio"] {
        display: none;
    }
    .radio-button label {
        cursor: pointer;
        color: var(--lt-dark-grayish-blue);
    }
    :global(body.dark-mode) .radio-button label:hover {
        color: var(--dt-light-grayish-blue-hover);
    }
    .radio-button label:hover {
        color: var(--lt-very-dark-grayish-blue);
    }

    .radio-button input[type="radio"]:checked + label {
        color: var(--bright-blue);
    }
</style>

<div class="radio-button">
    <input
        id="checkbox-1"
        type="radio"
        value={1}
        bind:group={cboSelected}
        on:click={handleClickOption} />
    <label for="checkbox-1"> All</label>
    <input
        id="checkbox-2"
        type="radio"
        value={2}
        bind:group={cboSelected}
        on:click={handleClickOption} />
    <label for="checkbox-2"> Active</label>
    <input
        id="checkbox-3"
        type="radio"
        value={3}
        bind:group={cboSelected}
        on:click={handleClickOption} />
    <label for="checkbox-3"> Completed</label>
</div>
