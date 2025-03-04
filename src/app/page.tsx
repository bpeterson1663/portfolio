'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Button, Text, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import hero1 from "../../public/static/hero-1.jpg"
import hero2 from "../../public/static/hero-2.jpg"
import hero3 from "../../public/static/hero-3.jpg"
import hero4 from "../../public/static/hero-4.jpg"

import './page.scss'

export default function Home() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) return null; 


  if (isMobile) {
    return (
      <main>
      <div className="section-container">
        <div className="section-column image-container">
          <Image className="hero-image" alt="Brady Peterson" src={hero1} width={400} />
          <Title className="title" order={1}>Brady Peterson</Title>

        </div>
                
        <div className="section-column content-container">
          <Text className="text-section">Hey, I’m Brady! I’m a software engineer passionate about crafting seamless, scalable, and user-friendly web applications. With expertise in React, Golang, and TypeScript, I love solving complex problems and building technology that makes a real impact. When I’m not coding, I’m spending time with my amazing wife, working on DIY woodworking projects, and bringing ideas to life with my hands. Check out my work, blog, and resources on engineering, leadership, and web development—and feel free to reach out if you’d like to connect or collaborate!</Text> 
        </div>
      </div>
      </main>
    )
  }
  
  return (
    <main>
      <div className="section-container">
        <div className="section-column image-container">
          <Image className="hero-image" alt="Brady Peterson" src={hero1} width={400} />
        </div>
                
        <div className="section-column content-container">
          <Title className="title" order={1}>Brady Peterson</Title>
          <Text className="text-section">Hey, I’m Brady! I’m a software engineer passionate about crafting seamless, scalable, and user-friendly web applications. With expertise in React, Golang, and TypeScript, I love solving complex problems and building technology that makes a real impact. When I’m not coding, I’m spending time with my amazing wife, working on DIY woodworking projects, and bringing ideas to life with my hands. Check out my work, blog, and resources on engineering, leadership, and web development—and feel free to reach out if you’d like to connect or collaborate!</Text> 
        </div>
      </div>

      <div className="section-container">
        <div className="section-column content-container">
          <Title className="title" order={2}>Resume</Title>
          <Text className="text-section">As a Senior Software Engineer, I build scalable, efficient, and user-friendly web applications with React, Golang, and TypeScript. I'm continually growing my skills—currently diving deeper into front-end architecture—to deliver innovative solutions. In this section, you'll find a snapshot of my professional experience, key achievements, and the technical skills that drive my work. Dive in to learn more about my journey, and feel free to reach out if you'd like to connect or collaborate</Text> 
          <Button component={Link} href="/resume">Resume</Button>
        </div>
        <div className="section-column image-container">
          <Image className="hero-image" alt="Brady Peterson" src={hero2} width={400} />
        </div>
      </div>
      <div className="section-container">
        <div className="section-column image-container">
          <Image className="hero-image" alt="Brady Peterson" src={hero3} width={400} />
        </div>
                
        <div className="section-column content-container">
          <Title className="title" order={2}>Blog</Title>
          <Text className="text-section">Check out my blog! Here, I share insights, tutorials, and personal reflections on software development, technical leadership, and navigating a career in tech. This space offers actionable advice, in-depth explorations of challenges and successes, and candid stories from my journey as a developer. Whether you're a fellow coder or simply curious about the tech world, I hope my posts spark new ideas and help guide your path. Dive in and let's start the conversation!</Text> 
          <Button component={Link} href="/blog">Blog</Button>
        </div>
      </div>

      <div className="section-container">
        <div className="section-column content-container">
          <Title className="title" order={2}>Conctact Me</Title>
          <Text className="text-section">Get in touch! I'm always open to new opportunities, collaborations, and tech discussions. Feel free to reach out if you have questions about my work, want to connect, or just want to chat about software development. I look forward to hearing from you!</Text> 
          <Button component={Link} href="/contact">Contact</Button>
        </div>

        <div className="section-column image-container">
          <Image className="hero-image" alt="Brady Peterson" src={hero4} width={400} />
        </div>
      </div>
    </main>
  )
}
