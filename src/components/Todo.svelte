<script>
    import CheckBox from "./CheckBox.svelte";
    import Row from "./Row.svelte";
    export let active;
    export let updateActive;
    export let removeTodo;
    export let index;
    export let text;

    function defaultOnChange() {
        updateActive(index);
    }
    function defaultRemoveTodo() {
        removeTodo(index);
    }
</script>

<style>
    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    :global(body.dark-mode) .text-todo {
        color: var(--dt-light-grayish-blue);
    }
    .text-todo,
    .remove-container:hover {
        cursor: pointer;
    }
    .text-todo {
        display: flex;
        caret-color: var(--bright-blue);
        width: 80%;
        height: 30px;
        font-size: 18px;
        color: var(--lt-dark-grayish-blue);
        /* border: 1px solid hotpink; */
        overflow: hidden;
    }
    .remove-container {
        display: flex;
        align-items: center;
    }
    :global(body.dark-mode) .done {
        color: var(--lt-very-dark-grayish-blue);
    }
    .done {
        text-decoration: line-through;
        color: var(--lt-light-grayish-blue);
    }
</style>

<Row>
    <div class="container" title={index}>
        <CheckBox {active} onChange={defaultOnChange} />
        <div class={`text-todo ${active && 'done'}`} on:click={defaultOnChange}>
            {text}
        </div>
        <div class="remove-container" on:click={defaultRemoveTodo}>
            <img src="assets/icon-cross.svg" alt="cross" />
        </div>
    </div>
</Row>
