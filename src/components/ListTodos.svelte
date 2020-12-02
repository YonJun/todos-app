<script>
    import { selected, todos } from "../modules/store";
    import { onMount } from "svelte";

    import Todo from "./Todo.svelte";
    import { flip } from "svelte/animate";

    let listTodos = [];
    let render = false;

    onMount(() => {
        listTodos = $todos;
        render = true;
    });
    $: if (render) {
        // console.log("selected is update", $selected);
        let result;
        switch (Number($selected)) {
            case 1:
                listTodos = $todos;
                console.log("result-1", listTodos);
                break;
            case 2:
                // console.log("go 2");
                result = $todos.filter((t) => t.state === false);
                listTodos = result;
                console.log("result-2", result);
                break;
            case 3:
                result = $todos.filter((t) => t.state === true);

                listTodos = result;
                console.log("result-3", result);
                break;

            default:
                break;
        }
    }
    function updateActive(id) {
        todos.update((prevVal) => {
            prevVal[id].state = !prevVal[id].state;
            return prevVal;
        });
    }
    function removeTodo(id) {
        todos.update((prevVal) => {
            prevVal.splice(id, 1);
            return prevVal;
        });
    }

    let hovering = false;

    const drop = (event, target) => {
        event.dataTransfer.dropEffect = "move";
        const start = parseInt(event.dataTransfer.getData("text/plain"));
        const newTracklist = $todos.slice();

        if (start < target) {
            newTracklist.splice(target + 1, 0, newTracklist[start]);
            newTracklist.splice(start, 1);
        } else {
            newTracklist.splice(target, 0, newTracklist[start]);
            newTracklist.splice(start + 1, 1);
        }
        todos.set(newTracklist);
        hovering = null;
    };

    const dragstart = (event, i) => {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.dropEffect = "move";
        const start = i;
        event.dataTransfer.setData("text/plain", start);
    };
</script>

<style>
    .container {
        box-shadow: 0 10px 18px var(--lt-light-grayish-blue);
    }
    .list-item:not(:last-child) {
        border-bottom: 1px solid var(--lt-very-light-grayish-blue);
    }
    :global(body.dark-mode) .list-item:not(:last-child) {
        border-bottom: 1px solid var(--dt-dark-grayish-blue);
    }
    :global(body.dark-mode) .container {
        box-shadow: 0 10px 18px rgb(26, 25, 25);
    }
</style>

<div class="container">
    {#each listTodos as { state, text }, idx (text)}
        <div
            class="list-item"
            animate:flip
            draggable={true}
            on:dragstart={(event) => dragstart(event, idx)}
            on:drop|preventDefault={(event) => drop(event, idx)}
            ondragover="return false"
            on:dragenter={() => (hovering = idx)}
            class:is-active={hovering === idx}>
            <Todo
                active={state}
                {text}
                index={idx}
                {updateActive}
                {removeTodo} />
        </div>
    {/each}
</div>
