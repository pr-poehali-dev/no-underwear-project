import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL",
    "Docker", "AWS", "Figma", "Git", "REST API"
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Современная платформа для онлайн-торговли с интеграцией платежей",
      tags: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-primary to-secondary"
    },
    {
      title: "AI Analytics Dashboard",
      description: "Дашборд с визуализацией данных и ML-предсказаниями",
      tags: ["Python", "TensorFlow", "React"],
      gradient: "from-accent to-primary"
    },
    {
      title: "Mobile Banking App",
      description: "Мобильное приложение для управления финансами",
      tags: ["React Native", "TypeScript", "Firebase"],
      gradient: "from-secondary to-accent"
    },
    {
      title: "Social Network",
      description: "Социальная сеть с real-time чатом и новостной лентой",
      tags: ["React", "WebSocket", "MongoDB"],
      gradient: "from-primary via-accent to-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="flex gap-6">
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">О себе</a>
            <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Проекты</a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <Badge variant="secondary" className="mb-4 text-lg px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50">
                Доступен для проектов
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-heading leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                Создаю цифровые
              </span>
              <br />
              <span className="text-foreground">решения</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fullstack разработчик с опытом создания современных веб-приложений и UI/UX дизайна
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                <Icon name="Mail" className="mr-2" size={20} />
                Связаться
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8">
                <Icon name="Download" className="mr-2" size={20} />
                Резюме
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  О себе
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Занимаюсь разработкой более 5 лет. Специализируюсь на создании высоконагруженных веб-приложений 
                и современных пользовательских интерфейсов.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Работаю с современным стеком технологий и постоянно изучаю новые инструменты. 
                Особое внимание уделяю производительности, безопасности и UX.
              </p>
              <div className="flex gap-4 pt-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Icon name="Github" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Icon name="Linkedin" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Icon name="Twitter" size={24} />
                </Button>
              </div>
            </div>
            <div className="space-y-6 animate-scale-in">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-heading mb-4">Навыки</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="px-4 py-2 text-base bg-background/50 hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Избранные проекты
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Подборка моих последних работ
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-all duration-300 overflow-hidden bg-card border-border hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      <Icon name="ExternalLink" className="mr-2" size={16} />
                      Демо
                    </Button>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      <Icon name="Github" className="mr-2" size={16} />
                      Код
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Свяжитесь со мной
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Готов обсудить ваш проект
            </p>
          </div>
          <Card className="bg-card border-border animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..." 
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2024 Portfolio. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
