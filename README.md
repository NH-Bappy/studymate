# 🍏 macOS Web OS & Interactive Collaborative Workspace

A modern, high-performance **macOS-inspired Web Desktop Application** built with **React 19**, **Vite**, **Tailwind CSS v4**, **GSAP**, and **Zustand**. 

This collaborative project provides an interactive virtual operating system interface where developers and contributors can seamlessly register and showcase their **custom tools**, **applications**, and **external websites**.

---

## 🌐 Deep-Dive: Collaborative Web OS Ecosystem & Plugin Philosophy

### 🎯 The Vision Behind the Web OS
Traditional portfolio sites and developer showcases rely on static links, flat project cards, or simple landing pages. This project transforms the traditional web experience into an **interactive macOS-inspired Desktop Ecosystem** that functions as an open-ended, extensible virtual workspace.

Instead of operating as a single monolith, this project is architected as an **OS Kernel & Plugin System**:
- **System Kernel (Core)**: Handles window management, z-index depth layering, event dispatching, physics-based dragging, taskbar navigation, and global system state.
- **Application Plugins (User Tools)**: Independent modules created by contributors that plug directly into the system desktop, Dock, and Finder filesystem.

---

### 🧩 How Custom Tools & External Websites Integrate

The environment supports four distinct integration patterns for contributors to showcase their work:

#### 1. **Native React Application Tools**
Contributors can build fully interactive, rich React applications inside `src/windows/` (e.g., custom code editors, games, API tools, state calculators, audio players). By wrapping their component with `WindowWrapper`, their app automatically inherits:
- Smooth 60fps window entry & exit animations.
- Free-form desktop dragging and resizing boundaries.
- Global window z-index layering (brings focused apps to the front).
- Standardized macOS window header controls (Close, Minimize, Maximize).

#### 2. **Embedded Web Applications (Iframe Sandboxing)**
Have a project already deployed on Vercel, Netlify, or GitHub Pages? Contributors don't need to rebuild their app from scratch. They can instantiate a native OS window with a responsive `<iframe>` sandbox to render live external web tools, web dashboards, or full web apps directly inside a desktop window.

#### 3. **External Dock & Desktop Launchers**
Contributors can register custom app icons in the macOS Dock or desktop shortcuts that trigger direct external navigation or open dedicated Safari browser windows pointing to their live production deployments.

#### 4. **Virtual File Manager (Finder System)**
Contributors can add custom files, PDFs, images, code snippets, or project documents directly to the global virtual filesystem tree in [`src/constants/index.js`](file:///run/media/md-naimul-hasan-bappy/Work/CODE/project/study/src/constants/index.js). When users double-click files in Finder, the OS dynamically inspects the file extension and launches the corresponding preview viewer (`TextWindow`, `ImageWindow`, `Resume` PDF viewer).

---

### 🤝 Why This Project Belongs to Collaborators

This repository is designed specifically for **collaborative growth and team contributions**:
- **Zero-Friction Contribution**: Adding a new tool, widget, or website requires editing just 2 configuration objects (`dockApps` & `WINDOW_CONFIG`) and creating 1 React component.
- **Shared Design System**: All contributors share uniform glassmorphism styles, typography, and animation physics, ensuring every added tool feels like a native macOS app.
- **Open Showcase Platform**: Multiple developers can join forces to build a shared web desktop showcasing an entire team's tools, portfolios, utility scripts, and experimental web apps under one cohesive URL.

---

## 🚀 Key Features

- **Interactive macOS Desktop Interface**: Dock with magnification effects, top menu bar with live time/date, window desktop environment.
- **Dynamic Window Management System**: Drag-and-drop window position, z-index depth layering, minimize, maximize, and smooth open/close animations.
- **Custom Tool & Website Integration**: Easy modular plugin system to add custom tools, utilities, iframe web apps, or external project links.
- **Built-in Applications**:
  - 📁 **Finder / Portfolio**: Interactive file manager with folder navigation and document preview.
  - 🌐 **Safari / Web Browser**: Custom web app viewer & article navigator.
  - 💻 **Terminal**: Interactive CLI emulator listing skills and commands.
  - 🧮 **Calculator**: Fully functional arithmetic calculator app.
  - 🖼️ **Photos / Gallery**: Image viewer modal with zoom capabilities.
  - 📝 **Text & PDF Viewers**: Built-in document renderers.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component-based UI library powering application architecture |
| **Vite 7** | Next-generation fast frontend build tool & dev server |
| **Tailwind CSS v4** | Modern utility-first styling engine with customized glassmorphism |
| **GSAP (GreenSock)** | High-performance animation platform powering 60fps window transitions |
| **GSAP Draggable** | Physics-based drag-and-drop system for desktop windows |
| **Zustand & Immer** | Centralized, immutable global state management for windows and filesystem |
| **Lucide React** | Sleek icon library for system UI controls |
| **React PDF & Day.js** | Embedded document parsing and real-time clock state |

---

## 💡 The Most Difficult Feature & How It Works

### **Feature: High-Performance Window Management & GSAP-React Synchronization**

#### **Why It Was Challenging:**
Combining React’s **declarative component lifecycle** with GSAP Draggable’s **imperative DOM coordinate mutations** posed several major synchronization hurdles:
1. **Z-Index Layering**: Ensuring that clicking anywhere inside a window brings it instantly to the front without resetting its current drag offsets or causing re-render flickering.
2. **Animation vs DOM State**: Animating opening (`scale`, `opacity`, `y`) and minimizing/closing smoothly without conflicting with conditional React mounting or CSS `display` states.
3. **Encapsulation**: Preventing code duplication across 10+ window components.

#### **How It Was Solved:**
The architecture uses a **Higher-Order Component (HOC)** called [`WindowWrapper`](file:///run/media/md-naimul-hasan-bappy/Work/CODE/project/study/src/hoc/WindowWrapper.jsx) paired with a centralized Zustand store [`useWindowStore`](file:///run/media/md-naimul-hasan-bappy/Work/CODE/project/study/src/store/window.js):

1. **Centralized Window Store (`useWindowStore.js`)**:
   - Manages state for all window instances (`isOpen`, `isMinimized`, `isMaximized`, `zIndex`, `data`).
   - Tracks a globally incremental `nextZIndex`. When a window is focused (`focusWindow`), its `zIndex` updates instantly, bringing it above all other layers.

2. **HOC Wrapper (`WindowWrapper.jsx`)**:
   - Wraps any custom window component automatically.
   - Instantiates `Draggable.create()` on component mount so the window header and surface are draggable.
   - Listens to `isOpen` changes and runs custom `gsap.fromTo()` entry animations (`power3.out`).
   - Toggles visibility safely via `useLayoutEffect` to maintain smooth 60fps performance without unnecessary unmount cleanups.

---

## 🪟 How to Move and Interact with Windows

- **Moving a Window**: Click and hold the top bar (or anywhere on the window frame) and drag your mouse across the screen. The physics engine updates coordinates in real time.
- **Focusing / Bringing to Front**: Click anywhere inside an open window. Its `zIndex` will automatically increment above all active windows.
- **Window Action Controls (Top-Left Traffic Lights)**:
  - 🔴 **Red Button (Close)**: Closes the window and resets window data in state.
  - 🟡 **Yellow Button (Minimize)**: Minifies the window down to the Dock.
  - 🟢 **Green Button (Maximize)**: Expands the window to full-screen mode or restores original dimensions.

---

## 🧩 How Collaborators Can Add Custom Tools & Custom Websites

This project is built to be modular so anyone can contribute their own tools, mini-apps, or external web tools!

### **Step 1: Add your tool definition to constants**
Open [`src/constants/index.js`](file:///run/media/md-naimul-hasan-bappy/Work/CODE/project/study/src/constants/index.js) and register your app inside `dockApps` and `WINDOW_CONFIG`:

```javascript
// In dockApps array:
{
    id: "my-tool",
    name: "My Custom Tool",
    icon: "custom-icon.png", // icon inside /public/icons/
    canOpen: true,
    link: "https://my-external-website.com", // Optional: direct web link
}

// In WINDOW_CONFIG object:
WINDOW_CONFIG = {
    ...,
    "my-tool": { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
}
```

### **Step 2: Create your Window Component**
Create a new file under `src/windows/MyTool.jsx` and wrap it with `WindowWrapper`:

```jsx
import React from 'react';
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const MyTool = () => {
  return (
    <div className="w-[650px] h-[450px] bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden border border-white/10">
      {/* Title Bar Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 drag-handle">
        <WindowControls target="my-tool" />
        <span className="text-xs font-semibold text-gray-300">My Custom Tool</span>
        <div className="w-10"></div>
      </div>
      
      {/* Tool Content or Embedded Web App */}
      <div className="p-4 h-[calc(100%-40px)] overflow-y-auto">
        <h2 className="text-xl font-bold mb-2">Welcome to My Custom Tool!</h2>
        <p className="text-sm text-gray-400">Add your custom app UI, calculators, API widgets, or external website iframes here.</p>
        
        {/* Example Embed Custom Website */}
        {/* <iframe src="https://my-tool-website.com" className="w-full h-full rounded border-none" /> */}
      </div>
    </div>
  );
};

export default WindowWrapper(MyTool, "my-tool");
```

### **Step 3: Export and Render in App**
1. Export your component in [`src/windows/index.js`](file:///run/media/md-naimul-hasan-bappy/Work/CODE/project/study/src/windows/index.js).
2. Render your window component inside [`src/App.jsx`](file:///run/media/md-naimul-hasan-bappy/Work/CODE/project/study/src/App.jsx).

---

## 🏗️ Project Architecture & Structure

```
.
├── public/                # Static assets (icons, images, PDF files)
├── src/
│   ├── components/        # System UI Components
│   │   ├── Dock.jsx       # macOS Dock bar with tooltips & launch handlers
│   │   ├── Navbar.jsx     # Top OS menu bar with clock & drop-down menus
│   │   ├── Home.jsx       # Desktop background & desktop shortcut icons
│   │   ├── Welcome.jsx    # Startup welcome screen & modal
│   │   └── WindowControls.jsx # Traffic light buttons (close, minimize, maximize)
│   │
│   ├── windows/           # Custom OS App & Tool Windows
│   │   ├── Calculator.jsx # Built-in calculator application
│   │   ├── Finder.jsx     # File explorer window
│   │   ├── Safari.jsx     # Browser/article viewer app
│   │   ├── Terminal.jsx   # Interactive CLI skill showcase
│   │   ├── Photos.jsx     # Gallery viewer window
│   │   ├── Text.jsx       # Plain text viewer window
│   │   └── Image.jsx      # Dynamic image modal viewer
│   │
│   ├── store/             # Zustand State Stores
│   │   ├── window.js      # Window lifecycle, z-index stack, open/close/focus state
│   │   └── location.js    # File path navigation state for Finder
│   │
│   ├── hoc/               # Higher-Order Components
│   │   └── WindowWrapper.jsx # GSAP Draggable wrapper & entry/exit animation layer
│   │
│   ├── constants/         # Global OS Configurations
│   │   └── index.js       # App definitions, nav links, filesystem tree, window configs
│   │
│   ├── App.jsx            # Main app shell rendering OS components & active windows
│   ├── main.jsx           # React DOM root entrypoint
│   └── index.css          # Tailwind CSS directives & global OS styling
│
├── package.json           # Node dependencies & build scripts
└── vite.config.js         # Vite bundler config with path alias resolution (#store, #hoc, etc.)
```

---

## 👥 Collaboration & Getting Started

We welcome contributions! Follow these steps to set up the project locally and start building your custom tools:

### **1. Prerequisites**
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### **2. Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo-name.git
cd study
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Start Development Server**
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### **5. Submitting Contributions**
1. **Fork** the repository and create a feature branch (`git checkout -b feature/my-custom-tool`).
2. Add your custom tool or website following the instructions in the section above.
3. Commit your changes (`git commit -m "feat: added custom tool widget"`).
4. Push to your branch and open a **Pull Request (PR)**.

---

## 📜 License

Distributed under the **MIT License**. Feel free to use, modify, and contribute!
