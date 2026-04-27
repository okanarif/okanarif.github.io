// Project data for modal display
const projects = [
    {
        id: 1,
        title: "Autonomous Drone Cave Exploration with Quadrotor",
        date: "Oct 2025 - March 2026",
        image: "images/projects/autonomous-cave-exploration.jpg",
        description: "Developed a complete ROS 2-based autonomous exploration system for quadrotor navigation in unknown cave environments, featuring 3D mapping, frontier-based exploration, and trajectory optimization.",
        bullets: [
            "Implemented a comprehensive ROS 2 stack including Unity-based simulation, OctoMap-based 3D mapping, and sensor integration (depth, semantic cameras)",
            "Designed a finite state machine (FSM) for mission management covering IDLE → TAKEOFF → NAVIGATE_TO_CAVE → EXPLORE_CAVE → FINISHED states",
            "Developed 3D frontier detection algorithm for autonomous goal selection and sampling-based collision-free quintic trajectory generation",
            "Integrated lantern detection and localization using semantic and depth cameras for object recognition in exploration missions",
            "Created modular architecture with separate nodes for perception, planning, control, and mission management for scalability and maintainability"
        ],
        technologies: ["ROS2", "C++", "Python", "Unity", "OctoMap", "Path Planning", "Computer Vision", "Trajectory Optimization", "FSM"],
        links: [
            { type: "github", url: "https://github.com/OkanArifGuvenkaya/AutonomousCaveExploration", label: "GitHub Repository" },
            { type: "report", url: "reports/autonomous-cave-exploration.pdf", label: "Technical Report" }
        ]
    },
    {
        id: 2,
        title: "Vision-Based Opponent Detection and Autonomous Blocking in F1TENTH Racing",
        date: "Oct 2025 - Feb 2026",
        image: "images/projects/f1tenth-autonomous-racing.jpg",
        description: "Developed a modular ROS2-based autonomous racing system on the F1TENTH (1:10 scale) platform, enabling autonomous blocking against a dynamic opponent with vision-based detection and intelligent trajectory planning.",
        bullets: [
            "Developed a modular ROS2-based autonomous racing system on the F1TENTH (1:10 scale) platform, enabling autonomous blocking against a dynamic opponent",
            "Implemented vision-based opponent detection using a YOLOv8 model trained on a custom dataset and LiDAR-based particle filter localization for accurate real-time state estimation",
            "Designed multi-raceline trajectory planning and a finite-state machine (FSM) for perception-driven decision making and strategic raceline switching",
            "Executed trajectories using a Pure Pursuit controller with dynamic lookahead tuning and validated the system in real-time experiments under competitive racing conditions"
        ],
        technologies: ["ROS2", "Python", "YOLOv8", "LiDAR", "Computer Vision", "Particle Filter", "Pure Pursuit Controller", "F1TENTH"],
        links: [
            { type: "video", url: "https://drive.google.com/file/d/1dHCisX2FVivGmcXfnGM-q2lspUNsZh6f/view?usp=sharing", label: "Project Demo" },
            { type: "report", url: "reports/f1tenth-autonomous-racing.pdf", label: "Technical Report" }
        ]
    },
    {
        id: 3,
        title: "Mobile Robot Development for Intralogistics",
        date: "Sept - Oct 2025",
        image: "images/projects/mobile-robot-intralogistics.jpg",
        description: "Designed and implemented a complete mobile robot stack covering kinematics, perception, control, localization, and navigation on a Raspberry Pi platform for structured indoor environments.",
        bullets: [
            "Applied PID control for low-level motion control",
            "Implemented Dijkstra algorithm for global path planning",
            "Developed OpenCV-based visual object detection",
            "Multi-sensor fusion (camera, ultrasonic, color sensors)"
        ],
        technologies: ["Raspberry Pi", "Python", "OpenCV", "PID Control", "Path Planning"],
        links: []
    },
    {
        id: 4,
        title: "Autonomous Driving in ROS-based Unity Simulation",
        date: "March - Aug 2025",
        image: "images/projects/autonomous-driving-unity.jpg",
        description: "Designed and implemented a complete autonomous driving stack in ROS, integrating perception, planning, decision-making, and control modules in a Unity-based simulation environment.",
        bullets: [
            "Developed path planning modules including global waypoint processing, short-term goal selection, and trajectory generation using the TEB local planner",
            "Designed and implemented an autonomous driving stack in ROS",
            "Integration of perception and control systems"
        ],
        technologies: ["ROS", "Unity", "TEB Planner", "Python", "C++"],
        links: [
            { type: "video", url: "https://www.youtube.com/watch?v=hG--16rI4ik", label: "Simulation Video" }
        ]
    },
    {
        id: 5,
        title: "Reinforcement Learning for Humanoid Motion Optimization",
        date: "March - Aug 2025",
        image: "images/projects/humanoid-rl.jpg",
        description: "Modeled humanoid motion in MuJoCo using real gait data and implemented a PPO-based reinforcement learning framework to track human joint angles and maintain stable locomotion.",
        bullets: [
            "Modeled humanoid motion in MuJoCo using real gait data collected via motion capture system",
            "Processed static and dynamic trials in OpenSim, performing scaling, inverse kinematics, and gait cycle extraction",
            "Implemented a PPO-based reinforcement learning framework in DeepMind's dm_control to track human joint angles, maintain upright posture, and minimize control effort"
        ],
        technologies: ["MuJoCo", "OpenSim", "PPO", "dm_control", "Python"],
        links: [
            { type: "presentation", url: "presentations/rl-humanoid-presentation.pdf", label: "Project Presentation" }
        ]
    },
    {
        id: 6,
        title: "Vision Based Motion Control of Differential Drive Robot",
        date: "Feb - June 2023",
        image: "images/projects/differential-drive-robot.jpg",
        description: "Developed PID control for a differential drive robot with vision-based localization using ArUco markers, achieving robust target tracking against external disturbances.",
        bullets: [
            "Developed PID control for a differential drive robot, achieving target position against external disturbances",
            "Designed the robot in Solidworks and implemented coding and physical control via Raspberry Pi",
            "Used ArUco markers for position detection and created 2D animations"
        ],
        technologies: ["Raspberry Pi", "Python", "OpenCV", "Solidworks", "PID Control"],
        links: [
            { type: "report", url: "reports/differential-drive-progress.pdf", label: "Progress Report" }
        ]
    },
    {
        id: 7,
        title: "Spherical Haptic Interface with Educational GUI",
        date: "Sept 2022 - June 2023",
        image: "images/projects/spherical-haptic.jpg",
        description: "Designed and implemented a spherical haptic system for educational purposes, featuring multiple representation methods including quaternions, rotation matrices, Euler angles, and axis-angle.",
        bullets: [
            "Designed a spherical haptic system for educational purposes, utilizing various representation methods used in robotics such as unit quaternions, rotation matrices, Euler angles and Axis-angle",
            "Created a user-friendly GUI to provide a 3D rendering of the system and physical system"
        ],
        technologies: ["MATLAB", "App Designer", "Control Systems", "3D Graphics"],
        links: []
    },
    {
        id: 8,
        title: "Traffic Violation Detection via Computer Vision",
        date: "Sept 2022 - Jan 2023",
        image: "images/projects/traffic-violation.jpg",
        description: "Developed a computer vision system for detecting traffic violations of heavy vehicles using classical CV techniques and motion analysis.",
        bullets: [
            "Detected traffic violations of heavy vehicles using computer vision methods",
            "Employed techniques such as Hough line detection, foreground detection, noise elimination, blob analysis, and optical flow"
        ],
        technologies: ["Python", "OpenCV", "Computer Vision", "Optical Flow"],
        links: [
            { type: "report", url: "reports/traffic-violation-cv.pdf", label: "Project Report" }
        ]
    },
    {
        id: 9,
        title: "Sabancı Motorsports - Aerodynamics Department",
        date: "Feb 2020 - Jan 2022",
        image: "images/projects/sabanci-motorsports.jpg",
        description: "Led the Aerodynamics department in designing and optimizing aerodynamic packages for Formula Student race car, including CFD analysis and thermal management.",
        bullets: [
            "Acted as the Aerodynamics department leader (Sept 2021 - Jan 2022) and a department member (Feb 2020 - Sept 2021) in the Sabancı Motorsports team",
            "Designed and optimized aerodynamic packages, including rear wing and front wing of a race car",
            "Conducted cooling optimization of the battery box design via conjugate heat transfer"
        ],
        technologies: ["Solidworks", "ANSYS", "CFD", "Simscale"],
        links: []
    },
    {
        id: 10,
        title: "Sabancı Aerospace Team - Rocket Competition",
        date: "July 2020 - Sept 2021",
        image: "images/projects/sabanci-aerospace.jpg",
        description: "Contributed to the Sabancı Aerospace team for the TEKNOFEST Rocket Competition, performing comprehensive engineering analyses for rocket design.",
        bullets: [
            "Collaborated as a team member in the Sabancı Aerospace team for the TEKNOFEST Rocket Competition",
            "Conducted structural, thermal, and CFD analyses of the rocket"
        ],
        technologies: ["ANSYS", "CFD", "Structural Analysis", "Thermal Analysis"],
        links: []
    }
];

