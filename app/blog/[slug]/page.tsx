import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { SafeImage } from "@/components/safe-image";

const blogPosts: { [key: string]: any } = {
  "designer-with-ai-full-cycle": {
    title: "Що може робити дизайнер, який використовує AI — від ідеї до живого продукту",
    date: "2025-01-30",
    readTime: "10 min read",
    content: `Нещодавно, після того як саме AI обмеження прямо на співбесіді в Cieden не дали мені отримати позицію я пройшов весь цикл розробки: від концепції до задеплоєного SaaS з реальним клієнтом.

Є думка, що дизайнер малює, а розробник будує. Я покажу, як це виглядає, коли одна людина з AI-інструментами проходить весь шлях. На прикладі реального SaaS, який зараз працює з живим клієнтом.

Продукт і стек

AI-платформа для автоматизації телефонних замовлень у ресторанах. Клієнт дзвонить — відповідає AI-агент, приймає замовлення, передає на кухню. Без людини. 24/7.

Frontend: Next.js 14 + TypeScript + Tailwind
Auth/DB: Supabase (PostgreSQL + RLS + Realtime)
Телефонія: Telnyx (SIP + number provisioning)
STT: Deepgram Nova-2
AI: OpenAI GPT-4o (function calling)
TTS: Google Cloud WaveNet
Білінг: Stripe (subscriptions + usage metering)
Деплой: Vercel Edge Functions
Dev: Cursor AI + Claude

Бізнес-логіка перед макетами

Оператор на телефоні — $3,000/міс. AI-агент — $249/міс. Собівартість одного 3-хвилинного дзвінка — ≈$.... Це не дизайн-рішення, але воно визначає продукт і ціну. AI допоміг порівняти 6 провайдерів і побудувати фінансову модель до першого екрану.

Реєстрація як автоматизований пайплайн

Від реєстрації до живого номера — менше 5 хвилин:

Supabase Auth створює user
 → PostgreSQL trigger: restaurant + ai_agent + billing_account
 → Edge Function → Telnyx API: купує номер, конфігурує webhook
 → Stripe API: створює customer, підв'язує до акаунту
 → Клієнт у дашборді — номер вже є, агент живий

Якщо будь-який крок падає — транзакція робить повний rollback. Ніяких "частково налаштованих" станів.

Пайплайн дзвінка

Дзвінок → Telnyx webhook
 → Deepgram WebSocket (realtime STT)
 → GPT-4o mini: get_menu() / add_to_order() / confirm_order()
 → Google TTS → аудіо назад у дзвінок
 → INSERT orders → Realtime → дашборд оновлюється
 → Stripe metering: usage event за хвилини

Латентність між словом клієнта і відповіддю — менше 1200мс.

База даних

Row Level Security на рівні Postgres — кожен ресторан бачить тільки свої дані без жодної перевірки в коді. Realtime-підписки: нове замовлення → дашборд оновлюється в момент, поки клієнт ще говорить.

Що далі — субдомени як продукт

Будь-який бізнес реєструється і отримує свій URL: ось мій тестовий url

fonitix.ai/cafe-zubrd

Жива сторінка з меню і AI-агентом. QR-код на вході — клієнт одразу всередині. Маршрутизація через Next.js Dynamic Routes + Edge middleware: slug → restaurant_id без звернення до бази на кожен запит.

Як Instagram для ідентичності. Але для локального бізнесу з вбудованим AI.

Підсумок

Один дизайнер. AI-інструменти. Повний цикл — від дослідження і unit-економіки до бази даних, телефонії, AI-пайплайну, білінгу і деплою.
Планка входу змінилась. Дизайнер може значно більше.

Тренуйтеся... Нижче як зазвичай даю лайфхаки`,
    images: [
      "/images/fonitix/fonitix_flow1.png",
      "/images/fonitix/fonitix_flow2.png",
      "/images/fonitix/fonitix_flow3.png",
      "/images/fonitix/fonitix_flow4.png",
      "/images/fonitix/fonitix_flow5.png"
    ]
  },
  "5-things-to-build-saas": {
    title: "5 речей, які дозволили мені як дизайнеру збудувати повноцінний SaaS",
    date: "2025-01-30",
    readTime: "5 min read",
    content: `Нещодавно, після того як саме AI обмеження прямо на співбесіді в Cieden не дали мені отримати позицію я пройшов весь цикл розробки: від концепції до задеплоєного SaaS з реальним клієнтом.

Є думка, що дизайнер малює, а розробник будує. Я покажу, як це виглядає, коли одна людина з AI-інструментами проходить весь шлях. На прикладі реального SaaS, який зараз працює з живим клієнтом.

Продукт і стек

AI-платформа для автоматизації телефонних замовлень у ресторанах. Клієнт дзвонить — відповідає AI-агент, приймає замовлення, передає на кухню. Без людини. 24/7.

Frontend: Next.js 14 + TypeScript + Tailwind
Auth/DB: Supabase (PostgreSQL + RLS + Realtime)
Телефонія: Telnyx (SIP + number provisioning)
STT: Deepgram Nova-2
AI: OpenAI GPT-4o (function calling)
TTS: Google Cloud WaveNet
Білінг: Stripe (subscriptions + usage metering)
Деплой: Vercel Edge Functions
Dev: Cursor AI + Claude

Бізнес-логіка перед макетами

Оператор на телефоні — $3,000/міс. AI-агент — $249/міс. Собівартість одного 3-хвилинного дзвінка — ≈$.... Це не дизайн-рішення, але воно визначає продукт і ціну. AI допоміг порівняти 6 провайдерів і побудувати фінансову модель до першого екрану.

Реєстрація як автоматизований пайплайн

Від реєстрації до живого номера — менше 5 хвилин:

Supabase Auth створює user
 → PostgreSQL trigger: restaurant + ai_agent + billing_account
 → Edge Function → Telnyx API: купує номер, конфігурує webhook
 → Stripe API: створює customer, підв'язує до акаунту
 → Клієнт у дашборді — номер вже є, агент живий

Якщо будь-який крок падає — транзакція робить повний rollback. Ніяких "частково налаштованих" станів.

Пайплайн дзвінка

Дзвінок → Telnyx webhook
 → Deepgram WebSocket (realtime STT)
 → GPT-4o mini: get_menu() / add_to_order() / confirm_order()
 → Google TTS → аудіо назад у дзвінок
 → INSERT orders → Realtime → дашборд оновлюється
 → Stripe metering: usage event за хвилини

Латентність між словом клієнта і відповіддю — менше 1200мс.

База даних

Row Level Security на рівні Postgres — кожен ресторан бачить тільки свої дані без жодної перевірки в коді. Realtime-підписки: нове замовлення → дашборд оновлюється в момент, поки клієнт ще говорить.

Що далі — субдомени як продукт

Будь-який бізнес реєструється і отримує свій URL: ось мій тестовий url

fonitix.ai/cafe-zubrd

Жива сторінка з меню і AI-агентом. QR-код на вході — клієнт одразу всередині. Маршрутизація через Next.js Dynamic Routes + Edge middleware: slug → restaurant_id без звернення до бази на кожен запит.

Як Instagram для ідентичності. Але для локального бізнесу з вбудованим AI.

Підсумок

Один дизайнер. AI-інструменти. Повний цикл — від дослідження і unit-економіки до бази даних, телефонії, AI-пайплайну, білінгу і деплою.
Планка входу змінилась. Дизайнер може значно більше.

Тренуйтеся... Нижче як зазвичай даю лайфхаки

---

Найчастіше питали: "з чого починати?" Відповідаю.

1. Спочатку один "бог-промпт" — до будь-якого коду

Перед першим екраном пишеш Claude:

Я будую SaaS для [що робить].
Користувач: [хто].
Головна дія: [одна дія].
Стек: Next.js 14, Supabase, TypeScript.
Спроектуй схему бази даних, 
основні API routes і auth flow.

AI дає архітектуру. Ти одразу бачиш де складність — ще до того як написав рядок коду.

2. Схема бази — найважливіший артефакт

Якщо схема правильна — все інше будується швидко. Якщо ні — переробляєш все.

Ось мій продукт: [2 речення].
Створи Supabase schema з таблицями, 
зв'язками і Row Level Security.
Поясни кожне рішення одним реченням.

RLS на рівні Postgres — це коли не треба писати WHERE user_id = auth.uid() в кожному запиті. База сама захищає дані.

3. Автоматизація онбордингу — через тригери, не через код

Найбільша помилка: робити все через API calls у коді. Падає один — все зламано.

Правильно: PostgreSQL trigger який при створенні user автоматично створює всі пов'язані записи в одній транзакції. Або все, або rollback. Ніяких "наполовину зареєстрованих" користувачів.

Напиши PostgreSQL function і trigger:
при INSERT у таблицю users —
автоматично створити записи 
у restaurants, ai_agents, billing_accounts.
З rollback якщо щось падає.

4. Один компонент за раз — не весь продукт

Не "зроби дашборд". А:

Зроби компонент OrderCard.
Props: order_id, customer_name, 
items[], total, status.
Dark theme, Tailwind, TypeScript.
Statuses: new / preparing / ready — 
різні кольори.

Бачиш результат за 2 хвилини. Правиш. Йдеш далі.

5. Коли застряг — баг-репорт замість питання

Не питай "чому не працює". Пиши:

Очікую: після реєстрації 
створюється запис у restaurants.
Отримую: запис не створюється, 
статус 500.
Код: [код]
Помилка: [повний error log]

Чим точніший опис — тим швидше рішення. AI не екстрасенс.

Головне

AI не замінює розуміння продукту. Але різко знижує вартість помилки — спробувати, зламати і переробити тепер коштує годину, не тиждень.`,
    images: [
      "/images/fonitix/fonitix_flow1.png",
      "/images/fonitix/fonitix_flow2.png",
      "/images/fonitix/fonitix_flow3.png",
      "/images/fonitix/fonitix_flow4.png",
      "/images/fonitix/fonitix_flow5.png"
    ]
  },
  "ai-idea-stress-tests": {
    title: "AI Idea Stress Tests: 10 Prompts to Validate Before You Build",
    date: "2025-01-29",
    readTime: "6 min read",
    content: `The AI market isn't the problem.
Poor validation is.

Before writing code or building an MVP, I run every AI idea through these stress tests.

Here are the exact prompts.

1️⃣ Expansion vs Replacement Test

Prompt:

Analyze this product idea: [insert idea].
Is AI expanding an existing workflow or replacing the core value of an existing SaaS category?
If replacing — which current products become vulnerable and why?

If the answer is "thin layer over LLM," risk is high.

2️⃣ Commodity Risk Test

Evaluate whether this idea can be easily replicated using a generic LLM + simple UI.
What defensible elements are missing?

If it can be rebuilt in two weeks with an API, there's no moat.

3️⃣ Real Cost Structure Test

Estimate the cost structure of this AI product at 10k, 100k, and 1M users.
Include LLM inference assumptions and margin pressure scenarios.

Most AI founders underestimate compute.

4️⃣ Unit Economics Alignment

Suggest possible pricing models (seat-based, usage-based, outcome-based).
Which model aligns best with the value delivered?

If value ≠ number of users, seat-based pricing will break.

5️⃣ Workflow Control Test

Does this idea control a critical workflow or function as an optional tool?
What happens if users stop using it for a week?

If nothing critical breaks, it's not a system-level product.

6️⃣ Data Moat Test

What proprietary data advantages would this product need to become defensible in 3–5 years?

Without a clear answer, long-term defensibility is weak.

7️⃣ GTM Reality Check

Identify the most realistic first customer segment.
Why would they urgently switch?

No pain, no business.

8️⃣ Incumbent Reaction Test

If a large incumbent adds similar AI capability, does this startup survive? Why or why not?

If the answer is no — it's a feature, not a company.

9️⃣ Automation Depth Test

What percentage of the target workflow can realistically be automated in the next 2–3 years?

AI often automates 30%, while founders promise 90%.

🔟 Downturn Survival Test

In a market correction scenario, which 30% of AI startups survive — and would this idea be among them?

Final thought

AI isn't the challenge.
The illusion of differentiation is.

If your idea doesn't pass at least 6 out of 10 stress tests,
it's not a startup yet — it's an experiment.`
  },
  "how-to-add-ai-skills-to-resume": {
    title: "How to Add AI Skills to Your Resume to Look Like Senior/Lead (Not Like Middle with Midjourney in CV)",
    date: "2025-01-28",
    readTime: "8 min read",
    content: `📝 POST

How to Add AI Skills to Your Resume,
to Look Like Senior/Lead

(Not like middle with Midjourney in CV)

---

Most designers add AI incorrectly:

❌ "AI tools: ChatGPT, Midjourney, Cursor"
❌ "AI-assisted design"
❌ "Prompt engineering"

This looks like:
"know Microsoft Word" in 2010.

This is not expertise. This is a list of applications.

---

Here's the difference:

Middle level:
"Used AI to accelerate the design process"

Senior/Lead level:
"Reduced validation cycle from 6 months to 3 weeks through AI-MVP prototyping, preserving $1.1M in investments"

See the difference?

One is about the tool.
The other is about business results.

---

How to properly add AI to your resume:

1. Not tool — result
Instead of: "Built AI chatbot"
Write: "Architected conversational AI that increased checkout conversion by 15%"

2. Not process — economics
Instead of: "Optimized prompts"
Write: "Reduced AI infrastructure costs by 32–60% through prompt architecture redesign"

3. Not list — case study
Instead of: "Technologies: OpenAI API, Python"
Write: "Built backend logic in Python (FastAPI) for token-level cost optimization"

---

But how to rewrite this quickly?

I used AI to rewrite my own CV from 8/10 to 9.5/10.

Here are the prompts that actually work 👇

---

💬 COMMENT 1 — For Product Designer

If you're targeting a Product Designer / AI Product role:

Prompt 1: Rewrite through ownership
\`\`\`
You are a hiring manager at an AI-first product company.
Rewrite my experience: [insert 3-5 bullet points].

Transform into:
- End-to-end ownership (discovery → launch → revenue)
- Business metrics (revenue, retention, cost reduction)
- AI as strategic multiplier, not just execution tool

Remove: "participated", "helped", "worked on"
Add: "owned", "accountable for", "reduced/increased by X%"

Keep it under 8 bullets total.
\`\`\`

Prompt 2: Find weak spots
\`\`\`
Review this CV summary for Senior Product Designer role: 
[insert summary]

Find 3 critical gaps:
1. What business impact is missing?
2. What sounds like middle, not senior?
3. What AI competencies should be added?

Give specific rewrite examples for each.
\`\`\`

Prompt 3: Reformulate project
\`\`\`
Rewrite this project: [insert project description]

Structure:
→ Business problem (with $ impact if possible)
→ My AI solution (architecture + tech decisions)
→ Measurable result (metrics)

Max 4 bullets. Tone: executive, confident.
Example style: "Reduced X by Y%, enabling Z business outcome"
\`\`\`

Result:
From a designer who "uses AI"
→ Product Owner who impacts unit economics

---

💬 COMMENT 2 — For UX Designer

If you're targeting a UX Designer / UX Researcher role:

Prompt 1: Rewrite through user impact
\`\`\`
You are a UX hiring manager at a SaaS company.
Rewrite my UX case: [insert description]

Show:
- User research → hypothesis → validation method
- Design decisions based on data, not intuition
- Measurable user behavior change (not "improved UX")

Remove: "created wireframes", "designed screens", "made it better"
Add: "validated hypothesis that...", "increased task completion by..."
\`\`\`

Prompt 2: AI as research tool
\`\`\`
I used AI in my UX process: [describe specifically how]

Help me position this in CV as:
1. Research acceleration technique (not shortcut)
2. Hypothesis testing tool
3. Pattern recognition enabler

Give 2-3 bullet options that sound senior-level strategic.
\`\`\`

Prompt 3: Add retention metrics
\`\`\`
Here's my UX work description: [insert]

I'm missing retention/engagement metrics.
Suggest how to add approximate impact statements like:
"Improved onboarding completion by ~X%"
"Reduced churn drivers through..."

Based on: [short description of what you did]
\`\`\`

Result:
From UX that "makes wireframes"
→ UX Strategist who impacts retention

---

💬 COMMENT 3 — For UX/UI Designer

If you're targeting a UX/UI Designer / Product Designer role:

Prompt 1: Design System as business asset
\`\`\`
I built a design system with [number] components for [product type].

Rewrite this for CV to show:
- Business value (reduced dev time, improved consistency)
- Scalability thinking (multi-product, multi-team)
- Engineering impact (component reuse rate, speed to market)

Give 3 bullet points. Avoid words: "beautiful", "modern", "clean"
Use: "accelerated", "enabled", "reduced inconsistencies by..."
\`\`\`

Prompt 2: UI → Product Systems
\`\`\`
Rewrite my UI projects: [insert 2-3 projects]

Transform visual work into systems thinking:
- Component architecture decisions
- Cross-platform consistency strategy
- Developer handoff optimization

Show I think beyond pixels.
Target: Senior UI System Designer or Product Designer role.
\`\`\`

Prompt 3: Entire Experience block
\`\`\`
Here is my UX/UI experience: [insert entire section]

I'm targeting product IT companies (not agencies).
Rewrite to emphasize:
- Product ownership mindset
- Collaboration with engineering
- Measurable business outcomes

Remove:
- Tool lists without context ("Figma, Sketch...")
- Aesthetic descriptions ("beautiful design")
- Client work that looks like project-to-project freelance

Max 8 bullets per role.
\`\`\`

Result:
From UI designer of "beautiful screens"
→ Product Designer with systems thinking

---

💬 COMMENT 4 — How to verify the result

After rewriting through AI — run this:

\`\`\`
Review my updated CV: [insert entire experience]

Grade from 1-10 on:
1. Business impact clarity (revenue, cost, speed)
2. Ownership level (owner vs executor)
3. Senior positioning (strategic vs tactical)
4. AI integration (multiplier vs tool user)

For each score below 8 — give specific fix with example.
\`\`\`

If you got 8+ on all points — you're done.

If lower:
→ repeat prompts above
→ combine approaches from different roles

---

The main rule:

AI in resume — it's not "what you used"
It's — "how you created business value through AI"

Senior/Lead is not about tools.
It's about results.`
  }
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Sticky Back Button */}
      <div className="sticky top-16 z-50 bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/80 border-b border-[#171717]">
        <div className="container mx-auto px-6 py-4">
          <Link href="/blog" prefetch={false} className="inline-flex items-center text-sm text-[#737373] hover:text-[#A3A3A3] transition-colors duration-200 font-light">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      <div className="container px-6 py-16 md:py-24 max-w-4xl">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-[#E5E5E5]">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-[#737373] font-light">
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-[#262626]" />
          
          <article className="prose prose-invert max-w-none">
            <div className="space-y-12 md:space-y-16">
              {/* Content Sections */}
              {(() => {
                const hasSeparator = post.content.includes('---');
                const sections = hasSeparator ? post.content.split('---') : [post.content];
                const introduction = sections[0]?.trim() || '';
                const mainSections = hasSeparator ? sections.slice(1) : [];
                const hasImages = post.images && post.images.length > 0;
                
                return (
                  <>
                    {/* Introduction Section */}
                    {introduction && (
                      <div className="relative">
                        <div className="hidden md:flex absolute left-0 top-6 items-center justify-center w-16 h-16">
                          <div className="absolute w-4 h-4 rounded-full border-2 border-[#737373] bg-[#0A0A0A] z-10" />
                          <div className="absolute w-12 h-12 rounded-full border border-[#737373] opacity-50" />
                        </div>
                        <div className="md:ml-24">
                          <div className="bg-[#0F0F0F] border border-[#262626] rounded-lg p-6 md:p-8">
                            <div className="text-[#A3A3A3] text-base leading-relaxed font-light space-y-4 whitespace-pre-line">
                              {introduction}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Image Section */}
                    {hasImages && (
                      post.images.map((image: string, imgIndex: number) => (
                        <div key={imgIndex} className="relative">
                          <div className="hidden md:flex absolute left-0 top-6 items-center justify-center w-16 h-16">
                            <div className="absolute w-4 h-4 rounded-full border-2 border-[#737373] bg-[#0A0A0A] z-10" />
                            <div className="absolute w-12 h-12 rounded-full border border-[#737373] opacity-50" />
                          </div>
                          <div className="md:ml-24">
                            <div className="bg-[#0F0F0F] border border-[#262626] rounded-lg p-6 md:p-8 overflow-hidden">
                              <SafeImage
                                src={image}
                                alt={`${post.title} - Image ${imgIndex + 1}`}
                                className="w-full h-auto object-cover rounded"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    )}

                    {/* Default image for posts with separator but no images */}
                    {!hasImages && hasSeparator && (
                      <div className="relative">
                        <div className="hidden md:flex absolute left-0 top-6 items-center justify-center w-16 h-16">
                          <div className="absolute w-4 h-4 rounded-full border-2 border-[#737373] bg-[#0A0A0A] z-10" />
                          <div className="absolute w-12 h-12 rounded-full border border-[#737373] opacity-50" />
                        </div>
                        <div className="md:ml-24">
                          <div className="bg-[#0F0F0F] border border-[#262626] rounded-lg p-6 md:p-8 overflow-hidden">
                            <SafeImage
                              src="/images/ai_post.png"
                              alt="AI Resume Tool Interface"
                              className="w-full h-auto object-cover rounded"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Main Content Sections */}
                    {mainSections.map((section: string, index: number) => {
                      if (!section.trim()) return null;
                      
                      return (
                        <div key={index} className="relative">
                          <div className="hidden md:flex absolute left-0 top-6 items-center justify-center w-16 h-16">
                            <div className="absolute w-4 h-4 rounded-full border-2 border-[#737373] bg-[#0A0A0A] z-10" />
                            <div className="absolute w-12 h-12 rounded-full border border-[#737373] opacity-50" />
                          </div>
                          <div className="md:ml-24">
                            <div className="bg-[#0F0F0F] border border-[#262626] rounded-lg p-6 md:p-8 hover:border-[#404040] transition-colors duration-300">
                              <div className="text-[#A3A3A3] text-base leading-relaxed font-light space-y-4 whitespace-pre-line">
                                {section.trim()}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                );
              })()}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

