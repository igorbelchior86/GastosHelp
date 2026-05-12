const supportEndpoint = "https://script.google.com/macros/s/AKfycbw83_hz1qnhsrf4NAjPcrZi7pDm4FNsB5DOWWpjDDE48OCVYtyP4ErD8rvlM7FgqCm9/exec";

const copy = {
  en: {
    a11y: { skip: "Skip to main content" },
    nav: {
      features: "Features",
      realLife: "For families",
      support: "Support",
      store: "App Store",
    },
    themeToggle: { light: "Light", dark: "Dark" },
    hero: {
      titleTop: "Track your money.",
      titleAccent: "With clarity.",
      subtitle: "Budgets, recurring bills, shared accounts, planned spending, cards, and smart insights — all in one calm place.",
      primaryCta: "Download on App Store",
      secondaryCta: "See how it works",
      meta: "Built for iPhone and iPad · Apple-native feel · private support intake",
    },
    trust: {
      title: "Built with privacy in mind. Your data stays with you.",
      noTracking: "No tracking",
      noAds: "No ads",
      native: "Apple-native",
    },
    features: {
      title: "Everything you need to manage your money",
      subtitle: "Powerful features to help you plan, track, and stay in control.",
      projected: { title: "Projected balance", body: "See your future balance each month with clear projections and trends." },
      budgets: { title: "Budgets", body: "Create monthly budgets by category and watch the progress ring move as transactions land.", caption: "Food budget · 1.620 € of 2.250 €" },
      recurring: { title: "Recurring", body: "Bills and income that repeat. Track every recurring charge or payment as a stable part of the month." },
      planned: { title: "Planned", body: "See what is coming. Preview upcoming spending and income before it hits the balance." },
      cards: { title: "Cards & invoices", body: "Track cards without losing the thread. Monitor invoices and payment cycles." },
      panorama: { title: "Panorama insights", body: "Read the month before it reads you. See balance, category, and pressure signals." },
    },
    realLife: {
      title: "Designed for real life",
      subtitle: "Thoughtful capabilities that make a difference every day.",
      shared: { title: "Shared accounts", body: "Share accounts with family or partners and keep everyone on the same page." },
      sync: { title: "Sync everywhere", body: "iCloud-style access across sessions. Your data stays with you." },
      offline: { title: "Offline first", body: "Works offline. Changes sync automatically when you are back online." },
      widgets: { title: "Widgets", body: "Check your balance and budgets right from your Home Screen." },
      security: { title: "Secure by design", body: "Privacy-aware access and conservative sharing come first." },
      simple: { title: "Simplicity", body: "Clean, fast, and focused on what matters." },
    },
    support: {
      title: "We’re here to help",
      subtitle: "Found a bug or have a feature request? Send a private support request without a GitHub account.",
      points: {
        bugs: "Bug reports",
        features: "Feature requests",
        questions: "Questions & feedback",
      },
    },
    form: {
      subjectLabel: "Title",
      subjectPlaceholder: "Short summary of the issue",
      emailLabel: "Contact email",
      emailPlaceholder: "you@example.com",
      categoryLabel: "Type",
      categoryPlaceholder: "Choose one",
      categories: {
        bug: "Bug report",
        budget: "Budgets",
        planned: "Planned spending",
        cards: "Cards & invoices",
        shared: "Shared accounts",
        sync: "Sync / offline",
        other: "Other",
      },
      versionLabel: "Environment",
      versionPlaceholder: "iOS version, device, app version, etc.",
      detailsLabel: "Description",
      detailsPlaceholder: "Describe the issue or idea in detail...",
      stepsLabel: "Steps to reproduce",
      stepsPlaceholder: "1. Go to...\n2. Tap on...\n3. See error...",
      submitCta: "Send support request",
      sending: "Sending...",
      success: "Request sent. We will use your contact email if we need more details.",
      error: "We could not send the request. Please try again in a moment.",
    },
    faq: {
      title: "Frequently asked questions",
      items: {
        github: { q: "Is my data safe with Gastos+?", a: "The app is designed around private profiles, conservative sharing, and no marketing tracking on this site." },
        githubAccount: { q: "Does Gastos+ work offline?", a: "Yes. The app has offline queueing and sync behavior for when connectivity returns." },
        languages: { q: "Can I share accounts with my family or partner?", a: "Yes. Shared account support uses invites, membership paths, and account history." },
        free: { q: "Is Gastos+ free?", a: "The landing keeps pricing neutral until the App Store listing is the source of truth." },
      },
    },
    footer: {
      copy: "© 2026 Gastos+. Built for clarity, not noise.",
      support: "Support",
      security: "Security",
      privacy: "Privacy",
    },
  },
  "pt-BR": {
    a11y: { skip: "Ir para o conteúdo principal" },
    nav: {
      features: "Recursos",
      realLife: "Para famílias",
      support: "Suporte",
      store: "App Store",
    },
    themeToggle: { light: "Claro", dark: "Escuro" },
    hero: {
      titleTop: "Controle seu dinheiro.",
      titleAccent: "Com clareza.",
      subtitle: "Orçamentos, contas recorrentes, contas compartilhadas, gastos planejados, cartões e insights inteligentes — tudo em um lugar calmo.",
      primaryCta: "Baixar na App Store",
      secondaryCta: "Ver como funciona",
      meta: "Feito para iPhone e iPad · visual nativo Apple · suporte privado",
    },
    trust: {
      title: "Feito com privacidade em mente. Seus dados ficam com você.",
      noTracking: "Sem rastreamento",
      noAds: "Sem anúncios",
      native: "Nativo Apple",
    },
    features: {
      title: "Tudo o que você precisa para gerenciar seu dinheiro",
      subtitle: "Recursos fortes para planejar, acompanhar e manter controle.",
      projected: { title: "Saldo projetado", body: "Veja seu saldo futuro mês a mês com projeções e tendências claras." },
      budgets: { title: "Orçamentos", body: "Crie orçamentos mensais por categoria e acompanhe o progresso conforme as transações entram.", caption: "Orçamento de mercado · 1.620 € de 2.250 €" },
      recurring: { title: "Recorrentes", body: "Contas e receitas que se repetem. Trate cada cobrança ou pagamento como parte estável do mês." },
      planned: { title: "Planejado", body: "Veja o que vem pela frente. Antecipe gastos e entradas antes de chegarem ao saldo." },
      cards: { title: "Cartões e faturas", body: "Acompanhe cartões sem perder o fio. Monitore faturas e ciclos de pagamento." },
      panorama: { title: "Insights Panorama", body: "Leia o mês antes que ele leia você. Veja sinais de saldo, categoria e pressão." },
    },
    realLife: {
      title: "Desenhado para a vida real",
      subtitle: "Capacidades úteis que fazem diferença todos os dias.",
      shared: { title: "Contas compartilhadas", body: "Compartilhe contas com família ou parceiro e mantenha todos na mesma página." },
      sync: { title: "Sync em todos os lugares", body: "Acesso entre sessões com os dados certos no perfil certo." },
      offline: { title: "Offline primeiro", body: "Funciona offline. Mudanças sincronizam automaticamente quando você volta." },
      widgets: { title: "Widgets", body: "Veja saldo e orçamentos direto na Tela de Início." },
      security: { title: "Seguro por design", body: "Acesso com privacidade e compartilhamento conservador vêm primeiro." },
      simple: { title: "Simplicidade", body: "Limpo, rápido e focado no que importa." },
    },
    support: {
      title: "Estamos aqui para ajudar",
      subtitle: "Encontrou um bug ou tem um pedido de recurso? Envie um pedido privado sem precisar de conta GitHub.",
      points: {
        bugs: "Relatos de bug",
        features: "Pedidos de recurso",
        questions: "Dúvidas e feedback",
      },
    },
    form: {
      subjectLabel: "Título",
      subjectPlaceholder: "Resumo curto do problema",
      emailLabel: "E-mail de contato",
      emailPlaceholder: "voce@exemplo.com",
      categoryLabel: "Tipo",
      categoryPlaceholder: "Escolha uma opção",
      categories: {
        bug: "Relato de bug",
        budget: "Orçamentos",
        planned: "Gastos planejados",
        cards: "Cartões e faturas",
        shared: "Contas compartilhadas",
        sync: "Sync / offline",
        other: "Outro",
      },
      versionLabel: "Ambiente",
      versionPlaceholder: "Versão do iOS, aparelho, versão do app, etc.",
      detailsLabel: "Descrição",
      detailsPlaceholder: "Descreva o problema ou ideia em detalhes...",
      stepsLabel: "Passos para reproduzir",
      stepsPlaceholder: "1. Vá para...\n2. Toque em...\n3. Veja o erro...",
      submitCta: "Enviar pedido de suporte",
      sending: "Enviando...",
      success: "Pedido enviado. Usaremos seu e-mail de contato se precisarmos de mais detalhes.",
      error: "Não conseguimos enviar o pedido. Tente novamente em instantes.",
    },
    faq: {
      title: "Perguntas frequentes",
      items: {
        github: { q: "Meus dados estão seguros no Gastos+?", a: "O app foi desenhado com perfis privados, compartilhamento conservador e sem rastreamento de marketing neste site." },
        githubAccount: { q: "O Gastos+ funciona offline?", a: "Sim. O app tem fila offline e sincroniza quando a conectividade volta." },
        languages: { q: "Posso compartilhar contas com família ou parceiro?", a: "Sim. Contas compartilhadas usam convites, membros e histórico da conta." },
        free: { q: "O Gastos+ é gratuito?", a: "A landing mantém preço neutro até a página da App Store ser a fonte oficial." },
      },
    },
    footer: {
      copy: "© 2026 Gastos+. Feito para clareza, não ruído.",
      support: "Suporte",
      security: "Segurança",
      privacy: "Privacidade",
    },
  },
};

const elements = {
  html: document.documentElement,
  themeToggle: document.querySelector("[data-theme-toggle]"),
  themeLabel: document.querySelector("[data-theme-label]"),
  localeButtons: [...document.querySelectorAll("[data-locale]")],
  form: document.querySelector("#support-form"),
  formStatus: document.querySelector("[data-form-status]"),
};

const state = {
  locale: initialLocale(),
  theme: initialTheme(),
};

applyTheme(state.theme);
applyLocale(state.locale);

elements.themeToggle?.addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
elements.localeButtons.forEach((button) => button.addEventListener("click", () => applyLocale(button.dataset.locale)));
elements.form?.addEventListener("submit", submitSupport);

function initialLocale() {
  const query = new URLSearchParams(location.search).get("lang");
  const stored = localStorage.getItem("gastos.locale");
  if (query && copy[query]) return query;
  if (stored && copy[stored]) return stored;
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
}

function initialTheme() {
  const stored = localStorage.getItem("gastos.theme");
  if (stored === "light" || stored === "dark") return stored;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  state.theme = theme;
  elements.html.dataset.theme = theme;
  localStorage.setItem("gastos.theme", theme);
  document.querySelector("meta[name='theme-color']")?.setAttribute("content", theme === "dark" ? "#0b0d0c" : "#fbfbfd");
  if (elements.themeLabel) elements.themeLabel.textContent = copy[state.locale]?.themeToggle?.[theme] || theme;
}

function applyLocale(locale) {
  state.locale = copy[locale] ? locale : "en";
  elements.html.lang = state.locale;
  localStorage.setItem("gastos.locale", state.locale);
  document.title = state.locale === "pt-BR" ? "Gastos+ — Finanças pessoais com clareza" : "Gastos+ — Personal finance with clarity";
  renderTranslations();
  elements.localeButtons.forEach((button) => {
    const active = button.dataset.locale === state.locale;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (elements.themeLabel) elements.themeLabel.textContent = copy[state.locale].themeToggle[state.theme];
}

function renderTranslations() {
  const strings = copy[state.locale];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getPath(strings, node.dataset.i18n);
    if (typeof value === "string") node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = getPath(strings, node.dataset.i18nPlaceholder);
    if (typeof value === "string") node.setAttribute("placeholder", value);
  });
}

function getPath(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

async function submitSupport(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const subject = form.subject.value.trim();
  const email = form.email.value.trim();
  const category = form.category.value;
  const details = form.details.value.trim();
  if (!subject || !email || !category || !details) return;
  if (form.website?.value) return;

  const strings = copy[state.locale].form;
  const button = form.querySelector("button[type='submit']");
  const data = new FormData(form);
  data.set("subject", subject);
  data.set("email", email);
  data.set("category", category);
  data.set("details", details);
  data.set("version", form.version.value.trim());
  data.set("steps", form.steps.value.trim());
  data.set("locale", state.locale);
  data.set("theme", state.theme);
  data.set("page", location.href);
  data.set("userAgent", navigator.userAgent);

  setFormStatus(strings.sending);
  if (button) {
    button.disabled = true;
    button.textContent = strings.sending;
  }

  try {
    await fetch(supportEndpoint, { method: "POST", mode: "no-cors", body: data });
    form.reset();
    setFormStatus(strings.success);
  } catch {
    setFormStatus(strings.error, true);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = copy[state.locale].form.submitCta;
    }
  }
}

function setFormStatus(message, isError = false) {
  if (!elements.formStatus) return;
  elements.formStatus.textContent = message;
  elements.formStatus.classList.toggle("is-error", isError);
}
