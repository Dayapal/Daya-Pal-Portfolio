import nodejsIcon from '../assets/icons/nodejs.svg';
import python from '../assets/icons/python.svg';
import django from '../assets/icons/django.svg';
import expressjs from '../assets/icons/express-js.svg';
import graphql from '../assets/icons/graphql-icon.svg'
import restapi from '../assets/icons/rest-api-icon.svg'
import mongodb from '../assets/icons/mongoDB.svg';
import postgreSql from '../assets/icons/PostgresSQL.svg'
import firebase from '../assets/icons/firebase.svg'
import mySql from '../assets/icons/MySQL.svg'
import sass from '../assets/icons/Sass.svg';
import react from '../assets/icons/React.svg'
import nextjs from '../assets/icons/Next.js.svg'
import typescript from '../assets/icons/TypeScript.svg'
import html5 from '../assets/icons/HTML5.svg'
import javaScript from '../assets/icons/JavaScript.svg'
import css3 from '../assets/icons/CSS3.svg'
import tailwindcss from '../assets/icons/TailwindCSS.svg'
import git from '../assets/icons/Git.svg'
import docker from '../assets/icons/Docker.svg'
import figma from '../assets/icons/Figma.svg';
import vsCode from '../assets/icons/Visual-StudioCode.svg'
import canva from '../assets/icons/Canva.svg'
import aws from '../assets/icons/AWS.svg'
import wordpress from '../assets/icons/WordPress.svg'



export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: react },
      { name: 'Next.js', icon: nextjs },
      { name: 'TypeScript', icon: typescript },
      { name: 'JavaScript', icon: javaScript },
      { name: 'HTML5', icon: html5 },
      { name: 'CSS3', icon: css3 },
      { name: 'Tailwind CSS', icon: tailwindcss},
      { name: 'Sass', icon: sass },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: nodejsIcon },
      { name: 'Express', icon: expressjs },
      // { name: 'Python', icon: python },
      // { name: 'Django', icon: django },
      // { name: 'GraphQL', icon: graphql },
      { name: 'REST API', icon:  restapi },
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: mongodb },
      // { name: 'PostgreSQL', icon: postgreSql },
      { name: 'Firebase', icon: firebase },
      { name: 'MySQL', icon: mySql },
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: git },
      // { name: 'Docker', icon: docker },
      // { name: 'AWS', icon: aws },
      { name: 'Figma', icon: figma },
      { name: 'VS Code', icon: vsCode },
      { name: 'Canva', icon: canva },
      { name: 'WordPress', icon: wordpress },
    ]
  }
];