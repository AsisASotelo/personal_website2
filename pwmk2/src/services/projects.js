
import foursquareIcon from '@iconify/icons-fa-brands/foursquare';
export const PROJECTS = [{
        _id: 0,
        title: "Firebase App",
        card_image: "/assets/images/firebase.png",
        body: "Web application created for INF 551. Front-end was created utilizing React, Reacstrap. Backend development was set up with Firebase. API calls were made with a simple listener set using Firebase API. Utilizes inverted index of custom CSV file to return primary key of tuple location.",
        icons: foursquareIcon


    },

    {
        _id: 1,
        title: "NY Gyms Clustering",
        card_image: "/assets/images/cluster_gyms.png",
        body: "The entire data science methodology, which begins with identifying the problem. In this case can we determine which borough of New York is best for gym accesibility and quality.Rating algorithm enabled a comparison across different price points."


    },

    {
        _id: 2,
        title: "Mandelbulb Creator",
        card_image: "/assets/images/mandelbulb.png",
        body: "Creates an image of a Mandelbulb which is a 3d extension of the 2-d Mandelbrot set. The image is 500 by 500 pixels and implements distance estimation with ray tracing allowing some shadowing to appear in the image.  All of the work was done on a Raspberry PI 3B+. "


    },

    {
        _id: 3,
        title: "HDFS Inverter",
        card_image: "/assets/images/inverter.png",
        body: "Tokenization of the file and directory names of a Hadoop cluster Name Node deployed on Amazon Linux EC2 instances. I then wrote a python script to take an xml file and then produce another xml file known as an inverted index. Listing the file/directory names inode numbers."


    }
]