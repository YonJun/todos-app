<script>
    import AddInput from "../components/AddInput.svelte";
    import CheckedDarkMode from "../components/CheckedDarkMode.svelte";
    import Debug from "../components/Debug.svelte";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import ListTodos from "../components/ListTodos.svelte";
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

    :global(body) {
        font-family: "Josefin Sans", sans-serif;
        background-color: #f6f6f8;
        /* background-color: var(--lt-light-gray); */
    }

    :global(body.dark-mode) {
        background-color: var(--dt-very-dark-blue);
    }

    :global(:root) {
        --padding: 15px 20px 15px 20px;
        /* Primary */
        --bright-blue: hsl(220, 98%, 61%);
        --check-background-light: hsl(192, 100%, 67%);
        --check-background-dark: hsl(280, 87%, 65%);
        /* Light Theme */
        --lt-very-light-gray: hsl(0, 0%, 98%);
        --lt-very-light-grayish-blue: hsl(236, 33%, 92%);
        --lt-light-grayish-blue: hsl(233, 11%, 84%);
        --lt-dark-grayish-blue: hsl(236, 9%, 61%);
        --lt-very-dark-grayish-blue: hsl(235, 19%, 35%);

        /* Dark Theme */
        --dt-very-dark-blue: hsl(235, 21%, 11%);
        --dt-very-dark-desaturated-blue: hsl(235, 24%, 19%);
        --dt-light-grayish-blue: hsl(234, 39%, 85%);
        --dt-light-grayish-blue-hover: hsl(236, 33%, 92%);
        --dt-dark-grayish-blue: hsl(234, 11%, 52%);
        --dt-very-light-grayish-blue: hsl(233, 14%, 35%);
        --dt-very-dark-grayish-blue: hsl(237, 14%, 26%);
    }
    .container {
        width: 90%;
        max-width: 550px;
        margin: 0 auto;
        /* border: 1px solid red; */
        position: relative;
    }
    .header-row-1 {
        padding: 4em 0 1.5em 0;
    }
    .header-row-2 {
        padding-top: 2em;
    }
    .header-row-2 p {
        text-align: center;
        color: var(--lt-dark-grayish-blue);
        font-weight: 700;
    }
    :global(body.dark-mode) .header-row-2 p {
        color: var(--dt-dark-grayish-blue);
    }
</style>

<svelte:head>
    <title>TODO APP</title>
</svelte:head>
<Header />
<div class="container">
    <div class="header-row-1">
        <CheckedDarkMode />
    </div>
    <AddInput />
    <div class="header-row-2">
        <ListTodos />
    </div>
    <Footer />
    <div class="header-row-2">
        <p>Drag and drop to reorder list.</p>
    </div>

    <!-- <Debug /> -->
</div>
