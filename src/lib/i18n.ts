export type LangCode =
  | "en" | "vi" | "fr" | "es" | "de"
  | "ja" | "ko" | "zh" | "pt" | "ar"
  | "it" | "hi" | "th" | "id";

export interface Language {
  code: LangCode;
  name: string;
  flag: string;
  dir?: "rtl";
}

export const LANGUAGES: Language[] = [
  { code: "en", name: "English",    flag: "🇺🇸" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "zh", name: "中文",        flag: "🇨🇳" },
  { code: "ja", name: "日本語",       flag: "🇯🇵" },
  { code: "ko", name: "한국어",       flag: "🇰🇷" },
  { code: "fr", name: "Français",   flag: "🇫🇷" },
  { code: "es", name: "Español",    flag: "🇪🇸" },
  { code: "de", name: "Deutsch",    flag: "🇩🇪" },
  { code: "it", name: "Italiano",   flag: "🇮🇹" },
  { code: "pt", name: "Português",  flag: "🇵🇹" },
  { code: "ar", name: "العربية",    flag: "🇸🇦", dir: "rtl" },
  { code: "hi", name: "हिन्दी",    flag: "🇮🇳" },
  { code: "th", name: "ภาษาไทย",   flag: "🇹🇭" },
  { code: "id", name: "Indonesia",  flag: "🇮🇩" },
];

export interface Translations {
  nav: { about: string; contest: string; reviews: string; help: string };
  home: {
    hero_title: string;
    hero_sub: string;
    install_appstore: string;
    install_on: string;
    install_google: string;
    reviews_title: string;
    reviews_count: string;
    see_all: string;
    features_title: string;
    features: { title: string; desc: string }[];
    cta_title: string;
    cta_sub: string;
    download_appstore: string;
    download_google: string;
    download_on: string;
    get_on: string;
  };
  reviews: {
    page_title: string;
    section_title: string;
    count: string;
    view_more: string;
    prev: string;
    next: string;
  };
  help: {
    hero_title: string;
    search_placeholder: string;
    no_results: string;
    still_need: string;
    still_sub: string;
    email_btn: string;
    chat_btn: string;
  };
  about: {
    page_title: string;
    hero_sub: string;
    story_title: string;
    story: string[];
    values_title: string;
    values: { icon: string; title: string; desc: string }[];
    team_title: string;
    stats: { value: string; label: string }[];
    cta_title: string;
    cta_sub: string;
  };
  contest: {
    badge: string;
    hero_title: string;
    hero_sub: string;
    deadline: string;
    prize_title: string;
    prize_total: string;
    steps_title: string;
    steps: { step: string; title: string; desc: string }[];
    leaderboard_title: string;
    register_title: string;
    register_sub: string;
    register_btn: string;
    register_no_spam: string;
    email_placeholder: string;
    success_title: string;
    success_sub: string;
  };
  rating: { accuracy: string; communication: string; cleanliness: string };
}

const en: Translations = {
  nav: { about: "ABOUT", contest: "CONTEST", reviews: "REVIEWS", help: "HELP" },
  home: {
    hero_title: "Real Estate Apps",
    hero_sub: "Agents – Owners – Bankers – Buyers",
    install_appstore: "App Store",
    install_on: "Install FIVIVA on",
    install_google: "Google Play",
    reviews_title: "Real Reviews From Real Guests",
    reviews_count: "23 Reviews",
    see_all: "See All Reviews →",
    features_title: "Everything you need, in one app",
    features: [
      { title: "List Properties", desc: "Post listings in minutes with photos, pricing, and full details." },
      { title: "Smart Search", desc: "Filter by price, location, type, and dozens of criteria." },
      { title: "Instant Messaging", desc: "Chat directly with agents, owners, and buyers in real time." },
      { title: "Market Insights", desc: "Access live data, trends, and valuations for smart decisions." },
    ],
    cta_title: "Ready to find your dream home?",
    cta_sub: "Join thousands of agents, owners, and buyers who trust FIVIVA every day.",
    download_appstore: "App Store",
    download_google: "Google Play",
    download_on: "Download on the",
    get_on: "Get it on",
  },
  reviews: {
    page_title: "Reviews",
    section_title: "Real Reviews From Real Guests",
    count: "23 Reviews",
    view_more: "View more",
    prev: "‹",
    next: "›",
  },
  help: {
    hero_title: "Hi, How can we help?",
    search_placeholder: "Search...",
    no_results: "No results found for",
    still_need: "Still need help?",
    still_sub: "Our support team is available 24/7 to assist you.",
    email_btn: "Email Support",
    chat_btn: "Live Chat",
  },
  about: {
    page_title: "About FIVIVA",
    hero_sub: "We're building the smartest real estate platform in Southeast Asia — connecting agents, owners, bankers, and buyers in one seamless experience.",
    story_title: "Our Story",
    story: [
      "FIVIVA was founded in 2018 with a simple belief: finding a home — or selling one — shouldn't be complicated. The real estate market was fragmented, trust was low, and tools were outdated.",
      "We set out to change that by building a platform where agents could list properties beautifully, buyers could discover them intelligently, and bankers could connect at the right moment.",
      "Today, FIVIVA serves thousands of users across the region, with a mobile-first approach that puts real estate in everyone's pocket.",
    ],
    values_title: "Our Values",
    values: [
      { icon: "🤝", title: "Trust", desc: "Every listing is verified. Every user is real. We build relationships on honesty." },
      { icon: "🌏", title: "Accessibility", desc: "Real estate should be open to everyone — buyers, renters, agents, and investors." },
      { icon: "⚡", title: "Speed", desc: "Find and close deals faster with real-time listings and instant communication." },
      { icon: "🔒", title: "Security", desc: "Your data and transactions are protected end-to-end, always." },
    ],
    team_title: "Meet the Team",
    stats: [
      { value: "50K+", label: "Active Listings" },
      { value: "120K+", label: "Registered Users" },
      { value: "15+", label: "Countries" },
      { value: "4.9★", label: "App Rating" },
    ],
    cta_title: "Join the FIVIVA community",
    cta_sub: "Download the app and start your real estate journey today.",
  },
  contest: {
    badge: "🏆 FIVIVA Agent Contest 2024",
    hero_title: "Compete. Win.\nGrow Your Business.",
    hero_sub: "Join the FIVIVA Agent of the Year Contest. Showcase your listings, earn reviews, and compete for over $8,000 in prizes.",
    deadline: "Submissions close December 31, 2024",
    prize_title: "Prize Pool",
    prize_total: "Total value:",
    steps_title: "How to Enter",
    steps: [
      { step: "01", title: "Download FIVIVA", desc: "Install the app from App Store or Google Play and create your account." },
      { step: "02", title: "List a Property", desc: "Post at least one property listing with high-quality photos and full details." },
      { step: "03", title: "Get Reviews", desc: "Invite clients to leave honest reviews. More 5-star reviews = higher score." },
      { step: "04", title: "Win Prizes", desc: "Top agents by review score and listing quality win amazing cash prizes!" },
    ],
    leaderboard_title: "Current Leaderboard",
    register_title: "Enter the Contest",
    register_sub: "Register now to be notified when the contest opens and get early-entry tips.",
    register_btn: "Register Now →",
    register_no_spam: "No spam. Unsubscribe anytime.",
    email_placeholder: "Enter your email address",
    success_title: "You're registered!",
    success_sub: "We'll send updates to your email. Good luck!",
  },
  rating: { accuracy: "Accuracy", communication: "Communication", cleanliness: "Cleanliness" },
};

const vi: Translations = {
  nav: { about: "GIỚI THIỆU", contest: "CUỘC THI", reviews: "ĐÁNH GIÁ", help: "HỖ TRỢ" },
  home: {
    hero_title: "Ứng Dụng Bất Động Sản",
    hero_sub: "Môi Giới – Chủ Nhà – Ngân Hàng – Người Mua",
    install_appstore: "App Store",
    install_on: "Tải FIVIVA trên",
    install_google: "Google Play",
    reviews_title: "Đánh Giá Thực Từ Khách Thực",
    reviews_count: "23 Đánh giá",
    see_all: "Xem tất cả đánh giá →",
    features_title: "Tất cả những gì bạn cần trong một ứng dụng",
    features: [
      { title: "Đăng Tin", desc: "Đăng tin bất động sản nhanh chóng với hình ảnh, giá cả và thông tin đầy đủ." },
      { title: "Tìm Kiếm Thông Minh", desc: "Lọc theo giá, vị trí, loại hình và hàng chục tiêu chí khác." },
      { title: "Nhắn Tin Tức Thì", desc: "Trò chuyện trực tiếp với môi giới, chủ nhà và người mua theo thời gian thực." },
      { title: "Thông Tin Thị Trường", desc: "Truy cập dữ liệu, xu hướng và định giá để đưa ra quyết định thông minh." },
    ],
    cta_title: "Sẵn sàng tìm ngôi nhà mơ ước?",
    cta_sub: "Hàng nghìn môi giới, chủ nhà và người mua đang tin dùng FIVIVA mỗi ngày.",
    download_appstore: "App Store",
    download_google: "Google Play",
    download_on: "Tải trên",
    get_on: "Tải về tại",
  },
  reviews: {
    page_title: "Đánh Giá",
    section_title: "Đánh Giá Thực Từ Khách Thực",
    count: "23 Đánh giá",
    view_more: "Xem thêm",
    prev: "‹",
    next: "›",
  },
  help: {
    hero_title: "Xin chào, chúng tôi có thể giúp gì?",
    search_placeholder: "Tìm kiếm...",
    no_results: "Không tìm thấy kết quả cho",
    still_need: "Vẫn cần hỗ trợ?",
    still_sub: "Đội hỗ trợ của chúng tôi luôn sẵn sàng 24/7.",
    email_btn: "Gửi Email",
    chat_btn: "Chat Trực Tiếp",
  },
  about: {
    page_title: "Về FIVIVA",
    hero_sub: "Chúng tôi đang xây dựng nền tảng bất động sản thông minh nhất Đông Nam Á — kết nối môi giới, chủ nhà, ngân hàng và người mua trong một trải nghiệm liền mạch.",
    story_title: "Câu Chuyện Của Chúng Tôi",
    story: [
      "FIVIVA được thành lập năm 2018 với niềm tin đơn giản: tìm nhà hoặc bán nhà không nên phức tạp.",
      "Chúng tôi đã xây dựng một nền tảng nơi môi giới có thể đăng tin đẹp mắt, người mua có thể tìm kiếm thông minh và ngân hàng có thể kết nối đúng thời điểm.",
      "Ngày nay, FIVIVA phục vụ hàng nghìn người dùng trên khắp khu vực với cách tiếp cận ưu tiên di động.",
    ],
    values_title: "Giá Trị Cốt Lõi",
    values: [
      { icon: "🤝", title: "Tin Tưởng", desc: "Mọi tin đăng đều được xác minh. Mọi người dùng đều là thật." },
      { icon: "🌏", title: "Tiếp Cận", desc: "Bất động sản nên mở cho tất cả mọi người." },
      { icon: "⚡", title: "Tốc Độ", desc: "Tìm và chốt giao dịch nhanh hơn với danh sách thời gian thực." },
      { icon: "🔒", title: "Bảo Mật", desc: "Dữ liệu và giao dịch của bạn được bảo vệ end-to-end." },
    ],
    team_title: "Đội Ngũ",
    stats: [
      { value: "50K+", label: "Tin Đăng Hoạt Động" },
      { value: "120K+", label: "Người Dùng Đã Đăng Ký" },
      { value: "15+", label: "Quốc Gia" },
      { value: "4.9★", label: "Đánh Giá App" },
    ],
    cta_title: "Tham gia cộng đồng FIVIVA",
    cta_sub: "Tải app và bắt đầu hành trình bất động sản của bạn ngay hôm nay.",
  },
  contest: {
    badge: "🏆 Cuộc Thi Môi Giới FIVIVA 2024",
    hero_title: "Cạnh Tranh. Chiến Thắng.\nPhát Triển Kinh Doanh.",
    hero_sub: "Tham gia Cuộc Thi Môi Giới Xuất Sắc của FIVIVA. Trưng bày danh sách của bạn và giành hơn $8.000 tiền thưởng.",
    deadline: "Hạn nộp: 31 tháng 12, 2024",
    prize_title: "Giải Thưởng",
    prize_total: "Tổng giá trị:",
    steps_title: "Cách Tham Gia",
    steps: [
      { step: "01", title: "Tải FIVIVA", desc: "Cài đặt ứng dụng từ App Store hoặc Google Play và tạo tài khoản." },
      { step: "02", title: "Đăng Tin", desc: "Đăng ít nhất một tin bất động sản với ảnh chất lượng cao." },
      { step: "03", title: "Nhận Đánh Giá", desc: "Mời khách hàng để lại đánh giá thực. Nhiều đánh giá 5 sao = điểm cao hơn." },
      { step: "04", title: "Giành Giải", desc: "Các môi giới hàng đầu theo điểm đánh giá sẽ giành được tiền thưởng hấp dẫn!" },
    ],
    leaderboard_title: "Bảng Xếp Hạng Hiện Tại",
    register_title: "Đăng Ký Tham Gia",
    register_sub: "Đăng ký ngay để được thông báo khi cuộc thi mở và nhận mẹo tham gia sớm.",
    register_btn: "Đăng Ký Ngay →",
    register_no_spam: "Không spam. Hủy đăng ký bất cứ lúc nào.",
    email_placeholder: "Nhập địa chỉ email của bạn",
    success_title: "Đăng ký thành công!",
    success_sub: "Chúng tôi sẽ gửi thông tin cập nhật đến email của bạn. Chúc may mắn!",
  },
  rating: { accuracy: "Độ Chính Xác", communication: "Giao Tiếp", cleanliness: "Vệ Sinh" },
};

const zh: Translations = {
  nav: { about: "关于我们", contest: "竞赛活动", reviews: "用户评价", help: "帮助中心" },
  home: {
    hero_title: "房产应用平台",
    hero_sub: "中介 – 房主 – 银行 – 买家",
    install_appstore: "App Store",
    install_on: "在以下平台安装 FIVIVA",
    install_google: "Google Play",
    reviews_title: "真实住客 真实评价",
    reviews_count: "23 条评价",
    see_all: "查看全部评价 →",
    features_title: "一个应用，满足所有需求",
    features: [
      { title: "发布房源", desc: "几分钟内发布带照片、价格和详细信息的房源。" },
      { title: "智能搜索", desc: "按价格、位置、类型等多种条件筛选。" },
      { title: "即时通讯", desc: "与中介、房主和买家实时聊天。" },
      { title: "市场洞察", desc: "获取实时数据、趋势和估值，做出明智决策。" },
    ],
    cta_title: "准备好找到您梦想的家了吗？",
    cta_sub: "每天有数千名中介、房主和买家信任 FIVIVA。",
    download_appstore: "App Store",
    download_google: "Google Play",
    download_on: "在以下平台下载",
    get_on: "在以下获取",
  },
  reviews: { page_title: "用户评价", section_title: "真实住客 真实评价", count: "23 条评价", view_more: "查看更多", prev: "‹", next: "›" },
  help: { hero_title: "您好，我们能帮您什么？", search_placeholder: "搜索...", no_results: "未找到相关结果：", still_need: "仍需帮助？", still_sub: "我们的支持团队全天候 24/7 为您服务。", email_btn: "发送邮件", chat_btn: "在线客服" },
  about: {
    page_title: "关于 FIVIVA", hero_sub: "我们正在东南亚打造最智能的房产平台。",
    story_title: "我们的故事",
    story: ["FIVIVA 成立于 2018 年，秉持一个简单信念：找房或卖房不应该复杂。", "我们构建了一个让中介美化发布、买家智能发现的平台。", "如今，FIVIVA 以移动优先方式服务该地区数千名用户。"],
    values_title: "我们的价值观",
    values: [
      { icon: "🤝", title: "信任", desc: "每个房源都经过验证。每位用户都是真实的。" },
      { icon: "🌏", title: "包容", desc: "房地产应向所有人开放。" },
      { icon: "⚡", title: "速度", desc: "通过实时房源更快找到并完成交易。" },
      { icon: "🔒", title: "安全", desc: "您的数据和交易始终受到端到端保护。" },
    ],
    team_title: "团队介绍",
    stats: [{ value: "50K+", label: "活跃房源" }, { value: "120K+", label: "注册用户" }, { value: "15+", label: "覆盖国家" }, { value: "4.9★", label: "应用评分" }],
    cta_title: "加入 FIVIVA 社区", cta_sub: "立即下载应用，开启您的房产之旅。",
  },
  contest: {
    badge: "🏆 FIVIVA 中介大赛 2024", hero_title: "竞争. 获胜.\n发展您的业务.", hero_sub: "参加 FIVIVA 年度最佳中介竞赛，争夺超过 $8,000 的奖金。", deadline: "截止日期：2024年12月31日",
    prize_title: "奖金池", prize_total: "总价值：", steps_title: "如何参与",
    steps: [
      { step: "01", title: "下载 FIVIVA", desc: "从 App Store 或 Google Play 安装应用并创建账户。" },
      { step: "02", title: "发布房源", desc: "发布至少一条带高质量照片的完整房源信息。" },
      { step: "03", title: "获得评价", desc: "邀请客户留下真实评价。5星评价越多，得分越高。" },
      { step: "04", title: "赢取奖励", desc: "评分最高的中介将赢得丰厚现金奖励！" },
    ],
    leaderboard_title: "当前排行榜", register_title: "报名参赛", register_sub: "立即注册，抢先获取比赛开始通知和参赛技巧。",
    register_btn: "立即注册 →", register_no_spam: "不发垃圾邮件。随时取消订阅。", email_placeholder: "输入您的电子邮件地址",
    success_title: "注册成功！", success_sub: "我们将通过电子邮件向您发送最新动态。祝您好运！",
  },
  rating: { accuracy: "准确性", communication: "沟通", cleanliness: "清洁度" },
};

const ja: Translations = {
  nav: { about: "会社概要", contest: "コンテスト", reviews: "レビュー", help: "ヘルプ" },
  home: {
    hero_title: "不動産アプリ",
    hero_sub: "エージェント – オーナー – 銀行 – 購入者",
    install_appstore: "App Store",
    install_on: "FIVIVAをインストール",
    install_google: "Google Play",
    reviews_title: "実際のゲストからの本音レビュー",
    reviews_count: "23件のレビュー",
    see_all: "すべてのレビューを見る →",
    features_title: "必要なものがすべて一つのアプリに",
    features: [
      { title: "物件掲載", desc: "写真、価格、詳細情報を数分で掲載。" },
      { title: "スマート検索", desc: "価格、場所、種類など多様な条件でフィルタリング。" },
      { title: "インスタントメッセージ", desc: "エージェント、オーナー、購入者とリアルタイムでチャット。" },
      { title: "市場インサイト", desc: "リアルタイムデータ、トレンド、評価にアクセス。" },
    ],
    cta_title: "夢のマイホームを見つける準備はできていますか？",
    cta_sub: "毎日何千人ものエージェント、オーナー、購入者がFIVIVAを信頼しています。",
    download_appstore: "App Store",
    download_google: "Google Play",
    download_on: "ダウンロード",
    get_on: "入手",
  },
  reviews: { page_title: "レビュー", section_title: "実際のゲストからの本音レビュー", count: "23件のレビュー", view_more: "もっと見る", prev: "‹", next: "›" },
  help: { hero_title: "こんにちは、どのようにお手伝いできますか？", search_placeholder: "検索...", no_results: "検索結果がありません：", still_need: "まだサポートが必要ですか？", still_sub: "サポートチームが24時間365日対応しています。", email_btn: "メールサポート", chat_btn: "ライブチャット" },
  about: {
    page_title: "FIVIVAについて", hero_sub: "東南アジアで最もスマートな不動産プラットフォームを構築しています。",
    story_title: "私たちのストーリー",
    story: ["FIVIVAは2018年に「家を見つけたり売ったりすることは難しくあるべきではない」という信念で設立されました。", "エージェントが美しく物件を掲載し、購入者がスマートに発見できるプラットフォームを構築しました。", "現在、FIVIVAはモバイルファーストのアプローチで地域全体の何千人ものユーザーにサービスを提供しています。"],
    values_title: "私たちの価値観",
    values: [
      { icon: "🤝", title: "信頼", desc: "すべての物件は確認済みです。すべてのユーザーは本物です。" },
      { icon: "🌏", title: "アクセスビリティ", desc: "不動産はすべての人に開かれているべきです。" },
      { icon: "⚡", title: "スピード", desc: "リアルタイムの物件情報で素早く取引を成立させましょう。" },
      { icon: "🔒", title: "セキュリティ", desc: "データと取引は常にエンドツーエンドで保護されています。" },
    ],
    team_title: "チームメンバー",
    stats: [{ value: "50K+", label: "掲載物件数" }, { value: "120K+", label: "登録ユーザー" }, { value: "15+", label: "対応国" }, { value: "4.9★", label: "アプリ評価" }],
    cta_title: "FIVIVAコミュニティに参加しよう", cta_sub: "アプリをダウンロードして、今すぐ不動産の旅を始めましょう。",
  },
  contest: {
    badge: "🏆 FIVIVAエージェントコンテスト2024", hero_title: "競い合う. 勝利する.\nビジネスを成長させる.", hero_sub: "FIVIVAのエージェント・オブ・ザ・イヤーコンテストに参加して$8,000以上の賞金を獲得しよう。", deadline: "締め切り：2024年12月31日",
    prize_title: "賞金プール", prize_total: "総額：", steps_title: "参加方法",
    steps: [
      { step: "01", title: "FIVIVAをダウンロード", desc: "App StoreまたはGoogle Playからアプリをインストールしてアカウントを作成。" },
      { step: "02", title: "物件を掲載", desc: "高品質の写真と完全な詳細情報で少なくとも1件の物件を掲載。" },
      { step: "03", title: "レビューを集める", desc: "クライアントに正直なレビューを残してもらいましょう。5つ星が多いほど高スコア。" },
      { step: "04", title: "賞品を獲得", desc: "レビュースコアと物件品質で上位のエージェントが賞金を獲得！" },
    ],
    leaderboard_title: "現在のリーダーボード", register_title: "コンテストに参加", register_sub: "今すぐ登録して、コンテスト開始の通知を受け取りましょう。",
    register_btn: "今すぐ登録 →", register_no_spam: "スパムはしません。いつでも登録解除できます。", email_placeholder: "メールアドレスを入力",
    success_title: "登録完了！", success_sub: "メールに最新情報をお送りします。頑張ってください！",
  },
  rating: { accuracy: "正確性", communication: "コミュニケーション", cleanliness: "清潔さ" },
};

const ko: Translations = {
  nav: { about: "회사소개", contest: "콘테스트", reviews: "리뷰", help: "도움말" },
  home: {
    hero_title: "부동산 앱",
    hero_sub: "에이전트 – 집주인 – 은행 – 구매자",
    install_appstore: "App Store",
    install_on: "FIVIVA 설치하기",
    install_google: "Google Play",
    reviews_title: "실제 고객의 진짜 리뷰",
    reviews_count: "리뷰 23개",
    see_all: "모든 리뷰 보기 →",
    features_title: "하나의 앱에서 필요한 모든 것",
    features: [
      { title: "매물 등록", desc: "사진, 가격, 상세 정보와 함께 몇 분 안에 매물 등록." },
      { title: "스마트 검색", desc: "가격, 위치, 유형 등 다양한 조건으로 필터링." },
      { title: "인스턴트 메시지", desc: "에이전트, 집주인, 구매자와 실시간으로 채팅." },
      { title: "시장 인사이트", desc: "실시간 데이터, 트렌드, 가치 평가에 접근." },
    ],
    cta_title: "꿈의 집을 찾을 준비가 되셨나요?",
    cta_sub: "매일 수천 명의 에이전트, 집주인, 구매자가 FIVIVA를 신뢰합니다.",
    download_appstore: "App Store",
    download_google: "Google Play",
    download_on: "다운로드",
    get_on: "받기",
  },
  reviews: { page_title: "리뷰", section_title: "실제 고객의 진짜 리뷰", count: "리뷰 23개", view_more: "더 보기", prev: "‹", next: "›" },
  help: { hero_title: "안녕하세요, 어떻게 도와드릴까요?", search_placeholder: "검색...", no_results: "검색 결과 없음:", still_need: "아직 도움이 필요하신가요?", still_sub: "지원팀이 24/7 대기하고 있습니다.", email_btn: "이메일 지원", chat_btn: "라이브 채팅" },
  about: {
    page_title: "FIVIVA 소개", hero_sub: "동남아시아에서 가장 스마트한 부동산 플랫폼을 구축하고 있습니다.",
    story_title: "우리의 이야기",
    story: ["FIVIVA는 2018년 '집을 찾거나 파는 것이 복잡해서는 안 된다'는 믿음으로 설립되었습니다.", "에이전트가 아름답게 매물을 올리고 구매자가 스마트하게 발견할 수 있는 플랫폼을 만들었습니다.", "오늘날 FIVIVA는 모바일 우선 방식으로 지역 전역의 수천 명의 사용자에게 서비스를 제공합니다."],
    values_title: "우리의 가치",
    values: [
      { icon: "🤝", title: "신뢰", desc: "모든 매물이 검증됩니다. 모든 사용자는 진짜입니다." },
      { icon: "🌏", title: "접근성", desc: "부동산은 모든 사람에게 열려 있어야 합니다." },
      { icon: "⚡", title: "속도", desc: "실시간 매물로 더 빠르게 거래를 성사시키세요." },
      { icon: "🔒", title: "보안", desc: "데이터와 거래는 항상 종단 간 보호됩니다." },
    ],
    team_title: "팀 소개",
    stats: [{ value: "50K+", label: "활성 매물" }, { value: "120K+", label: "등록 사용자" }, { value: "15+", label: "국가" }, { value: "4.9★", label: "앱 평점" }],
    cta_title: "FIVIVA 커뮤니티에 참여하세요", cta_sub: "앱을 다운로드하고 오늘 부동산 여정을 시작하세요.",
  },
  contest: {
    badge: "🏆 FIVIVA 에이전트 콘테스트 2024", hero_title: "경쟁하세요. 이기세요.\n비즈니스를 성장시키세요.", hero_sub: "FIVIVA 올해의 에이전트 콘테스트에 참가하여 $8,000 이상의 상금을 노리세요.", deadline: "마감일: 2024년 12월 31일",
    prize_title: "상금 풀", prize_total: "총 가치:", steps_title: "참가 방법",
    steps: [
      { step: "01", title: "FIVIVA 다운로드", desc: "App Store 또는 Google Play에서 앱을 설치하고 계정 생성." },
      { step: "02", title: "매물 등록", desc: "고품질 사진과 완전한 정보로 매물 최소 1개 등록." },
      { step: "03", title: "리뷰 받기", desc: "고객을 초대하여 정직한 리뷰를 남겨달라고 하세요. 별 5개가 많을수록 점수 높음." },
      { step: "04", title: "상품 획득", desc: "리뷰 점수와 매물 품질 상위 에이전트가 상금 획득!" },
    ],
    leaderboard_title: "현재 리더보드", register_title: "콘테스트 참가 신청", register_sub: "지금 등록하여 콘테스트 시작 알림을 받으세요.",
    register_btn: "지금 신청 →", register_no_spam: "스팸 없음. 언제든지 구독 취소 가능.", email_placeholder: "이메일 주소 입력",
    success_title: "등록 완료!", success_sub: "이메일로 최신 정보를 보내드리겠습니다. 행운을 빕니다!",
  },
  rating: { accuracy: "정확성", communication: "소통", cleanliness: "청결도" },
};

// Shorter translations for remaining languages — key fields only, rest falls back to en
function makeSimple(
  nav: Translations["nav"],
  heroTitle: string,
  heroSub: string,
  helpTitle: string,
  aboutTitle: string,
): Translations {
  const base = { ...en };
  return {
    ...base,
    nav,
    home: { ...base.home, hero_title: heroTitle, hero_sub: heroSub },
    help: { ...base.help, hero_title: helpTitle },
    about: { ...base.about, page_title: aboutTitle },
  };
}

const fr = makeSimple(
  { about: "À PROPOS", contest: "CONCOURS", reviews: "AVIS", help: "AIDE" },
  "Applications Immobilières",
  "Agents – Propriétaires – Banquiers – Acheteurs",
  "Bonjour, comment pouvons-nous vous aider ?",
  "À propos de FIVIVA",
);

const es = makeSimple(
  { about: "ACERCA DE", contest: "CONCURSO", reviews: "RESEÑAS", help: "AYUDA" },
  "Aplicaciones Inmobiliarias",
  "Agentes – Propietarios – Banqueros – Compradores",
  "Hola, ¿en qué podemos ayudarle?",
  "Sobre FIVIVA",
);

const de = makeSimple(
  { about: "ÜBER UNS", contest: "WETTBEWERB", reviews: "BEWERTUNGEN", help: "HILFE" },
  "Immobilien-Apps",
  "Makler – Eigentümer – Banker – Käufer",
  "Hallo, wie können wir Ihnen helfen?",
  "Über FIVIVA",
);

const it = makeSimple(
  { about: "CHI SIAMO", contest: "CONCORSO", reviews: "RECENSIONI", help: "AIUTO" },
  "App Immobiliari",
  "Agenti – Proprietari – Banchieri – Acquirenti",
  "Ciao, come possiamo aiutarti?",
  "Informazioni su FIVIVA",
);

const pt = makeSimple(
  { about: "SOBRE", contest: "CONCURSO", reviews: "AVALIAÇÕES", help: "AJUDA" },
  "Aplicativos Imobiliários",
  "Agentes – Proprietários – Banqueiros – Compradores",
  "Olá, como podemos ajudar?",
  "Sobre a FIVIVA",
);

const ar: Translations = {
  ...makeSimple(
    { about: "معلومات عنا", contest: "مسابقة", reviews: "تقييمات", help: "مساعدة" },
    "تطبيقات العقارات",
    "الوكلاء – الملاك – المصرفيون – المشترون",
    "مرحباً، كيف يمكننا مساعدتك؟",
    "عن FIVIVA",
  ),
};

const hi = makeSimple(
  { about: "हमारे बारे में", contest: "प्रतियोगिता", reviews: "समीक्षाएं", help: "सहायता" },
  "रियल एस्टेट ऐप्स",
  "एजेंट – मालिक – बैंकर – खरीदार",
  "नमस्ते, हम आपकी कैसे मदद कर सकते हैं?",
  "FIVIVA के बारे में",
);

const th = makeSimple(
  { about: "เกี่ยวกับเรา", contest: "การแข่งขัน", reviews: "รีวิว", help: "ความช่วยเหลือ" },
  "แอปพลิเคชันอสังหาริมทรัพย์",
  "ตัวแทน – เจ้าของ – ธนาคาร – ผู้ซื้อ",
  "สวัสดี เราสามารถช่วยอะไรได้บ้าง?",
  "เกี่ยวกับ FIVIVA",
);

const id = makeSimple(
  { about: "TENTANG", contest: "KONTES", reviews: "ULASAN", help: "BANTUAN" },
  "Aplikasi Properti",
  "Agen – Pemilik – Bankir – Pembeli",
  "Halo, bagaimana kami bisa membantu?",
  "Tentang FIVIVA",
);

export const TRANSLATIONS: Record<LangCode, Translations> = {
  en, vi, zh, ja, ko, fr, es, de, it, pt, ar, hi, th, id,
};
