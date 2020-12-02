<script>
    let ok = true;

    function toggleDarkMode() {
        ok = !ok;
        window.document.body.classList.toggle("dark-mode");
    }
</script>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        letter-spacing: 10px;
        color: var(--lt-very-light-gray);
        font-weight: 700;
    }
    input[type="checkbox"] {
        display: none;
    }
</style>

<div class="container">
    <h1>TODO</h1>

    <input
        type="checkbox"
        value={ok}
        on:change={toggleDarkMode}
        id="dark-mode-checkbox" />
    <label for="dark-mode-checkbox">
        <img src={`assets/icon-${ok ? 'moon' : 'sun'}.svg`} alt="icon toggle" />
    </label>
</div>
