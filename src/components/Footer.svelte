<script>
    import Row from "./Row.svelte";
    import Options from "./Options.svelte";
    import { todos } from "../modules/store";
    function clearCompleted() {
        let result = $todos.filter((t) => t.state === false);
        console.log("clearCompleted", result);
        todos.set(result);
        // todos.set([])
    }
</script>

<style>
    .container {
        position: sticky;
        bottom: 0;
    }
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* position: relative; */
    }
    .right:hover {
        cursor: pointer;
        color: var(--lt-dark-grayish-blue);
    }
    .content-item {
        color: var(--lt-light-grayish-blue);
        flex: 1;
    }
    .center {
        flex: 1.5;
        display: flex;
        justify-content: center;
    }
    .container div {
        /* border: 1px solid red; */

        font-size: 14px;
        font-weight: 700;
    }

    :global(body.dark-mode) .content-item {
        color: var(--dt-dark-grayish-blue);
    }

    .right {
        text-align: right;
    }

    .mobile {
        display: none;
        margin-bottom: 2em;
    }
    .center-content {
        width: 100%;
    }
    @media (max-width: 680px) {
        .center-content {
            width: 70%;
        }
        .mobile {
            display: block;
        }
        .desktop {
            display: none;
        }
    }
</style>

<div class="container">
    <div class="mobile">
        <Row>
            <div class="content">
                <div class="content-item ">
                    {`${$todos.length} item${$todos.length > 1 ? 's' : ''}`}
                </div>

                <div class="content-item  right" on:click={clearCompleted}>
                    Clear Completed
                </div>
            </div>
        </Row>
    </div>

    <Row>
        <div class="content">
            <div class="content-item desktop">
                {`${$todos.length} item${$todos.length > 1 ? 's' : ''}`}
            </div>
            <div class="center ">
                <div class="center-content">
                    <Options />
                </div>
            </div>
            <div class="content-item desktop right" on:click={clearCompleted}>
                Clear Completed
            </div>
        </div>
    </Row>

    <!-- <div class="mobile row">
        <Row>
            <div class="center">
                <Options />
            </div>
        </Row>
    </div> -->
</div>
