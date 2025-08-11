import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getImagePath } from '@/lib/image-path';

const products = [
  {
    title: 'Миндаль в горьком шоколаде',
    description: 'Крупный калифорнийский миндаль сорта Nonpareil, обжаренный до золотистой текстуры, окружён слоем насыщенного горького ремесленного шоколада с содержанием какао 70%. Равное соотношение миндаля и шоколада делает вкус идеальным: глубокая, благородная горечь шоколада подчёркивает естественную сладость и хруст ореха.',
    feature: 'Для тех, кто любит чистоту вкуса, где нет ничего лишнего',
    color: '#E67E7E', // Coral/Peach
    image: getImagePath('/images/almond1.jpg'),
    aiHint: 'dark chocolate almond'
  },
  {
    title: 'Миндаль в молочном шоколаде с прослойкой темного',
    description: 'Калифорнийский миндаль сорта Nonpareil покрыт двумя слоями ремесленного шоколада. Первый — горький шоколад 70%, насыщенный и сложный. Второй — молочный шоколад, нежный и сливочный. Сначала молочный шоколад радует лёгкой сладостью, затем горький шоколад добавляет изысканности, а в финале ореховый хруст миндаля завершает композицию.',
    feature: 'Настоящий дуэт контрастов',
    color: '#A076C4', // Purple
    image: getImagePath('/images/mil2.jpg'),
    aiHint: 'milk chocolate almond'
  },
  {
    title: 'Миндаль в белом шоколаде с прослойкой темного',
    description: 'Калифорнийский миндаль сорта Nonpareil сначала погружается в тёмный ремесленный шоколад, а затем покрывается слоем нежного белого шоколада. Белый шоколад встречает мягкой сладостью, тёмный — привносит структуру и насыщенность, а миндаль в центре завершает симфонию ярким хрустом.',
    feature: 'Сочетание плавной сладости и благородной глубины',
    color: '#76A9C4', // Blue
    image: getImagePath('/images/white3.jpg'),
    aiHint: 'white chocolate almond'
  },
  {
    title: 'Миндаль в карамельном шоколаде с гималайской солью',
    description: 'Калифорнийский миндаль сорта Nonpareil и шоколад "Карамель" с розовой гималайской солью создают изысканное сочетание. Шоколад обволакивает орех теплыми оттенками топлёного молока и карамели, а кристаллы гималайской соли добавляют лёгкий солоноватый акцент. Сначала — нежная карамель, затем — контрастный солёный акцент, а в финале — хруст миндаля.',
    feature: 'Для тех, кто ищет необычные и запоминающиеся сочетания',
    color: '#E6A27E', // Orange/Gold
    image: getImagePath('/images/caramel4.jpg'),
    aiHint: 'caramel chocolate almond'
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <Image src={getImagePath('/images/logo.png')} alt="ALMO Logo" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden items-center space-x-6 text-lg md:flex">
            <Link href="#collection" className="transition-colors hover:text-primary">
              Наша коллекция
            </Link>
            <Link href="#about" className="transition-colors hover:text-primary">
              О бренде
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Контакты
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold tracking-tight font-headline md:text-7xl lg:text-8xl text-primary">
              <Image src={getImagePath('/images/logo.png')} alt="ALMO" width={300} height={100} className="mx-auto h-20 w-auto md:h-28 lg:h-32" />
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-headline text-muted-foreground">
              Гармония природных компонентов
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-foreground/80">
              Премиальные драже с калифорнийским миндалем сорта Nonpareil в ремесленном шоколаде
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#collection">Наша коллекция</Link>
            </Button>
          </div>
        </section>

        <section id="collection" className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center font-headline text-primary mb-12">Наша коллекция</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <Card key={product.title} className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-transparent bg-background">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={600}
                        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={product.aiHint}
                      />
                       <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full border-2 border-background" style={{ backgroundColor: product.color }} aria-label={`Цвет упаковки: ${product.color}`}></div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl font-headline font-bold text-primary">{product.title}</CardTitle>
                    <p className="mt-4 text-foreground/80 text-sm">{product.description}</p>
                    <p className="mt-4 text-sm font-semibold text-muted-foreground italic">"{product.feature}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-6">
             <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold font-headline text-primary mb-6">О бренде ALMO</h2>
              <p className="text-lg text-foreground/80 mb-4">
                ALMO — это бренд для тех, кто ценит чистоту вкуса и качество ингредиентов. Мы используем только калифорнийский миндаль сорта Nonpareil и ремесленный шоколад, создавая драже с равным соотношением компонентов для идеальной гармонии вкуса.
              </p>
              <p className="text-lg text-foreground/80">
                Наше производство — это искусство, где каждый этап контролируется с особой тщательностью, чтобы вы могли насладиться истинным, чистым и гармоничным вкусом.
              </p>
            </div>
            <div className="order-1 md:order-2">
                 <Image src={getImagePath('/images/mainPhoto.jpg')} alt="ALMO Premium Delights" width={800} height={600} className="rounded-lg shadow-xl" />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center font-headline text-primary mb-12">Свяжитесь с нами</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="flex flex-col space-y-8">
                <div>
                    <h3 className="text-2xl font-bold font-headline text-primary mb-4">Задайте вопрос</h3>
                    <form className="space-y-4">
                      <Input type="text" placeholder="Ваше имя" aria-label="Ваше имя" className="bg-background" />
                      <Input type="email" placeholder="Ваш Email" aria-label="Ваш Email" className="bg-background" />
                      <Textarea placeholder="Ваше сообщение" aria-label="Ваше сообщение" className="bg-background" />
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Отправить</Button>
                    </form>
                </div>
                <div>
                   <h3 className="text-2xl font-bold font-headline text-primary mb-4">Наши контакты</h3>
                   <div className="space-y-4 text-lg">
                      <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:almoinfo@mail.ru" className="hover:text-primary">almoinfo@mail.ru</a>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <a href="tel:88003008971" className="hover:text-primary">8 800 300 89 71</a>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-8 md:px-6 flex flex-col md:flex-row items-center justify-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} ALMO. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
