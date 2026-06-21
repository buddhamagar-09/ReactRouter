import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { useEffect, useState } from "react";

// import Layout from "./Layout";
// you can use Layout component to wrap your app content, but in this case, we are using ThemeProvider directly in App component.

function App() {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "light",
  );

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme
  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      {/* <Layout> */}
      <Header />
      <Outlet />
      <Footer />
      {/* </Layout> */}
    </ThemeProvider>
  );
}

export default App;
