import { writable } from "svelte/store";
const fakeData = [...new Array(10)].map((_, i) => ({
    state: i % 2 == 0,
    text: `${i + 1}-todo-todo-todo-todo-todo-todo-todo-todo`,
}));
// export const todos = writable([
//     {
//         state: true,
//         text: "todo-1",
//     },
// ]);
export const todos = writable(fakeData);
export const selected = writable(3);
