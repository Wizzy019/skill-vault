1. You use useState when your component needs to remember something that can change over time and affect what’s shown on the screen.

If a value just gets read once (like a prop, or static text), you don’t need useState.

If that value changes because of user action, an API call, a timer, or logic inside the component — then you store it in state.

Examples:

Typing in a form → input value changes = useState

Clicking a button to toggle something on/off = useState

Tracking whether data is still loading or done = useState

If React needs to re-render the UI when a value changes, that’s your signal.
If it doesn’t affect the UI directly, maybe it’s just a normal variable.

2. The useEffect hook is used when
