export const quantumData = {
    1: {
        theme: {
            color: '#aaffff', // Neon Ice Blue
            bgConfig: { count: 300, speed: 1, activity: 'mixed' }
        },
        title: {
            main: "Teckzite 2.0 — Quantum World",
            sub: "Explore how reality behaves at the smallest scale."
        },
        sections: [
            { id: "qm", heading: "Quantum Mechanics", content: "Quantum Technology is based on quantum mechanics, which studies the behavior of very small particles like electrons and photons. Unlike classical systems, quantum systems follow probability-based rules.", bgImage: "/mechanics_bg.png" },
            { id: "sup", heading: "Superposition", content: "In the quantum world, a particle can exist in multiple states at the same time. This concept is called superposition and it allows quantum systems to process more information simultaneously.", bgImage: "/superposition_bg.png" },
            { id: "ent", heading: "Entanglement", content: "Entanglement means two particles become connected so that the state of one instantly affects the other, even if they are far apart. This property is key to quantum computing and secure communication.", bgImage: "/entanglement_bg.png" }
        ],
        mcq: {
            question: "What phenomenon allows a quantum particle to exist in multiple states simultaneously?",
            options: [
                { id: 'A', text: "Gravity" },
                { id: 'B', text: "Entanglement" },
                { id: 'C', text: "Superposition" },
                { id: 'D', text: "Observation" }
            ],
            correctId: 'C',
            successMsg: "State confirmed. First Letter detected: I."
        },
        hiddenLetter: {
            char: "I",
            hint: "I am the first letter and arguably the most important.",
            position: { top: '20%', right: '10%' },
            revealStyle: "subtle-glow"
        }
    },

    2: {
        theme: {
            color: '#ff4400', // Neon Orange-Red
            bgConfig: { count: 300, speed: 1.5, activity: 'energetic' }
        },
        title: {
            main: "Teckzite 2.0 — Quantum Processing",
            sub: "The power of Qubits."
        },
        sections: [
            { id: "q1", heading: "What is a Qubit?", content: "A qubit is the basic unit of quantum computing. Unlike a classical bit (0 or 1), a qubit can be 0, 1, or both at the same time using superposition.", bgImage: "/qubit_bg.png" },
            { id: "q2", heading: "Quantum Processing", content: "Quantum computers use quantum gates to control qubits. Because qubits can exist in multiple states, a quantum computer can process many possibilities simultaneously.", bgImage: "/process_bg.png" },
            { id: "q3", heading: "Why Quantum Computing Matters", content: "Quantum computing can solve problems that are very hard for classical computers, such as optimization, drug discovery, cryptography, and AI.", bgImage: "/future_bg.png" }
        ],
        mcq: {
            question: "What is the physical device used to manipulate qubits in a quantum computer?",
            options: [
                { id: 'A', text: "Silicon Chip" },
                { id: 'B', text: "Vacuum Tube" },
                { id: 'C', text: "Quantum Gate" },
                { id: 'D', text: "Flux Capacitor" }
            ],
            correctId: 'C',
            successMsg: "Processing complete. Second Letter detected: L."
        },
        hiddenLetter: {
            char: "L",
            hint: "I am the second letter and find my other two friends.",
            position: { top: '50%', left: '15%' },
            revealStyle: "pulse"
        }
    },

    3: {
        theme: {
            color: '#9d00ff', // Neon Violet
            bgConfig: { count: 300, speed: 1.5, activity: 'chaotic' }
        },
        title: {
            main: "Teckzite 2.0 — Quantum Communication",
            sub: "Secure the Future."
        },
        sections: [
            { id: "qc1", heading: "What is Quantum Communication?", content: "Quantum communication uses quantum states of particles (like photons) to transmit information. It focuses on secure and reliable data transfer using quantum principles.", bgImage: "/comm_bg_1.png" },
            { id: "qc2", heading: "Quantum Key Distribution (QKD)", content: "QKD allows two users to share a secret key securely. If anyone tries to intercept the message, the quantum state changes, and the attack is immediately detected.", bgImage: "/comm_bg_2.png" },
            { id: "qc3", heading: "Why It Is Secure", content: "Quantum information cannot be copied (no-cloning principle). This makes quantum communication extremely secure, ideal for banking, defense, and future quantum networks.", bgImage: "/comm_bg_3.png" }
        ],
        mcq: {
            question: "What is Quantum Teleportation primarily used for?",
            options: [
                { id: 'A', text: "Time travel" },
                { id: 'B', text: "Instant food delivery" },
                { id: 'C', text: "Transporting humans" },
                { id: 'D', text: "Transferring quantum states" }
            ],
            correctId: 'D',
            successMsg: "Transmission confirmed. Third Letter detected: T."
        },
        hiddenLetter: {
            char: "T",
            hint: "I am the third letter and find my final friend.",
            position: { bottom: '20%', right: '20%' },
            revealStyle: "static"
        }
    },

    4: {
        theme: {
            color: '#007fff', // Neon Azure
            bgConfig: { count: 200, speed: 0.5, activity: 'stable' }
        },
        title: {
            main: "Teckzite 2.0 — Quantum Sensing",
            sub: "Precision beyond limits."
        },
        sections: [
            { id: "qs1", heading: "What is Quantum Sensing?", content: "Quantum sensing uses quantum effects to measure very small changes in time, gravity, magnetic fields, and motion with extreme accuracy.", bgImage: "/sensing_bg_1.png" },
            { id: "qs2", heading: "Where It Is Used", content: "Quantum sensors are used in medical imaging, GPS and navigation, space research, and environment monitoring, where high precision is required.", bgImage: "/sensing_bg_2.png" },
            { id: "qs3", heading: "Future Impact", content: "Quantum technology will enable smarter AI, unhackable networks, better healthcare, and advanced scientific discoveries in the coming years.", bgImage: "/sensing_bg_3.png" }
        ],
        mcq: {
            question: "Quantum gravity sensors can detect underground voids by measuring what?",
            options: [
                { id: 'A', text: "Magnetic North" },
                { id: 'B', text: "Tiny gravitational changes" },
                { id: 'C', text: "Temperature fluctuations" },
                { id: 'D', text: "Radio waves" }
            ],
            correctId: 'B',
            successMsg: "Precision verified. Fourth Letter detected: Z."
        },
        hiddenLetter: {
            char: "Z",
            hint: "I am the fourth letter and complete the word.",
            position: { top: '15%', left: '50%', transform: 'translateX(-50%)' },
            revealStyle: "blaze"
        }
    },

    5: {
        theme: {
            color: '#bfff00', // Neon Lime
            bgConfig: { count: 300, speed: 1.2, activity: 'mixed' }
        },
        title: {
            main: "Teckzite 2.0 — Quantum Advantages",
            sub: "Beyond Classical Limits."
        },
        sections: [
            { id: "q5_1", heading: "How Quantum Sensors Work", content: "Quantum sensors rely on quantum states that are extremely sensitive to external changes. Even a tiny disturbance can be detected with very high precision.", bgImage: "/sensors_bg.png" },
            { id: "q5_2", heading: "Advantage Over Classical Sensors", content: "Compared to classical sensors, quantum sensors are more accurate, more stable, and capable of detecting very weak signals. This makes them ideal for advanced scientific and industrial use.", bgImage: "/advantage_bg.png" },
            { id: "q5_3", heading: "Towards a Quantum Future", content: "As quantum technology develops, it will integrate with AI, IoT, 5G/6G, and space systems, creating smarter and more powerful technologies.", bgImage: "/future_tech_bg.png" }
        ],
        mcq: {
            question: "Why are quantum sensors ideal for advanced scientific and industrial use?",
            options: [
                { id: 'A', text: "They are cheaper to make" },
                { id: 'B', text: "They use more electricity" },
                { id: 'C', text: "They are capable of detecting very weak signals" },
                { id: 'D', text: "They are larger in size" }
            ],
            correctId: 'C',
            successMsg: "Oops! I am a dummy letter. Search in other QRs."
        },
        hiddenLetter: {
            char: "?",
            hint: "Oops! I am a dummy letter. Search in other QRs.",
            position: { top: '30%', right: '20%' },
            revealStyle: "static"
        }
    }
};
