var courses = [
    {
        name: "PROGRAMACION PARA NIÑOS",
        icon: "../assets/icons/icon-scratch.png",
        class: "item-prog-kids",
        url:"./pages/course.html?course=prog-kids",
       // description: "Aprender a programar desde una temprana edad ofrece una gran cantidad de beneficios que van más allá de simplemente preparar a los niños para un futuro. En nuestro de curso de programación en videojuegos los niños descubrirán el mundo de la programación de una manera divertida y aprenderán los conceptos básicos utilizando bloques secuenciales.",
        courseRequirements: {
            "Edad requerida": "4 a 11 años",
            "Duracion del curso": "12 clases",
            "Conocimientos previos": "no se requiere"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
            req3: "Procesador Intel Core i3 o superior"
        },
        description: {
            p1: "Aprender a programar desde una temprana edad ofrece una gran cantidad de beneficios que van más allá de simplemente preparar a los niños para un futuro.",
            p2: "En nuestro de curso de programación en videojuegos los niños descubrirán el mundo de la programación de una manera divertida y aprenderán los conceptos básicos utilizando bloques secuenciales.",
            arr: {
                title: "Beneficios cognitivos y de desarrollo:",
                items: [
                    "Pensamiento lógico y resolución de problemas",
                    "Creatividad",
                    "Perseverancia",
                    "Colaboración"
                ]
            }
        }
    },
    {
        name: "PYTHON ADOLESCENTES",
        icon: "../assets/icons/icon-python.png",
        class: "item-python",
        url:"./pages/course.html?course=py-teens",
        description: "Python es un lenguaje de alto nivel e interpretado. Una de sus caracteristicas es su facilidad de aprendizaje, lo que lo convierte en el lenguaje ideal para aquellos que recien esten comenzando a programar.",
        courseRequirements: {
            "Edad requerida": "12 a 16 años",
            "Duracion del curso": "2 clases por semana (8 clases)",
            "Conocimientos previos": "no es necesario"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
        }
    },
    {
        name: "PYTHON JOVENES",
        icon: "../assets/icons/icon-python.png",
        class: "item-python",
        url:"./pages/course.html?course=py-young",
        description: "Python es un lenguaje de alto nivel e interpretado. Una de sus caracteristicas es su facilidad de aprendizaje, lo que lo convierte en el lenguaje ideal para aquellos que recien esten comenzando a programar.",
        courseRequirements: {
            "Edad requerida": "+17 años",
            "Duracion del curso": "2 clases por semana (8 clases)",
            "Conocimientos previos": "no es necesario"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
        }
    },
    {
        name: "JAVA",
        icon: "../assets/icons/icon-java.png",
        class: "item-java",
        url:"./pages/course.html?course=prog-java",
        description: "sarasa",
        courseRequirements: {
            "Edad requerida": "5",
            "Duracion del curso": "iiii",
            "Conocimientos previos": "gggg"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
        }
    }

];

var know = [
    {
        name: "Quienes somos",
        icon: "../assets/icons/logo-negro.png",
        class: "item-about-us",
        url:"./pages/about.html"
    },
    {
        name: "Clase de prueba",
        icon: "../assets/icons/logo-negro.png",
        class: "item-trial-class",
        url:"https://forms.gle/xU6pv32LsDhBJw8t8"
    }
];

var contact = [
    {
        name: "WhatsApp",
        icon: "../assets/icons/icon-wp.svg",
        class: "item-wp",
        url: "http://wa.me/+5493512445290"
    },
    {
        name: "Instagram",
        icon: "../assets/icons/icon-ig.png",
        class: "item-ig",
        url: "https://www.instagram.com/codigo.argentino/"
    }
]

export{courses, know, contact};