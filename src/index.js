import { createRoot } from "react-dom/client";
import "./App.css";

import GreetingGm ,{ GreetingGA, GreetingGE, GreetingGn } from "./App";

const root = createRoot(document.getElementById("root"))

root.render (<>
<h1 className="heading">Greetings </h1>
<GreetingGm/>
<GreetingGA />
<GreetingGE />
<GreetingGn/>
</>
)

