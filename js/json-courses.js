var courses = [
    {
        name: "PROGRAMACION PARA NIÑOS",
        icon: "../assets/icons/icon-scratch.png",
        url:"./pages/course.html?course=prog-kids",
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
        url:"./pages/course.html?course=py-teens",
        description: {
            p1: "Python es un lenguaje de alto nivel e interpretado. Una de sus caracteristicas es su facilidad de aprendizaje, lo que lo convierte en el lenguaje ideal para aquellos que recien esten comenzando a programar."
        },
        courseRequirements: {
            "Edad requerida": "12 a 16 años",
            "Duracion del curso": "8 clases",
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
        url:"./pages/course.html?course=py-young",
        description: {
            p1: "Python es un lenguaje de alto nivel e interpretado. Una de sus caracteristicas es su facilidad de aprendizaje, lo que lo convierte en el lenguaje ideal para aquellos que recien esten comenzando a programar."
        },
        courseRequirements: {
            "Edad requerida": "+17 años",
            "Duracion del curso": "8 clases",
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
        url:"./pages/course.html?course=prog-java",
        description: {
            p1: "Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos que fue diseñado específicamente para tener tan pocas dependencias de implementación como fuera posible."
        },
        courseRequirements: {
            "Edad requerida": "+17 años",
            "Duracion del curso": "8 clases",
            "Conocimientos previos": "no es necesario"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
        }
    }

];

var know = [
    {
        name: "QUIENES SOMOS",
        icon: "../assets/icons/logo-negro.png",
        url:"./pages/about.html"
    }
];

var contact = [
    {
        name: "WHATSAPP",
        icon: "../assets/icons/icon-wp.svg",
        url: "http://wa.me/+5493512445290"
    },
    {
        name: "INSTAGRAM",
        icon: "../assets/icons/icon-ig.png",
        url: "https://www.instagram.com/codigo.argentino/"
    }
]

export{courses, know, contact};