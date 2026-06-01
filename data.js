/**
 * ==========================================
 * 1. DATA LAYER (طبقة البيانات)
 * استخدام Map لتسريع البحث (O(1) Lookup)
 * ==========================================
 */

const FileVaultMap = new Map([
  ['F1', { name: 'Taps Part 1', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQB0qdk3vnJiQpZhWiPTbpEaAZo1yC2eLg_qCffdXALYGDk?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.2 MB', difficultyLevel: 'Beginner', tags: ['interface', 'basics', 'ribbon'] }],
  ['F2', { name: 'Taps Part 2', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQCXteAQFYtZSp8adjzNOA8UARV4JNgWt-mcmfSqmtcesm8?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.5 MB', difficultyLevel: 'Beginner', tags: ['formulas', 'sum', 'average'] }],
  ['F3', { name: 'كل معادلات الاكسل شرح بالعربي', url: 'https://1drv.ms/b/c/a1a27fad04d192e9/IQAjEFtIAbcwQKfQsQTUI3KDAZy4DqJ5ZRPm3wCS7H8gNl4?download=1', type: 'PDF Document', category: 'PDF', fileSize: '5.4 MB', difficultyLevel: 'Beginner', tags: ['formulas', 'guide', 'arabic'] }],
  ['F4', { name: 'Editing Multiple Sheets', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQCe_r8UCHT3T5dZDE7iZbj7ASspBimLh6kukcelzqYRNaY?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '800 KB', difficultyLevel: 'Intermediate', tags: ['sheets', 'editing', 'shortcuts'] }],
  ['F5', { name: 'جميع اختصارات الاكسل', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQA7jo5VIwEHQKif0xKZT8cJAXJ61kD8GP5bKOSkKpmS7dA?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.1 MB', difficultyLevel: 'Beginner', tags: ['shortcuts', 'productivity'] }],
  ['F6', { name: 'Charts & Data Visualization', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQDDlpkxdaHNQr3qnuER0yg-AWPrhU4GpNkcirr1l4Mg8JM?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '3.2 MB', difficultyLevel: 'Intermediate', tags: ['charts', 'visualization'] }],
  ['F7', { name: 'Copy & Paste Special', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQB8i-J1kgSASJ_kXjUSeeUYAUdQ7HXJekEpaH4f-YRxZ-U?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '900 KB', difficultyLevel: 'Beginner', tags: ['paste special', 'formatting'] }],
  ['F8', { name: 'Assignment 2 (الواجب الأول)', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQAv5oSuJ24MTbdJsQZLhpjpAalv2wc5Yc-3-lQOKBICfmw?download=1', type: 'Excel Workbook', category: 'Assignments', fileSize: '500 KB', difficultyLevel: 'Intermediate', tags: ['assignment', 'practice'] }],
  ['F9', { name: '08-Dynamic Design Conditional', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQAt009GwcxMS6Fy5yYcKr2YAYtWjlqVH2209NltgxX3c88?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '2.1 MB', difficultyLevel: 'Intermediate', tags: ['conditional formatting', 'design'] }],
  ['F10', { name: '10-Subtotal & SumProduct', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQAcXPk6KUb_TIPGUc9VMmJlAebIeh-immuB32J2qXApYvs?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.8 MB', difficultyLevel: 'Advanced', tags: ['subtotal', 'sumproduct'] }],
  ['F11', { name: '11-Conditional Formatting Extras', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQBuGyejtcaETJX6q1CggYLhAV8yF3kXbQLoWKxZBFvLwqo?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.3 MB', difficultyLevel: 'Intermediate', tags: ['conditional formatting'] }],
  ['F12', { name: '12-On-Mastering Counts & More', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQCUA73oU3m5TbULoSHNn282AXg2khtNGi4yCoC-DKh13no?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.6 MB', difficultyLevel: 'Advanced', tags: ['count', 'statistics'] }],
  ['F13', { name: 'Session Exercise', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQCXq0RY3rhSQLB_0_lIhcJKAU8K_tlMbfsdcXYcbs8dMWo?download=1', type: 'Excel Workbook', category: 'Assignments', fileSize: '700 KB', difficultyLevel: 'Intermediate', tags: ['exercise', 'practice'] }],
  ['F14', { name: 'Name Manager', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQBWNL3hDXvDSo3ZWsv8N0xYAb5CXZOv9sLVSldBGIt0Dzw?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.0 MB', difficultyLevel: 'Intermediate', tags: ['name manager', 'formulas'] }],
  ['F15', { name: 'Data Validation', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQD8i3FCYg7zQaDiET4Y4f9dAS3-wY3ZfGRZutmbuReT8S4?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.4 MB', difficultyLevel: 'Intermediate', tags: ['data validation', 'rules'] }],
  ['F16', { name: 'Data Lookup Symphony (VLOOKUP)', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQANLuW7YOMDQLqBv-LgrwswARDyB4Kk8-AnhDWFyxn-tx0?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '2.5 MB', difficultyLevel: 'Advanced', tags: ['vlookup', 'search'] }],
  ['F17', { name: 'Print Perfection (الطباعة الاحترافية)', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQAFmROmkaRDS7Ti-RqMKTBVAYNgZwUOjXbqXPFUK4SqQH0?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.9 MB', difficultyLevel: 'Beginner', tags: ['printing', 'layout'] }],
  ['F18', { name: 'Excel Navigation (التنقل الذكي)', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQCsWVz8cAQAQ6jraEhAC5W3ARGwRDpzK1bf1I8ggPjQ2js?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.2 MB', difficultyLevel: 'Intermediate', tags: ['navigation', 'go to special'] }],
  ['F19', { name: 'Data Lookup Symphony (VLOOKUP المتقدم)', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQBii14BNy8TS7UOk05UdahLAV0nBcGAiuJ-VRkMKYGVP2U?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '3.0 MB', difficultyLevel: 'Advanced', tags: ['vlookup', 'advanced search'] }],
  ['F20', { name: 'Assignment 3 (الواجب الثالث)', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQCG7rrCA_ojRJ8KaAGz9xY0AVzn0klBEt4figKZ3FTfkh0?download=1', type: 'Excel Workbook', category: 'Assignments', fileSize: '600 KB', difficultyLevel: 'Advanced', tags: ['assignment', 'practice'] }],
  ['F21', { name: 'Using Filter (رحلة المصفوفات)', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQBWtYicqDGjTYk1E_eolA6jARzZZMMWm8rhlk9K5EXiaXc?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '2.8 MB', difficultyLevel: 'Advanced', tags: ['dynamic arrays', 'filter'] }],
  ['F22', { name: 'XLOOKUP (الملك المتوج)', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQD7OYzI-MDeSqXK7O0kw6XzARcLMv007Jwg7pGJasq8M30?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '2.2 MB', difficultyLevel: 'Advanced', tags: ['xlookup', 'modern arrays'] }],
  ['F23', { name: '20-Flash Fill', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQB9UN6ggTfbQ7YJ1_S7DrTwAUUd1knuMK3hJZvpH0I5R4k?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.5 MB', difficultyLevel: 'Intermediate', tags: ['flash fill', 'data cleaning'] }],
  ['F24', { name: 'If statement and IF combined', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQDdtuy7vk2aSJHJZ5U5sASTATCQW6Mn8xvkg_wG4a0OSBQ?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '2.4 MB', difficultyLevel: 'Advanced', tags: ['if statement', 'logic'] }],
  ['F25', { name: '22-Text formulas', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQBzhLqNBDQ3QJ_lOx7HD4ZbAc45Mq50w5wI_B8tsmQYQng?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.7 MB', difficultyLevel: 'Intermediate', tags: ['text formulas', 'manipulation'] }],
  ['F26', { name: 'Index Match Magic', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQClppGCEXrET4LQeX8po57YAYDwipzamtazNJQikYjZJXg?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '3.5 MB', difficultyLevel: 'Advanced', tags: ['index match', 'lookup'] }],
  ['F27', { name: '23-IF With And & OR & Not', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQDROO6WqKVIR5xWA_hRRDG2AdXYgdLmxK27lKSWJJMXY6E?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.4 MB', difficultyLevel: 'Advanced', tags: ['if', 'and', 'or', 'logic'] }],
  ['F28', { name: '24-Goal Seek', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQBW-75kiTzSTbY0-UbojrlkAZNG6fiDBaOMQs_JQIcHkL0?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.1 MB', difficultyLevel: 'Intermediate', tags: ['goal seek', 'what if analysis'] }],
  ['F29', { name: '25-Protect your Excel', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQDjVxpKe4bDSavMomTu00woARaIU1e6hlKTw9nil7sCa38?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '900 KB', difficultyLevel: 'Intermediate', tags: ['protection', 'security'] }],
  ['F30', { name: '26-Quick Analysis tool', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQCaaHd_G5szR5gpVf4uvGi4ASF5R_41oFy6kWdX8uFQjYw?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.2 MB', difficultyLevel: 'Beginner', tags: ['quick analysis', 'tools'] }],
  ['F31', { name: '27-Sumifs countifs', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQARbRzhTdZjTYbo_tkUhQ_0ASMCf3wihpVltptSw9EEJkM?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '2.0 MB', difficultyLevel: 'Advanced', tags: ['sumifs', 'countifs'] }],
  ['F32', { name: '28-Sumifs countifs assignment', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQARbRzhTdZjTYbo_tkUhQ_0ASMCf3wihpVltptSw9EEJkM?download=1', type: 'Excel Workbook', category: 'Assignments', fileSize: '600 KB', difficultyLevel: 'Advanced', tags: ['assignment', 'practice'] }],
  
  // ملفات وروابط المحاضرات 10 و 11
  ['F33', { name: '30-Pivot Table & Slicer', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQCz4fJNy1PCQ5yG7qYeLzfSAYAa6Zrl84mC949z5foYm4s?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '2.5 MB', difficultyLevel: 'Advanced', tags: ['pivot table', 'slicer', 'magic'] }],
  ['F34', { name: '31-Slicer in Tables', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQBd2oz_i-5WQKTqwKdZEqrpASBO4vcqMvKHLn4_Ner2c5Y?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '1.3 MB', difficultyLevel: 'Intermediate', tags: ['slicer', 'tables'] }],
  ['F35', { name: '32-Building A Dashboard', url: 'https://1drv.ms/x/c/a1a27fad04d192e9/IQCiKf8B69IjSqa9NcFL9ZhwAZfwzVFJxE1sFjHrvNRCZ7U?download=1', type: 'Excel Workbook', category: 'Excel', fileSize: '4.2 MB', difficultyLevel: 'Expert', tags: ['dashboard', 'interactive', 'design'] }],
  ['F36', { name: 'PBI_Layout_1280x720', url: 'https://1drv.ms/i/c/a1a27fad04d192e9/IQCV2CwIPpRkSoXFlUkB02OWAU-Potc47UOX4OQSnLnpjx0?download=1', type: 'Image File', category: 'Design', fileSize: '1.5 MB', difficultyLevel: 'All Levels', tags: ['layout', 'dashboard', 'template'] }],
  ['F37', { name: 'أيقونات احترافية (Flaticon)', url: 'https://www.flaticon.com/', type: 'External Link', category: 'Tools', fileSize: '-', difficultyLevel: 'All Levels', tags: ['icons', 'design'] }],
  ['F38', { name: 'تنسيق الألوان (Coolors)', url: 'https://coolors.co/', type: 'External Link', category: 'Tools', fileSize: '-', difficultyLevel: 'All Levels', tags: ['colors', 'palette', 'design'] }],
  ['F39', { name: 'خطوط جوجل (Google Fonts)', url: 'https://fonts.google.com/', type: 'External Link', category: 'Tools', fileSize: '-', difficultyLevel: 'All Levels', tags: ['fonts', 'typography'] }],
  ['F40', { name: 'صانع القوالب (LayoutMaker)', url: 'https://baselghanem.github.io/LayoutMaker/', type: 'External Link', category: 'Tools', fileSize: '-', difficultyLevel: 'All Levels', tags: ['layout', 'maker', 'tool'] }]
]);

const CourseDataMap = new Map([
  [1, { 
    title: 'مقدمة في Excel وشريط الأدوات (Ribbons)', 
    desc: 'التعرف على الواجهة، شريط الأدوات (Ribbons)، وأهمية Excel في عالم الأعمال.', 
    story: 'نبدأ رحلتنا بكسر الجدار الأول مع الإكسل. سنتعرف على الواجهة بالتفصيل، ونغوص في شريط الأدوات (Ribbons) لنشرح كل أيقونة وكيفية استخدامها للتحكم الكامل بأوراق العمل.', 
    objectives: ['التعرف على واجهة Excel وأدواته', 'فهم شريط الأدوات (Ribbons) ووظيفة كل أيقونة', 'التنقل بكفاءة داخل أوراق العمل'], 
    videoUrl: 'https://1drv.ms/v/c/a1a27fad04d192e9/IQQnivPtSWYAT6f2cV68amFaAXEZJ-JM-FzbbAHo4LV_wcE', 
    _filesCodes: ['F1'],
    duration: 45, difficultyLevel: 'Beginner', progressWeight: 5, prerequisites: [],
    quiz: { id: 'q1', questions: 3 }
  }],
  [2, { 
    title: 'الصيغ والدوال الأساسية', 
    desc: 'SUM، AVERAGE، COUNT وكيفية توظيفها في الحياة العملية.', 
    story: 'في هذه المحاضرة سننتقل من مجرد إدخال البيانات إلى جعل Excel يحسب نيابة عنك. سنتعلم أهم الدوال الأساسية التي لا غنى عنها في أي بيئة عمل.', 
    objectives: ['فهم الهيكل الصحيح لكتابة الصيغ', 'تطبيق دوال الجمع والمتوسط (SUM, AVERAGE)', 'استخدام دوال العد (COUNT) وتجنب الأخطاء'], 
    videoUrl: '', 
    _filesCodes: ['F2', 'F3'],
    duration: 60, difficultyLevel: 'Beginner', progressWeight: 10, prerequisites: [1],
    quiz: { id: 'q2', questions: 5 }
  }],
  [3, { 
    title: 'مهارات توفير الوقت واللصق الخاص', 
    desc: 'تعديل الشيتات المتعددة، اختصارات هامة، اللصق الخاص (Paste Special) ومقدمة للرسوم البيانية.', 
    story: 'محاضرة دسمة جداً! سنتعلم خدعاً توفر الكثير من الوقت مثل التعديل على عدة أوراق عمل في نفس اللحظة (Multiple Sheets)، وأسرار اللصق الخاص، بالإضافة إلى مقدمة في الرسوم البيانية وأهم اختصارات الكيبورد.', 
    objectives: ['التعديل على أوراق عمل متعددة دفعة واحدة (Ctrl + Select)', 'استخدام اللصق الخاص (Paste Special) باحترافية', 'إنشاء الرسوم البيانية (Charts) واستخدام اختصارات الإكسل'], 
    videoUrl: 'https://1drv.ms/v/c/a1a27fad04d192e9/IQRo2LpEw6SgQ5cy-iPyhJhIAWsN2YTN79rxvR_KRfzoSDc', 
    _filesCodes: ['F4', 'F5', 'F6', 'F7', 'F8'],
    duration: 75, difficultyLevel: 'Intermediate', progressWeight: 10, prerequisites: [2],
    quiz: { id: 'q3', questions: 4 }
  }],
  [4, { 
    title: 'التنسيق الشرطي المتقدم والدوال الإحصائية', 
    desc: 'احتراف التنسيق الشرطي (Conditional Formatting) ودوال العد والمجاميع المتقدمة.', 
    story: 'نبدأ برفع مستوى الاحتراف. سنتعمق في التنسيق الشرطي الديناميكي لنجعل التقارير تتفاعل مع البيانات تلقائياً. وسنستكشف قوة دوال العد المتقدمة (Counts) وأدوات المجاميع (Subtotal & SumProduct) التي تفصل المحترف عن المبتدئ.', 
    objectives: ['إتقان التنسيق الشرطي الديناميكي (Dynamic Design)', 'استخدام دوال Subtotal و SumProduct باحتراف', 'احتراف دوال العد المتقدمة (Mastering Counts)'], 
    videoUrl: 'https://1drv.ms/v/c/a1a27fad04d192e9/IQRO-5Vwp87MQZl8bklQ2UYHAQoqzY1n4JI3XGkiX_S0SII', 
    _filesCodes: ['F9', 'F10', 'F11', 'F12', 'F13'],
    duration: 80, difficultyLevel: 'Advanced', progressWeight: 10, prerequisites: [2, 3],
    quiz: { id: 'q4', questions: 5 }
  }],
  [5, { 
    title: 'سيمفونية البحث والتحكم بالبيانات', 
    desc: 'تسهيل المعادلات بـ Name Manager، التحكم بالمدخلات بـ Data Validation، واحتراف دالة VLOOKUP الأسطورية.', 
    story: 'هل أنت مستعد لنقلة نوعية؟ في هذه المحاضرة الحماسية سنكتشف كيف نجعل حياتنا والمعادلات المعقدة أسهل بكثير باستخدام الـ Name Manager. سنتعلم أيضاً كيف نفرض سيطرتنا على مدخلات المستخدمين عبر Data Validation (ونضيف لمستنا الخاصة برسائل خطأ مضحكة!). ومسك الختام سيكون مع "سيمفونية البحث".. نعم، سنتعلم معاً أعظم دالة في الإكسل: VLOOKUP، لنجعل البيانات تبحث عن نفسها بنفسها!', 
    objectives: ['تسهيل قراءة وكتابة المعادلات المعقدة باستخدام Name Manager', 'تقييد إدخال البيانات وإنشاء رسائل خطأ مخصصة عبر Data Validation', 'احتراف دالة VLOOKUP لربط البيانات والبحث عنها بلمح البصر'], 
    videoUrl: 'https://1drv.ms/v/c/a1a27fad04d192e9/IQRyTqZGsYWpQ4BFaLNCB5sJARxjBruaQnd24lJXmBjV6Eg', 
    _filesCodes: ['F14', 'F15', 'F16'],
    duration: 90, difficultyLevel: 'Advanced', progressWeight: 15, prerequisites: [4],
    quiz: { id: 'q5', questions: 6 }
  }],
  [6, { 
    title: 'خفايا الطباعة، التنقل السحري، والاحتراف المطلق لـ VLOOKUP', 
    desc: 'اتقان الطباعة الاحترافية، التنقل السريع باستخدام Go To Special، وخفايا البحث المتقدم.', 
    story: 'استعد لمحاضرة مليئة بالخدع السحرية! هل تعاني من طباعة الجداول وتنسيقها؟ سنقضي على هذه المشكلة تماماً ونجعلك تطبع أي ملف باحترافية تامة مع ضبط الرأس والتذييل. سنتعلم أيضاً كيف "نطير" داخل الإكسل ونصل لأي معلومة مخفية بلمح البصر باستخدام "Go To Special". ولأن VLOOKUP هي العشق، سنعود إليها لنعزف معاً ألحاناً متقدمة ونكشف أسرارها العميقة!', 
    objectives: ['احتراف طباعة الملفات وتنسيق الرأس والتذييل (Header & Footer)', 'التنقل السريع والذكي واستكشاف خبايا أداة Go To Special', 'الغوص في الحالات المتقدمة والاحترافية لدالة VLOOKUP'], 
    videoUrl: 'https://1drv.ms/v/c/a1a27fad04d192e9/IQRi-N0K7oBRQKvK1gQCuB14AdogNfQ2FV5znFGsJCpaazM', 
    _filesCodes: ['F17', 'F18', 'F19', 'F20'],
    duration: 70, difficultyLevel: 'Intermediate', progressWeight: 10, prerequisites: [5],
    quiz: { id: 'q6', questions: 4 }
  }],
  [7, { 
    title: 'المصفوفات الديناميكية ودالة XLOOKUP الخارقة', 
    desc: 'رحلة دمج معادلات FILTER و SORT و UNIQUE للوصول للجيل الجديد من البحث بـ XLOOKUP.', 
    story: 'استعدوا للصدمة الإيجابية! في هذه المحاضرة سنعيش رحلة جنونية مع المصفوفات الديناميكية؛ سندمج دوال مثل FILTER و UNIQUE و SORT و VSTACK معاً لتشكيل خلطة سحرية تستخرج أي نتيجة مهما كانت معقدة. وبعدها، سنودع الطرق التقليدية ونستقبل الملك المتوج "XLOOKUP"، لنفصص كل جزء فيه ونكتشف الفروقات الجوهرية التي تجعله البديل الأقوى والأكثر مرونة مقارنة بـ VLOOKUP. هذه المحاضرة ستغير طريقة عملك للأبد!', 
    objectives: ['استخراج البيانات وتصفيتها باحترافية باستخدام دالة FILTER', 'دمج المصفوفات الديناميكية (UNIQUE, SORT, CHOOSECOLS, VSTACK) في معادلة واحدة جبارة', 'فهم الفروقات الجوهرية واحتراف جميع خصائص دالة XLOOKUP السحرية'], 
    videoUrl: 'https://1drv.ms/v/c/a1a27fad04d192e9/IQS8aDI7l06gQJbUzXiJMZtVAUheJApM9YYE-5aRmK9vsoA', 
    _filesCodes: ['F21', 'F22'],
    duration: 85, difficultyLevel: 'Advanced', progressWeight: 15, prerequisites: [6],
    quiz: { id: 'q7', questions: 5 }
  }],
  [8, { 
    title: 'سحر Flash Fill، الشروط المتداخلة، ودوال النصوص و INDEX MATCH', 
    desc: 'تسريع العمل بـ Flash Fill، إتقان دالة IF المتداخلة، التلاعب بالنصوص، والسر الأعظم INDEX و MATCH.', 
    story: 'جاهزون لجرعة مكثفة من أسرار المحترفين؟ سنبدأ بسحر خاصية Flash Fill التي ستنجز ساعات من العمل في ثانية واحدة وبطريقة مرتبة جداً! ثم سنبني منطقاً حديدياً بتداخل معادلات IF المتعددة لنعالج أعقد الحالات العملية. ولأن البيانات غالباً ما تأتي فوضوية، سنسيطر عليها تماماً باستخدام ترسانة من دوال النصوص القوية (مثل TEXTSPLIT و TRIM وغيرها). وأخيراً، سنكشف عن السلاح السري للمحللين المتقدمين: دمج معادلة INDEX مع MATCH للبحث بمرونة لا حدود لها!', 
    objectives: ['تسريع المهام الروتينية وتنظيف البيانات باستخدام الذكاء المدمج لخاصية Flash Fill', 'بناء شروط منطقية معقدة ومتداخلة باستخدام IF Statement لسيناريوهات العمل المختلفة', 'معالجة وتنظيف النصوص المعقدة باستخدام ترسانة الدوال (TRUNC, TRIM, TEXTSPLIT, etc.)', 'احتراف البحث المتقدم والبديل الأقوى لـ VLOOKUP باستخدام دمج INDEX و MATCH'], 
    videoUrl: 'https://1drv.ms/v/c/a1a27fad04d192e9/IQQJTmLRfnJBSY0Sp9WX8A4YAe8u0_S9RA301a28r9177TM', 
    _filesCodes: ['F23', 'F24', 'F25', 'F26'],
    duration: 100, difficultyLevel: 'Advanced', progressWeight: 15, prerequisites: [7],
    quiz: { id: 'q8', questions: 6 }
  }],
  [9, { 
    title: 'عمالقة الشروط، التحليل الذكي، وحماية حصنك الإكسلاوي!', 
    desc: 'أسرار الشروط المتداخلة مع AND/OR/NOT، استهداف الأرقام بـ Goal Seek، تأمين الملفات، واحتراف SUMIFS و COUNTIFS.', 
    story: 'هل أنتم جاهزون لرفع مستوى التحدي؟ في هذه المحاضرة سنتلاعب بالشروط المعقدة بدمج دالة IF مع (AND, OR, NOT) لنحاكي أعقد سيناريوهات الواقع! وسنكتشف سحر "Goal Seek" لنجعل الإكسل يجد الرقم الذي نحلم به. لن ننسى حماية تعبنا، سنتعلم 3 مستويات لتشفير وحماية ملفاتنا لتصبح قلعة حصينة. وسنسلط الضوء على الأداة المظلومة "Quick Analysis" لسرعة خيالية في التحليل. وفي الختام، سنتوج مهاراتنا بعمالقة الإحصاء SUMIFS و COUNTIFS بأمثلة ذكية وتدريجية!', 
    objectives: ['دمج الشروط المنطقية المتقدمة (IF مع AND, OR, NOT)', 'تحقيق الأهداف الرقمية بضغطة زر عبر Goal Seek وتطبيق 3 مستويات من الحماية', 'استغلال أداة التحليل السريع واحتراف دوال التلخيص المشروطة SUMIFS و COUNTIFS'], 
    videoUrl: 'https://1drv.ms/v/c/a1a27fad04d192e9/IQR1-TQBUP3bS5y1vI4r61DdAez-pz9Ix4A-XcpKXuaZsw8?width=1920&height=1080', 
    _filesCodes: ['F27', 'F28', 'F29', 'F30', 'F31', 'F32'],
    duration: 120, difficultyLevel: 'Advanced', progressWeight: 15, prerequisites: [8],
    quiz: null
  }],
  [10, { 
    title: 'السحر المطلق: Pivot Table & Slicers', 
    desc: 'وداعاً للمعادلات المعقدة! اكتشف كل تفصيلة صغيرة وكبيرة في عالم الجداول المحورية.', 
    story: 'هنا تبدأ العظمة! في هذا الملف سنغوص في أعماق الـ Pivot Table لنكتشف الأشياء المجنونة التي يمكننا فعلها به. وداعاً لكتابة المعادلات المعقدة، فمن الآن وصاعداً، كل التلخيصات والتقارير ستنتهي بـ "كبسة زر" واحدة وبدقة متناهية. استعدوا لتغيير قواعد اللعبة في تحليل البيانات!', 
    objectives: ['إتقان إنشاء الجداول المحورية (Pivot Tables) وفهم كل خصائصها الدقيقة والمخفية', 'تلخيص كميات هائلة من البيانات بضغطة زر ودون الحاجة لأي معادلات', 'استخدام شرائح البيانات (Slicers) لفلترة التقارير بأسلوب ديناميكي واحترافي'], 
    videoUrl: 'https://1drv.ms/v/c/a1a27fad04d192e9/IQQbv6Az5mcZRYQyQ1iKeCUeAVkIF1-8z77rvc4EWA269AA?width=1920&height=1080', 
    _filesCodes: ['F33'],
    duration: 90, difficultyLevel: 'Advanced', progressWeight: 10, prerequisites: [9],
    quiz: null
  }],
  [11, { 
    title: 'مشروع الأحلام: بناء Dashboard احترافي من الصفر', 
    desc: 'التطبيق الشامل لكل ما تعلمناه! ربط الـ Slicers وتصميم لوحة تحكم تفاعلية متكاملة.', 
    story: 'لقد وصلنا إلى المحطة الأروع والأهم في مسيرتنا! مثلما استخدمنا السلايسر في الـ Pivot، سنتعلم هنا كيف نربطه مع الجداول العادية (Tables). والأهم من ذلك، سنبدأ بتنفيذ مشروعنا النهائي المنتظر: بناء داشبورد (Dashboard) احترافي، تفاعلي، ومذهل بصرياً من الصفر وحتى الإخراج النهائي. استخدموا الروابط المساعدة للون والخط لنصنع معاً تحفة فنية تلخص خبرتكم الكاملة!', 
    objectives: ['احتراف استخدام السلايسر (Slicers) مع الجداول العادية لفلترة البيانات فوراً', 'التخطيط الهندسي والتصميم البصري لبناء لوحة تحكم متكاملة باستخدام أفضل المواقع المساعدة', 'دمج جميع المهارات السابقة لإخراج تقرير نهائي (Dashboard) يبهر الإدارة'], 
    videoUrl: 'https://1drv.ms/v/c/a1a27fad04d192e9/IQTs1LW4FswmQrT8wQSXLflIAVhxb_c9FqQ4_e8C01xuXEY?width=1920&height=1080', 
    _filesCodes: ['F34', 'F35', 'F36', 'F37', 'F38', 'F39', 'F40'],
    duration: 180, difficultyLevel: 'Expert', progressWeight: 15, prerequisites: [10],
    quiz: null
  }]
]);

/**
 * ==========================================
 * 2. ANALYTICS SERVICE (نظام التتبع والإحصائيات)
 * ==========================================
 */
class AnalyticsService {
  static trackingData = { lessonViews: {}, fileDownloads: {} };

  static recordLessonView(lessonId) {
    this.trackingData.lessonViews[lessonId] = (this.trackingData.lessonViews[lessonId] || 0) + 1;
  }

  static recordFileDownload(fileCode) {
    this.trackingData.fileDownloads[fileCode] = (this.trackingData.fileDownloads[fileCode] || 0) + 1;
  }

  static getFileDownloads(fileCode) {
    return this.trackingData.fileDownloads[fileCode] || 0;
  }

  static getMostViewedLessons() {
    return Object.entries(this.trackingData.lessonViews)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([id]) => parseInt(id));
  }
}

/**
 * ==========================================
 * 3. FILE SERVICE (نظام إدارة الملفات)
 * ==========================================
 */
class FileService {
  // Caching layer بسيط لتجنب إعادة حساب الفلاتر
  static searchCache = new Map();

  static getDetailedFile(fileCode) {
    const file = FileVaultMap.get(fileCode);
    if (!file) return null;
    
    return {
      ...file,
      code: fileCode,
      allowPreview: file.type.includes('PDF') || file.type.includes('Link'), // الروابط الخارجية والـ PDF يمكن فتحها مباشرة
      downloadCount: AnalyticsService.getFileDownloads(fileCode)
    };
  }

  static searchByName(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    if (this.searchCache.has(lowerKeyword)) return this.searchCache.get(lowerKeyword);

    const results = [];
    for (let [code, file] of FileVaultMap.entries()) {
      if (file.name.toLowerCase().includes(lowerKeyword) || file.tags.some(t => t.includes(lowerKeyword))) {
        results.push(this.getDetailedFile(code));
      }
    }
    
    this.searchCache.set(lowerKeyword, results);
    return results;
  }

  static filterByCategory(category) {
    const results = [];
    for (let [code, file] of FileVaultMap.entries()) {
      if (file.category === category) results.push(this.getDetailedFile(code));
    }
    return results;
  }
}

/**
 * ==========================================
 * 4. LEARNING ENGINE (محرك التعلم الذكي)
 * ==========================================
 */
class LearningEngine {
  static getNextLesson(currentLessonId) {
    const nextId = currentLessonId + 1;
    return CourseDataMap.has(nextId) ? nextId : null;
  }

  static getRecommendedLessons(completedLessonIds) {
    const recommended = [];
    for (let [id, lesson] of CourseDataMap.entries()) {
      if (!completedLessonIds.includes(id)) {
        // التحقق من المتطلبات السابقة
        const meetsPrerequisites = lesson.prerequisites.every(prereq => completedLessonIds.includes(prereq));
        if (meetsPrerequisites) {
          recommended.push(id);
        }
      }
    }
    return recommended;
  }

  static calculateCourseProgress(completedLessonIds) {
    let totalProgress = 0;
    completedLessonIds.forEach(id => {
      const lesson = CourseDataMap.get(id);
      if (lesson) totalProgress += lesson.progressWeight;
    });
    return Math.min(totalProgress, 100); // لا يتجاوز 100%
  }
}

/**
 * ==========================================
 * 5. UTILITY LAYER (تجربة المستخدم UX/UI)
 * ==========================================
 */
class UserExperienceLogic {
  constructor(userId) {
    this.userId = userId;
    this.userData = {
      completedLessons: [],
      bookmarkedLessons: [],
      recentlyViewed: []
    };
  }

  markAsCompleted(lessonId) {
    if (!this.userData.completedLessons.includes(lessonId)) {
      this.userData.completedLessons.push(lessonId);
    }
    return LearningEngine.calculateCourseProgress(this.userData.completedLessons);
  }

  bookmarkLesson(lessonId) {
    const index = this.userData.bookmarkedLessons.indexOf(lessonId);
    if (index === -1) {
      this.userData.bookmarkedLessons.push(lessonId);
    } else {
      this.userData.bookmarkedLessons.splice(index, 1); // Unbookmark
    }
  }

  viewLesson(lessonId) {
    AnalyticsService.recordLessonView(lessonId);
    this.userData.recentlyViewed = [
      lessonId,
      ...this.userData.recentlyViewed.filter(id => id !== lessonId)
    ].slice(0, 5); // الاحتفاظ بآخر 5 فقط
  }
}

/**
 * ==========================================
 * 6. SYSTEM BOOTSTRAP (ربط البيانات المعمارية)
 * ==========================================
 */
const CourseService = {
  getLesson(lessonId) {
    const lesson = CourseDataMap.get(lessonId);
    if (!lesson) return null;

    // حقن الملفات التفصيلية ديناميكياً بدلاً من مجرد الأكواد
    const filesDetailed = lesson._filesCodes.map(code => FileService.getDetailedFile(code));

    return {
      ...lesson,
      id: lessonId,
      files: filesDetailed
    };
  },

  getAllLessons() {
    return Array.from(CourseDataMap.keys()).map(id => this.getLesson(id));
  }
};
