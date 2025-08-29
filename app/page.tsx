"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, Database, Server, Smartphone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { TypingAnimation } from "@/components/typing-animation"
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Simula loading suave
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [isLoading])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center animated-bg">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground animate-pulse-soft">Carregando portfólio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      {/* Hero Section */}
      <section
        id="hero"
        data-section
        className={`min-h-screen flex items-center justify-center px-4 animated-bg ${visibleSections.has("hero") ? "animate-fade-in-up" : "opacity-0"
          }`}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground font-[family-name:var(--font-heading)]">
              <TypingAnimation text="Gabriel Lopes" />
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-medium">Full Stack Developer</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Criando sistemas digitais com excelente qualidade e focado em código limpo e soluções escaláveis
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Meus Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Entrar em Contato
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://linkedin.com/in/gabriel-lopes-968b111a5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/GabrielLS88"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:lopes.biel2588@gmail.com"
              className="text-muted-foreground hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-section
        className={`py-20 px-4 bg-muted/30 ${visibleSections.has("about") ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 font-[family-name:var(--font-heading)]">
            Sobre Mim
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meu nome é Gabriel Lopes, tenho 21 anos, resido e sou de Uberlândia/MG, atualmente cursando Bacharelado em Sistemas de Informação na Uniube com previsão de conclusão em 2026.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atuo há 2 anos como desenvolvedor Full Stack, onde desenvolvi softwares com diversas funcionalidades para atender demandas de clientes. Nesse período, trabalhei na criação de sistemas de disparo de mensagens ativas para empresas parceiras da Blip, desenvolvi APIs para integração de chatbots com outros sistemas e bancos de dados, além de implementar recursos que não eram nativamente suportados pela plataforma. Também fui responsável pela construção de alguns chatbots diretamente na Blip.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>34 99780-1829</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>lopes.biel2588@gmail.com</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Front-End</h3>
                  <p className="text-sm text-muted-foreground">React, Next e Angular</p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Server className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Back-End</h3>
                  <p className="text-sm text-muted-foreground">Node.js, Java, Python, Go, C e C#</p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Database className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Database</h3>
                  <p className="text-sm text-muted-foreground">PostgreSQL, MySQL, SQL Server, SQLite</p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Mobile</h3>
                  <p className="text-sm text-muted-foreground">React Native e Android studio</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        data-section
        className={`py-20 px-2 ${visibleSections.has("skills") ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 font-[family-name:var(--font-heading)]">
            Principais Competências
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Front-End</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next", "Angular", "TypeScript", "JavaScript", "Shadcn", "Bootstrap"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Back-End</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Node.js", "Python", "PHP", "C#", "C", "Go"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Banco de dados</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "SQL Server", "SQLite"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Integrações</h3>
              <div className="flex flex-wrap gap-2">
                {["ChatGPT", "Whisper", "Sankhya", "RD Serviços", "Active", "Google", "Blip"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-purple-100 text-orange-800 hover:bg-purple-200 dark:bg-orange-900 dark:text-purple-200 dark:hover:bg-purple-800 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ferramentas</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Git", "Scrum", "Kanban", "Extreme Programming (XP)", "TDD", "BDD"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-purple-100 text-yellow-800 hover:bg-purple-200 dark:bg-yellow-900 dark:text-purple-200 dark:hover:bg-purple-800 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        data-section
        className={`py-20 px-4 bg-muted/30 ${visibleSections.has("projects") ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 font-[family-name:var(--font-heading)]">
            Projetos em Destaque
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card className="group glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">Back end com Java</h3>
                    <Tooltip>
                      <TooltipTrigger className="mr-3">
                        <Link href="https://github.com/GabrielLS88/back_end_java" className={`hover:text-blue-800`}><Github /></Link>
                      </TooltipTrigger>
                      <TooltipContent>Abrir projeto</TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="text-muted-foreground">
                    Desenvolvimento de um back-end completo para um sistema de gerenciamento, implementando operações CRUD e autenticação JWT, utilizando Java, Spring Boot, JPA, Spring Security e MySQL para banco de dados.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Java
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Spring Boot
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      JPA
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Spring security
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      MySQL
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">Back end em Python</h3>
                    <a rel="stylesheet" className="hover:text-blue-800" href="https://github.com/GabrielLS88/back_end_python"><Github /></a>
                  </div>
                  <p className="text-muted-foreground">
                    Nesse projeto fiz um back end para um sistema de gestão com SQLite e Flask para entregar consultas para o front end no modelo RESTfull.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Python
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Flask
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      SQLite
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">CRUD Front end</h3>
                    <a rel="stylesheet" className="hover:text-blue-800" href="https://github.dev/GabrielLS88/Conek"><Github /></a>
                  </div>
                  <p className="text-muted-foreground">
                    Primeiro projeto criado com react e vite.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Vite
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="experience"
        data-section
        className={`pt-0 !pb-20 px-4 bg-muted/30 ${visibleSections.has("experience") ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 font-[family-name:var(--font-heading)]">
            Experiências Profissionais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <Card className="col-span-full max-w-md mx-auto group glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between flex-col">
                    <h3 className="text-xl font-semibold text-foreground">Telek Sistema</h3>
                    <p className="font-light text-xl">
                      Desenvolvedor de softwares
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    Atuo há 2 anos como desenvolvedor Full Stack, onde desenvolvi softwares com diversas funcionalidades para atender demandas de clientes. Nesse período, trabalhei na criação de sistemas de disparo de mensagens ativas para empresas parceiras da Blip, desenvolvi APIs para integração de chatbots com outros sistemas e bancos de dados, além de implementar recursos que não eram nativamente suportados pela plataforma. Também fui responsável pela construção de alguns chatbots diretamente na Blip.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Node JS
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      MySQL
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      PostgreSQL
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                     API Rest Full
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                     Scrum
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                     Kanban
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Blip
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-section
        className={`py-20 px-4 ${visibleSections.has("contact") ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-[family-name:var(--font-heading)]">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open("mailto:lopes.biel2588@gmail.com", "_blank")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => window.open("https://linkedin.com/in/gabriel-lopes-968b111a5", "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Gabriel Lopes. Desenvolvido com Next.js</p>
        </div>
      </footer>
    </div>
  )
}
