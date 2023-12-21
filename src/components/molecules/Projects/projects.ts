interface Project {
  title: string;
  subtitle: string;
  description: string;
  githubLink?: string;
  projectLink?: string;
}

export const projects: Project[] = [
  {
    title: "Fractal Visualizer",
    subtitle: "Personal project",
    description: "Web app to visualize fractals with different iterations.",
    githubLink: "https://github.com/gabolemus/Fractal-Visualization",
    projectLink: "https://fractal-visualization.web.app/",
  },
  {
    title: "Blockchain Simulator",
    subtitle: "University group project",
    description: "Web app to learn how blockchain works.",
    githubLink: "https://github.com/gabolemus/Simulador-Blockchain",
    projectLink: "https://blockchain-sim-test.web.app/",
  },
];
