function App() {
  const URL = process.env.REACT_APP_API_URL;
  return (
    <div className="text-red-500">
      <h1>Hello World</h1>
      <h3 className="text-green-500">API-URL is {URL}</h3>
    </div>
  );
}

export default App;
