import { Terminal, Globe2, Activity } from "lucide-react";

export const codeExamples: { [key: string]: string[] } = {
  TypeScript: [
    'import { app } from "@helio/edge";',
    "",
    'app.get("/hello", (c) => {',
    "  return c.json({",
    '    message: "Hello, world.",',
    "    region: c.region,",
    "  });",
    "});",
    "",
    "export default app;",
  ],
  Python: [
    "from helio import App",
    "",
    "app = App()",
    "",
    '@app.route("/hello")',
    "def hello(request):",
    "    return {",
    '        "message": "Hello, world.",',
    '        "region": request.region',
    "    }",
  ],
  Go: [
    "package main",
    "",
    'import "helio.dev/edge"',
    "",
    "func main() {",
    "  app := edge.New()",
    '  app.Get("/hello", func(c edge.Context) {',
    '    c.JSON(200, "Hello, world.")',
    "  })",
    "}",
  ],
};

export const features = [
  {
    icon: Globe2,
    title: "Global by default",
    text: "Your application, milliseconds from everyone. A network designed to bring your work closer.",
    label: "35 regions · one deployment",
  },
  {
    icon: Terminal,
    title: "Your stack. Your rules.",
    text: "Use the tools you already love. Bring your code, not a migration project.",
    label: "TypeScript · Python · Go",
  },
  {
    icon: Activity,
    title: "Every signal, in sight.",
    text: "Logs, traces, and performance in one place. Understand what happens after you hit deploy.",
    label: "Observability included",
  },
];
