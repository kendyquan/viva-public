import type {
  PlaceholderPageModel,
  PublicLandingLanguageDto,
  SiteLanguageModel,
} from "@/lib/marketing/dto";

type LocalizedFallbackBundle = {
  hero: {
    title: string;
    subtitle: string;
  };
  reviews: {
    title: string;
    totalLabel: string;
    countLabelTemplate: string;
    pageTitle: string;
    metrics: {
      accuracy: string;
      communication: string;
      cleanliness: string;
    };
  };
  help: {
    title: string;
    searchPlaceholder: string;
    searchSrLabel: string;
    emptyStateLabel: string;
  };
  footer: {
    leftText: string;
    rightText: string;
  };
  navigation: {
    about: string;
    contest: string;
    jobs: string;
    reviews: string;
    help: string;
  };
  placeholders: {
    about: PlaceholderPageModel;
    contest: PlaceholderPageModel;
    jobs: PlaceholderPageModel;
  };
  ui: {
    homeAriaLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    languageSelectorLabel: string;
    paginationAriaLabel: string;
    paginationPreviousLabel: string;
    paginationNextLabel: string;
  };
};

type LanguagePresentation = {
  label: string;
  flagSrc: string;
  flagAlt: string;
};

export const MARKETING_LANGUAGE_COOKIE = "fiviva_public_language";
const DEFAULT_LANGUAGE_CODE = "en-US";
const SUPPORTED_MARKETING_LANGUAGE_CODES = [
  "en-US",
  "vi",
  "ru",
  "zh",
  "ja",
  "ko",
  "fr",
  "de",
] as const;

const LANGUAGE_PRESENTATION_MAP: Record<string, LanguagePresentation> = {
  en: {
    label: "English",
    flagSrc: "/landing/flags/us.svg",
    flagAlt: "English language",
  },
  vi: {
    label: "Tiếng Việt",
    flagSrc: "/landing/flags/vn.svg",
    flagAlt: "Vietnamese language",
  },
  ru: {
    label: "Русский",
    flagSrc: "/landing/flags/ru.svg",
    flagAlt: "Russian language",
  },
  zh: {
    label: "中文",
    flagSrc: "/landing/flags/cn.svg",
    flagAlt: "Chinese language",
  },
  ja: {
    label: "日本語",
    flagSrc: "/landing/flags/jp.svg",
    flagAlt: "Japanese language",
  },
  ko: {
    label: "한국어",
    flagSrc: "/landing/flags/kr.svg",
    flagAlt: "Korean language",
  },
  fr: {
    label: "Français",
    flagSrc: "/landing/flags/fr.svg",
    flagAlt: "French language",
  },
  de: {
    label: "Deutsch",
    flagSrc: "/landing/flags/de.svg",
    flagAlt: "German language",
  },
};

const FALLBACK_BUNDLES: Record<string, LocalizedFallbackBundle> = {
  en: {
    hero: {
      title: "REAL ESTATE APPS",
      subtitle: "Agents - Owners - Bankers - Buyers",
    },
    reviews: {
      title: "REAL REVIEWS FROM REAL GUESTS",
      totalLabel: "23 Reviews",
      countLabelTemplate: "{count} Reviews",
      pageTitle: "Reviews",
      metrics: {
        accuracy: "Accuracy",
        communication: "Communication",
        cleanliness: "Cleanliness",
      },
    },
    help: {
      title: "Hi, How can we help?",
      searchPlaceholder: "Search...",
      searchSrLabel: "Search frequently asked questions",
      emptyStateLabel: "No FAQs matched your search.",
    },
    footer: {
      leftText: "Copyright 2018",
      rightText: "Designed by STS Company",
    },
    navigation: {
      about: "About",
      contest: "Contest",
      jobs: "Jobs",
      reviews: "Reviews",
      help: "Help",
    },
    placeholders: {
      about: {
        eyebrow: "About FIVIVA",
        title: "A small public home for the FIVIVA experience.",
        body:
          "This temporary site is focused on the essentials: app downloads, real guest feedback, and lightweight public support. The fuller company story can expand here later without bloating the phase-one landing experience.",
      },
      contest: {
        eyebrow: "Contest",
        title: "Campaign updates can live here without changing the core landing shell.",
        body:
          "The design strategy intentionally keeps contest content lightweight for now. This page gives marketing a clean place to publish rules, dates, and entry highlights when campaign details are ready.",
      },
      jobs: {
        eyebrow: "Jobs",
        title: "Hiring information can stay clear, focused, and easy to maintain.",
        body:
          "Phase one does not include a full careers portal, but this route is ready for a short hiring overview, role links, or a simple contact path for candidates interested in working with FIVIVA.",
      },
    },
    ui: {
      homeAriaLabel: "FIVIVA home",
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      languageSelectorLabel: "Choose language",
      paginationAriaLabel: "Pagination",
      paginationPreviousLabel: "Previous page",
      paginationNextLabel: "Next page",
    },
  },
  vi: {
    hero: {
      title: "ỨNG DỤNG BẤT ĐỘNG SẢN",
      subtitle: "Môi giới - Chủ nhà - Ngân hàng - Người mua",
    },
    reviews: {
      title: "ĐÁNH GIÁ THẬT TỪ NGƯỜI DÙNG THẬT",
      totalLabel: "23 đánh giá",
      countLabelTemplate: "{count} đánh giá",
      pageTitle: "Đánh giá",
      metrics: {
        accuracy: "Độ chính xác",
        communication: "Giao tiếp",
        cleanliness: "Sạch sẽ",
      },
    },
    help: {
      title: "Xin chào, chúng tôi có thể giúp gì?",
      searchPlaceholder: "Tìm kiếm...",
      searchSrLabel: "Tìm kiếm câu hỏi thường gặp",
      emptyStateLabel: "Không tìm thấy câu hỏi phù hợp.",
    },
    footer: {
      leftText: "Bản quyền 2018",
      rightText: "Thiết kế bởi STS Company",
    },
    navigation: {
      about: "Giới thiệu",
      contest: "Cuộc thi",
      jobs: "Việc làm",
      reviews: "Đánh giá",
      help: "Trợ giúp",
    },
    placeholders: {
      about: {
        eyebrow: "Về FIVIVA",
        title: "Một trang công khai gọn nhẹ cho trải nghiệm FIVIVA.",
        body:
          "Trang tạm thời này tập trung vào những nội dung thiết yếu: tải ứng dụng, phản hồi thực từ khách hàng và hỗ trợ công khai ở mức vừa đủ. Câu chuyện thương hiệu đầy đủ có thể mở rộng sau mà không làm nặng trải nghiệm giai đoạn đầu.",
      },
      contest: {
        eyebrow: "Cuộc thi",
        title: "Thông tin chiến dịch có thể đặt ở đây mà không làm thay đổi bộ khung landing chính.",
        body:
          "Chiến lược thiết kế hiện tại giữ phần contest gọn nhẹ. Trang này là nơi phù hợp để đội marketing đăng thể lệ, mốc thời gian và điểm nhấn chiến dịch khi nội dung sẵn sàng.",
      },
      jobs: {
        eyebrow: "Việc làm",
        title: "Thông tin tuyển dụng có thể rõ ràng, tập trung và dễ duy trì.",
        body:
          "Giai đoạn một chưa cần một cổng tuyển dụng đầy đủ, nhưng route này đã sẵn sàng cho phần giới thiệu ngắn, link vị trí tuyển dụng hoặc một đầu mối liên hệ đơn giản dành cho ứng viên quan tâm tới FIVIVA.",
      },
    },
    ui: {
      homeAriaLabel: "Trang chủ FIVIVA",
      openMenuLabel: "Mở menu",
      closeMenuLabel: "Đóng menu",
      languageSelectorLabel: "Chọn ngôn ngữ",
      paginationAriaLabel: "Phân trang",
      paginationPreviousLabel: "Trang trước",
      paginationNextLabel: "Trang sau",
    },
  },
  ru: {
    hero: {
      title: "ПРИЛОЖЕНИЯ ДЛЯ НЕДВИЖИМОСТИ",
      subtitle: "Агенты - Владельцы - Банкиры - Покупатели",
    },
    reviews: {
      title: "НАСТОЯЩИЕ ОТЗЫВЫ ОТ РЕАЛЬНЫХ ГОСТЕЙ",
      totalLabel: "23 отзыва",
      countLabelTemplate: "{count} отзывов",
      pageTitle: "Отзывы",
      metrics: {
        accuracy: "Точность",
        communication: "Общение",
        cleanliness: "Чистота",
      },
    },
    help: {
      title: "Здравствуйте, чем мы можем помочь?",
      searchPlaceholder: "Поиск...",
      searchSrLabel: "Поиск по часто задаваемым вопросам",
      emptyStateLabel: "По вашему запросу ничего не найдено.",
    },
    footer: {
      leftText: "Copyright 2018",
      rightText: "Дизайн: STS Company",
    },
    navigation: {
      about: "О нас",
      contest: "Конкурс",
      jobs: "Вакансии",
      reviews: "Отзывы",
      help: "Помощь",
    },
    placeholders: {
      about: {
        eyebrow: "О FIVIVA",
        title: "Небольшой публичный сайт для знакомства с FIVIVA.",
        body:
          "Этот временный сайт сфокусирован на главном: загрузке приложения, реальных отзывах гостей и базовой публичной поддержке. Более полная история бренда может быть добавлена позже, не перегружая первый этап лендинга.",
      },
      contest: {
        eyebrow: "Конкурс",
        title: "Здесь можно публиковать обновления кампаний, не меняя основной лендинг.",
        body:
          "Текущая стратегия дизайна специально оставляет раздел конкурсов легким. Эта страница подойдет маркетингу для публикации правил, сроков и ключевых акцентов кампании, когда детали будут готовы.",
      },
      jobs: {
        eyebrow: "Вакансии",
        title: "Информация о найме может оставаться понятной, сфокусированной и простой в поддержке.",
        body:
          "На первом этапе полноценный карьерный портал не требуется, но этот маршрут уже готов для краткого обзора вакансий, ссылок на роли или простого контакта для кандидатов, которым интересна работа в FIVIVA.",
      },
    },
    ui: {
      homeAriaLabel: "Главная FIVIVA",
      openMenuLabel: "Открыть меню",
      closeMenuLabel: "Закрыть меню",
      languageSelectorLabel: "Выберите язык",
      paginationAriaLabel: "Пагинация",
      paginationPreviousLabel: "Предыдущая страница",
      paginationNextLabel: "Следующая страница",
    },
  },
  zh: {
    hero: {
      title: "房地产应用",
      subtitle: "经纪人 - 业主 - 银行家 - 买家",
    },
    reviews: {
      title: "真实住客的真实评价",
      totalLabel: "23 条评价",
      countLabelTemplate: "{count} 条评价",
      pageTitle: "评价",
      metrics: {
        accuracy: "准确度",
        communication: "沟通",
        cleanliness: "清洁度",
      },
    },
    help: {
      title: "你好，我们可以如何帮助你？",
      searchPlaceholder: "搜索...",
      searchSrLabel: "搜索常见问题",
      emptyStateLabel: "没有找到匹配的问题。",
    },
    footer: {
      leftText: "版权所有 2018",
      rightText: "由 STS Company 设计",
    },
    navigation: {
      about: "关于",
      contest: "比赛",
      jobs: "职位",
      reviews: "评价",
      help: "帮助",
    },
    placeholders: {
      about: {
        eyebrow: "关于 FIVIVA",
        title: "一个简洁的 FIVIVA 公共展示页面。",
        body:
          "这个临时站点专注于最核心的信息：应用下载、真实用户反馈以及轻量级公共帮助。更完整的品牌故事可以在后续扩展，而不会让第一阶段落地页变得臃肿。",
      },
      contest: {
        eyebrow: "比赛",
        title: "活动更新可以放在这里，而不需要改动核心 landing 框架。",
        body:
          "当前设计策略刻意让 contest 内容保持轻量。等活动细节准备好后，这个页面可以让市场团队清晰地发布规则、时间与亮点。",
      },
      jobs: {
        eyebrow: "职位",
        title: "招聘信息可以保持清晰、聚焦且易于维护。",
        body:
          "第一阶段还不需要完整的招聘门户，但这个路由已经可以承载简短的招聘介绍、职位链接，或者给对 FIVIVA 感兴趣的候选人一个简单的联系入口。",
      },
    },
    ui: {
      homeAriaLabel: "FIVIVA 首页",
      openMenuLabel: "打开菜单",
      closeMenuLabel: "关闭菜单",
      languageSelectorLabel: "选择语言",
      paginationAriaLabel: "分页",
      paginationPreviousLabel: "上一页",
      paginationNextLabel: "下一页",
    },
  },
  ja: {
    hero: {
      title: "不動産アプリ",
      subtitle: "エージェント - オーナー - 銀行担当者 - 購入者",
    },
    reviews: {
      title: "実際のゲストによる本物のレビュー",
      totalLabel: "23件のレビュー",
      countLabelTemplate: "{count}件のレビュー",
      pageTitle: "レビュー",
      metrics: {
        accuracy: "正確さ",
        communication: "コミュニケーション",
        cleanliness: "清潔さ",
      },
    },
    help: {
      title: "こんにちは。どのようにお手伝いできますか？",
      searchPlaceholder: "検索...",
      searchSrLabel: "よくある質問を検索",
      emptyStateLabel: "一致するFAQが見つかりませんでした。",
    },
    footer: {
      leftText: "Copyright 2018",
      rightText: "Designed by STS Company",
    },
    navigation: {
      about: "概要",
      contest: "コンテスト",
      jobs: "採用",
      reviews: "レビュー",
      help: "ヘルプ",
    },
    placeholders: {
      about: {
        eyebrow: "FIVIVAについて",
        title: "FIVIVA体験のための小さな公開サイトです。",
        body:
          "この一時的なサイトは、アプリのダウンロード、実際のゲストレビュー、軽量な公開サポートという重要な要素に集中しています。ブランド全体のストーリーは、初期段階のランディング体験を重くせずに後から拡張できます。",
      },
      contest: {
        eyebrow: "コンテスト",
        title: "キャンペーン情報を、コアのランディング構成を変えずにここへ掲載できます。",
        body:
          "現在のデザイン戦略では、コンテスト情報を軽量に保つことを意図しています。このページは、詳細が整った段階でマーケティングチームがルール、日程、ハイライトを整理して掲載する場所になります。",
      },
      jobs: {
        eyebrow: "採用",
        title: "採用情報を明確で集中的、かつ管理しやすい形で保てます。",
        body:
          "フェーズ1では本格的な採用ポータルは不要ですが、このルートは短い採用概要、募集職種へのリンク、または FIVIVA に関心のある候補者向けのシンプルな連絡導線に対応できます。",
      },
    },
    ui: {
      homeAriaLabel: "FIVIVA ホーム",
      openMenuLabel: "メニューを開く",
      closeMenuLabel: "メニューを閉じる",
      languageSelectorLabel: "言語を選択",
      paginationAriaLabel: "ページ送り",
      paginationPreviousLabel: "前のページ",
      paginationNextLabel: "次のページ",
    },
  },
  ko: {
    hero: {
      title: "부동산 앱",
      subtitle: "중개인 - 소유주 - 은행 - 구매자",
    },
    reviews: {
      title: "실제 이용자의 실제 리뷰",
      totalLabel: "리뷰 23개",
      countLabelTemplate: "{count}개 리뷰",
      pageTitle: "리뷰",
      metrics: {
        accuracy: "정확성",
        communication: "소통",
        cleanliness: "청결도",
      },
    },
    help: {
      title: "안녕하세요. 무엇을 도와드릴까요?",
      searchPlaceholder: "검색...",
      searchSrLabel: "자주 묻는 질문 검색",
      emptyStateLabel: "검색과 일치하는 FAQ가 없습니다.",
    },
    footer: {
      leftText: "Copyright 2018",
      rightText: "Designed by STS Company",
    },
    navigation: {
      about: "소개",
      contest: "콘테스트",
      jobs: "채용",
      reviews: "리뷰",
      help: "도움말",
    },
    placeholders: {
      about: {
        eyebrow: "FIVIVA 소개",
        title: "FIVIVA 경험을 위한 간결한 공개 페이지입니다.",
        body:
          "이 임시 사이트는 앱 다운로드, 실제 고객 후기, 가벼운 공개 지원처럼 핵심 요소에 집중합니다. 더 넓은 브랜드 스토리는 1단계 랜딩 경험을 무겁게 만들지 않고도 나중에 확장할 수 있습니다.",
      },
      contest: {
        eyebrow: "콘테스트",
        title: "핵심 랜딩 구조를 바꾸지 않고도 캠페인 업데이트를 여기에 둘 수 있습니다.",
        body:
          "현재 디자인 전략은 콘테스트 콘텐츠를 가볍게 유지하도록 설계되었습니다. 상세 내용이 준비되면 이 페이지는 마케팅 팀이 규칙, 일정, 핵심 포인트를 깔끔하게 게시할 공간이 됩니다.",
      },
      jobs: {
        eyebrow: "채용",
        title: "채용 정보는 명확하고 집중되며 유지보수하기 쉽게 구성할 수 있습니다.",
        body:
          "1단계에서는 완전한 채용 포털이 필요하지 않지만, 이 경로는 간단한 채용 소개, 공고 링크, 또는 FIVIVA에 관심 있는 지원자를 위한 쉬운 연락 경로를 담기에 충분합니다.",
      },
    },
    ui: {
      homeAriaLabel: "FIVIVA 홈",
      openMenuLabel: "메뉴 열기",
      closeMenuLabel: "메뉴 닫기",
      languageSelectorLabel: "언어 선택",
      paginationAriaLabel: "페이지 이동",
      paginationPreviousLabel: "이전 페이지",
      paginationNextLabel: "다음 페이지",
    },
  },
  fr: {
    hero: {
      title: "APPLICATIONS IMMOBILIÈRES",
      subtitle: "Agents - Propriétaires - Banquiers - Acheteurs",
    },
    reviews: {
      title: "DE VRAIS AVIS DE VRAIS VOYAGEURS",
      totalLabel: "23 avis",
      countLabelTemplate: "{count} avis",
      pageTitle: "Avis",
      metrics: {
        accuracy: "Précision",
        communication: "Communication",
        cleanliness: "Propreté",
      },
    },
    help: {
      title: "Bonjour, comment pouvons-nous vous aider ?",
      searchPlaceholder: "Rechercher...",
      searchSrLabel: "Rechercher dans les questions fréquentes",
      emptyStateLabel: "Aucune FAQ ne correspond à votre recherche.",
    },
    footer: {
      leftText: "Copyright 2018",
      rightText: "Conçu par STS Company",
    },
    navigation: {
      about: "À propos",
      contest: "Concours",
      jobs: "Emplois",
      reviews: "Avis",
      help: "Aide",
    },
    placeholders: {
      about: {
        eyebrow: "À propos de FIVIVA",
        title: "Une petite vitrine publique pour l'expérience FIVIVA.",
        body:
          "Ce site temporaire va à l'essentiel : téléchargement de l'application, retours réels des voyageurs et support public léger. L'histoire plus complète de la marque pourra être ajoutée plus tard sans alourdir l'expérience initiale du landing.",
      },
      contest: {
        eyebrow: "Concours",
        title: "Les mises à jour de campagne peuvent vivre ici sans modifier la structure principale du landing.",
        body:
          "La stratégie actuelle garde volontairement le contenu concours léger. Cette page donne au marketing un endroit clair pour publier les règles, les dates et les temps forts lorsque les détails sont prêts.",
      },
      jobs: {
        eyebrow: "Emplois",
        title: "Les informations de recrutement peuvent rester claires, ciblées et faciles à maintenir.",
        body:
          "La phase un n'inclut pas encore un portail carrière complet, mais cette route est prête pour un court aperçu du recrutement, des liens vers les postes ou un point de contact simple pour les candidats intéressés par FIVIVA.",
      },
    },
    ui: {
      homeAriaLabel: "Accueil FIVIVA",
      openMenuLabel: "Ouvrir le menu",
      closeMenuLabel: "Fermer le menu",
      languageSelectorLabel: "Choisir la langue",
      paginationAriaLabel: "Pagination",
      paginationPreviousLabel: "Page précédente",
      paginationNextLabel: "Page suivante",
    },
  },
  de: {
    hero: {
      title: "IMMOBILIEN-APPS",
      subtitle: "Makler - Eigentümer - Banker - Käufer",
    },
    reviews: {
      title: "ECHTE BEWERTUNGEN VON ECHTEN GÄSTEN",
      totalLabel: "23 Bewertungen",
      countLabelTemplate: "{count} Bewertungen",
      pageTitle: "Bewertungen",
      metrics: {
        accuracy: "Genauigkeit",
        communication: "Kommunikation",
        cleanliness: "Sauberkeit",
      },
    },
    help: {
      title: "Hallo, wie können wir helfen?",
      searchPlaceholder: "Suchen...",
      searchSrLabel: "Häufige Fragen durchsuchen",
      emptyStateLabel: "Keine FAQs für diese Suche gefunden.",
    },
    footer: {
      leftText: "Copyright 2018",
      rightText: "Design von STS Company",
    },
    navigation: {
      about: "Über uns",
      contest: "Wettbewerb",
      jobs: "Jobs",
      reviews: "Bewertungen",
      help: "Hilfe",
    },
    placeholders: {
      about: {
        eyebrow: "Über FIVIVA",
        title: "Eine kleine öffentliche Seite für das FIVIVA-Erlebnis.",
        body:
          "Diese temporäre Seite konzentriert sich auf das Wesentliche: App-Downloads, echte Gästebewertungen und leichtgewichtigen öffentlichen Support. Die umfassendere Markengeschichte kann später ergänzt werden, ohne das Landing der ersten Phase zu überladen.",
      },
      contest: {
        eyebrow: "Wettbewerb",
        title: "Kampagnen-Updates können hier erscheinen, ohne die zentrale Landing-Struktur zu verändern.",
        body:
          "Die aktuelle Designstrategie hält Wettbewerbsinhalte bewusst schlank. Diese Seite gibt dem Marketing einen klaren Ort für Regeln, Termine und Highlights, sobald die Kampagnendetails bereit sind.",
      },
      jobs: {
        eyebrow: "Jobs",
        title: "Karriereinformationen können klar, fokussiert und leicht pflegbar bleiben.",
        body:
          "Phase eins enthält noch kein vollständiges Karriereportal, aber diese Route ist bereit für einen kurzen Überblick, Stellenlinks oder einen einfachen Kontaktweg für Interessierte an einer Mitarbeit bei FIVIVA.",
      },
    },
    ui: {
      homeAriaLabel: "FIVIVA Startseite",
      openMenuLabel: "Menü öffnen",
      closeMenuLabel: "Menü schließen",
      languageSelectorLabel: "Sprache wählen",
      paginationAriaLabel: "Seitennavigation",
      paginationPreviousLabel: "Vorherige Seite",
      paginationNextLabel: "Nächste Seite",
    },
  },
};

function unique<T>(values: T[]) {
  return [...new Set(values)];
}

export function normalizeLanguageCode(languageCode?: string | null) {
  return languageCode?.trim() || "";
}

export function getNeutralLanguageCode(languageCode?: string | null) {
  const normalizedCode = normalizeLanguageCode(languageCode);
  const separatorIndex = normalizedCode.search(/[-_]/);
  return separatorIndex > 0
    ? normalizedCode.slice(0, separatorIndex).toLowerCase()
    : normalizedCode.toLowerCase();
}

export function getLanguageFallbackBundle(
  languageCode?: string | null,
  defaultLanguageCode?: string | null,
) {
  const codes = unique([
    getNeutralLanguageCode(languageCode),
    getNeutralLanguageCode(defaultLanguageCode),
    getNeutralLanguageCode(DEFAULT_LANGUAGE_CODE),
    "en",
  ]).filter(Boolean);

  for (const code of codes) {
    const bundle = FALLBACK_BUNDLES[code];
    if (bundle) {
      return bundle;
    }
  }

  return FALLBACK_BUNDLES.en;
}

function getLanguagePresentation(languageCode?: string | null): LanguagePresentation {
  const neutralCode = getNeutralLanguageCode(languageCode);
  return LANGUAGE_PRESENTATION_MAP[neutralCode] || {
    label: normalizeLanguageCode(languageCode) || "English",
    flagSrc: "/landing/flags/world.svg",
    flagAlt: "Language",
  };
}

export function getLanguageResolutionCandidates(
  languageCode?: string | null,
  defaultLanguageCode?: string | null,
) {
  return unique([
    normalizeLanguageCode(languageCode),
    getNeutralLanguageCode(languageCode),
    normalizeLanguageCode(defaultLanguageCode),
    getNeutralLanguageCode(defaultLanguageCode),
  ]).filter(Boolean);
}

export function buildFallbackLanguage(languageCode?: string | null): SiteLanguageModel {
  const resolvedCode = normalizeLanguageCode(languageCode) || DEFAULT_LANGUAGE_CODE;
  const presentation = getLanguagePresentation(resolvedCode);

  return {
    name: presentation.label,
    label: presentation.label,
    languageCode: resolvedCode,
    isDefault: getNeutralLanguageCode(resolvedCode) === getNeutralLanguageCode(DEFAULT_LANGUAGE_CODE),
    flagSrc: presentation.flagSrc,
    flagAlt: presentation.flagAlt,
  };
}

export function getSupportedFallbackLanguages() {
  return SUPPORTED_MARKETING_LANGUAGE_CODES.map((languageCode) =>
    buildFallbackLanguage(languageCode));
}

export function mapPublicLanguage(
  language?: PublicLandingLanguageDto | null,
): SiteLanguageModel | null {
  if (!language) {
    return null;
  }

  const presentation = getLanguagePresentation(language.languageCode);

  return {
    id: language.id,
    name: language.name,
    label: presentation.label || language.name,
    languageCode: language.languageCode,
    isDefault: language.isDefault,
    flagSrc: presentation.flagSrc,
    flagAlt: presentation.flagAlt,
  };
}
