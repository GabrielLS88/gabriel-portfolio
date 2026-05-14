"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Github, Linkedin, Brain, GraduationCap, Code, Database, Server, Smartphone } from "lucide-react"
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
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
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
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground animate-pulse-soft">Carregando portfólio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        data-section
        className={`min-h-screen flex items-center justify-center px-4 animated-bg ${visibleSections.has("hero") ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground font-[family-name:var(--font-heading)]">
              <TypingAnimation text="Gabriel Lopes" />
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-medium">
              Full Stack Developer · Front-End · IA & Automação
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Criando interfaces modernas e sistemas escaláveis com foco em código limpo,
              boas práticas de Engenharia de Software e soluções com Inteligência Artificial.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Meus Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 cursor-pointer text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Entrar em Contato
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <Tooltip>
              <TooltipTrigger className="mr-3">
                <Link href="https://linkedin.com/in/gabriel-lopes-968b111a5" rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-blue-600 transition-colors duration-300">
                  <Linkedin className="hover:scale-110" size={24} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="mr-3">
                <Link href="https://github.com/GabrielLS88" rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-blue-600 transition-colors duration-300">
                  <Github className="hover:scale-110" size={24} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Github</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="mr-3">
                <Link href="mailto:lopes.biel2588@gmail.com" rel="noopener noreferrer" target="_blank" className="text-muted-foreground hover:text-blue-600 transition-colors duration-300">
                  <Mail className="hover:scale-110" size={24} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Enviar e-mail</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* ── SOBRE MIM ─────────────────────────────────────────── */}
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
                Meu nome é Gabriel Lopes, tenho 22 anos, sou de Uberlândia/MG e estou cursando Bacharelado em
                Sistemas de Informação na Uniube, com previsão de conclusão em 2026.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atuo há mais de 2 anos como desenvolvedor Full Stack com foco em Front-End (React, Next.js, TypeScript)
                e Back-End (Node.js, Python). Tenho experiência em APIs RESTful, integração com a{" "}
                <strong className="text-foreground">WhatsApp API (Meta)</strong>, desenvolvimento de chatbots,
                sistemas com <strong className="text-foreground">Agentes de Inteligência Artificial</strong> e
                aplicação de boas práticas de Engenharia de Software como SOLID, Clean Code e arquitetura hexagonal.
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
                  <p className="text-sm text-muted-foreground">React, Next.js e TypeScript</p>
                </CardContent>
              </Card>
              <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Server className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Back-End</h3>
                  <p className="text-sm text-muted-foreground">Node.js, Python, Java, Go, C#</p>
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
                  <Brain className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">IA & Automação</h3>
                  <p className="text-sm text-muted-foreground">Agentes de IA, LLMs, WhatsApp API</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────── */}
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
                {["React", "Next.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Shadcn", "Bootstrap"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Back-End & APIs</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "Java", "Go", "C#", "PHP", "Express", "RESTful", "GraphQL", "RabbitMQ"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Banco de Dados</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "SQL Server", "SQLite", "MongoDB"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">IA & Integrações</h3>
              <div className="flex flex-wrap gap-2">
                {["Agentes de IA", "LLM / GPT APIs", "WhatsApp API (Meta)", "Blip", "Sankhya ERP", "RD Station", "ChatGPT", "Whisper"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:hover:bg-orange-800 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Engenharia & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Git", "Clean Code", "SOLID", "Arq. Hexagonal", "MVC", "TDD", "BDD", "Scrum", "Kanban", "XP"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:hover:bg-yellow-800 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {["React Native", "Android Studio"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-200 dark:hover:bg-pink-800 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJETOS ─────────────────────────────────────────── */}
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
                    <h3 className="text-xl font-semibold text-foreground">Back-End com Java</h3>
                    <Tooltip>
                      <TooltipTrigger className="mr-3">
                        <Link href="https://github.com/GabrielLS88/back_end_java" rel="noopener noreferrer" target="_blank" className="hover:text-blue-800">
                          <Github />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Abrir projeto</TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="text-muted-foreground">
                    Back-end completo com CRUD e autenticação JWT, desenvolvido em Java com Spring Boot, JPA,
                    Spring Security e MySQL.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "JPA", "Spring Security", "MySQL"].map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">Back-End em Python</h3>
                    <Tooltip>
                      <TooltipTrigger className="mr-3">
                        <Link href="https://github.com/GabrielLS88/back_end_python" rel="noopener noreferrer" target="_blank" className="hover:text-blue-800">
                          <Github />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Abrir projeto</TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="text-muted-foreground">
                    Back-end de um sistema de gestão com Flask e SQLite, expondo operações via arquitetura RESTful
                    para integração com o front-end.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Flask", "SQLite", "RESTful"].map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">Portfólio em Next.js</h3>
                    <Tooltip>
                      <TooltipTrigger className="mr-3">
                        <Link href="https://github.com/GabrielLS88/gabriel-portfolio" rel="noopener noreferrer" target="_blank" className="hover:text-blue-800">
                          <Github />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Abrir projeto</TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="text-muted-foreground">
                    Este portfólio, desenvolvido com Next.js, Tailwind CSS e Shadcn, hospedado na Vercel.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Tailwind CSS", "Shadcn", "Vercel"].map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── EXPERIÊNCIAS ─────────────────────────────────────── */}
      <section
        id="experience"
        data-section
        className={`py-20 px-4 bg-muted/30 ${visibleSections.has("experience") ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 font-[family-name:var(--font-heading)]">
            Experiências Profissionais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* ColmeIA */}
            <Card className="col-span-full max-w-2xl mx-auto group glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/30">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-foreground">ColmeIA</h3>
                        <Badge className="text-xs bg-primary/20 text-primary border-primary/30">Atual</Badge>
                      </div>
                      <p className="font-light text-lg">Analista de Implementação</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Out 2025 – Presente · São Paulo (Remoto)</span>
                  </div>
                  <p className="text-muted-foreground">
                    Desenvolvimento e manutenção de aplicações com Node.js e TypeScript, implementando APIs RESTful
                    e modelando bancos de dados. Contribuo na definição da arquitetura do software e em soluções com{" "}
                    <strong className="text-foreground">Agentes de Inteligência Artificial</strong> e automação inteligente de processos.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "TypeScript", "API RESTful", "Banco de Dados", "Agentes de IA", "Arquitetura de Software"].map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telek Full-Stack */}
            <Card className="md:col-span-2 group glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Telek Sistema</h3>
                      <p className="font-light text-lg">Desenvolvedor Full-Stack</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Jan 2025 – Out 2025 · Uberlândia, MG</span>
                  </div>
                  <p className="text-muted-foreground">
                    Desenvolvimento de aplicações web com Next.js, TypeScript e React no Front-End, e Node.js/Python no Back-End.
                    Integração com a <strong className="text-foreground">WhatsApp API (Meta)</strong>, sistemas com{" "}
                    <strong className="text-foreground">Agentes de IA</strong>, containerização com Docker e bancos de dados relacionais.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MySQL", "Docker", "WhatsApp API", "Agentes de IA", "Git"].map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telek Chatbot */}
            <Card className="group glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Telek Sistema</h3>
                      <p className="font-light text-lg">Desenvolvedor Back-End / Chatbot</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Dez 2023 – Jan 2025 · Uberlândia, MG</span>
                  </div>
                  <p className="text-muted-foreground">
                    Chatbots para clientes na plataforma Blip com Node.js. Integrações com Sankhya ERP,
                    RD Station e WhatsApp API (Meta). APIs REST com arquitetura MVC e projetos com automação via IA.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Blip", "API RESTful", "MVC", "Sankhya", "RD Station", "MySQL", "WhatsApp API"].map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estágio */}
            <Card className="group glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Telek Sistema</h3>
                      <p className="font-light text-lg">Estagiário em Desenvolvimento</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Out 2023 – Dez 2023 · Uberlândia, MG</span>
                  </div>
                  <p className="text-muted-foreground">
                    Início da jornada profissional desenvolvendo chatbots com Blip e Node.js,
                    primeiras integrações com APIs de terceiros e base em automação de atendimento.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Blip", "Chatbot", "Integrações", "JavaScript"].map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ── FORMAÇÃO ─────────────────────────────────────────── */}
      <section
        id="education"
        data-section
        className={`py-20 px-4 ${visibleSections.has("education") ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 font-[family-name:var(--font-heading)]">
            Formação Acadêmica
          </h2>

          <Card className="glass-effect hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 shrink-0">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Bacharelado em Sistemas de Informação</h3>
                    <p className="text-blue-600 font-medium">Faculdade Uniube</p>
                    <p className="text-sm text-muted-foreground">Jan 2023 – Dez 2026 (previsto)</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "Engenharia de Software",
                      "Arquitetura de Software",
                      "Desenvolvimento Web",
                      "Banco de Dados",
                      "Mensageria",
                      "Clean Code",
                      "Scrum & Kanban",
                      "Matemática Discreta",
                      "Estatística",
                    ].map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── CONTATO ──────────────────────────────────────────── */}
      <section
        id="contact"
        data-section
        className={`py-20 px-4 bg-muted/30 ${visibleSections.has("contact") ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-[family-name:var(--font-heading)]">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open("mailto:lopes.biel2588@gmail.com", "_blank")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 cursor-pointer text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => window.open("https://linkedin.com/in/gabriel-lopes-968b111a5", "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8 px-4 bg-muted border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Gabriel Lopes. Desenvolvido com Next.js</p>
        </div>
      </footer>
    </div>
  )
}