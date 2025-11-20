export default function Login({ setUsername }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value.trim();
    if (name) setUsername(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Enter username" />
      <button type="submit">Join Chat</button>
    </form>
  );
}

