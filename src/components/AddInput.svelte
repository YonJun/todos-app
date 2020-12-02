<script>
    import { onMount } from "svelte";
    import { todos } from "../modules/store";
    import CheckBox from "./CheckBox.svelte";
    import Row from "./Row.svelte";

    let elm;

    let todo;
    let active = false;

    function updateActive() {
        active = !active;
    }

    function addTodo(todo) {
        const newTodo = { state: active, text: todo };
        todos.update((prevVal) => [newTodo, ...prevVal]);
    }

    function handleKeydown({ keyCode }) {
        if (keyCode === 13) {
            if (!$todos.find((todoItem) => todoItem.text === todo)) {
                if (todo !== "" || todo.length !== 0) {
                    addTodo(todo);
                    todo = "";
                }
            }
        }
    }
    onMount(() => {
        setTimeout(() => {
            elm.focus();
        }, 500);
    });
</script>

<style>
    .container {
        width: 100%;
        /* border: 1px solid yellow; */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .input-todo {
        border: none;
        background-image: none;
        background-color: transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        -webkit-appearance: none;
    }
    :global(body.dark-mode) .input-todo {
        color: var(--dt-light-grayish-blue);
    }
    .input-todo {
        color: var(--lt-dark-grayish-blue);

        caret-color: var(--bright-blue);
        width: 90%;
        height: 30px;
        font-size: 18px;
    }
    .input-todo:focus {
        outline: 0;
    }
</style>

<Row>
    <div class="container">
        <CheckBox {active} onChange={updateActive} />
        <!-- <button on:click={updateActive}>dsadsa</button> -->
        <input
            class="input-todo"
            bind:this={elm}
            type="text"
            placeholder="Create new todo..."
            bind:value={todo}
            on:keydown={handleKeydown} />
    </div>
</Row>
