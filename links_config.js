// Конфігураційний маніфест посилань та плейлистів TALOS VISION LABS (v9.7)
// Підказка: коли ви додаєте нові відео у плейлист на YouTube, просто вкажіть їхню кількість у полі count60 або count144 (напр. 1, 2, 3...)!
// Поки у плейлисті на YouTube 0 відео (count: 0), сайт миттєво показує красиву заставку замість чорного екрана помилки YouTube.

window.TALOS_CONFIG = {
    telemetryCloudUrl: "https://script.google.com/macros/s/AKfycby1UZzL6Moqni1CeblwM8AXEcI2zT5uRAZYQfC7hRrovuZB_ZVatJRiqfXvvxrklvw11g/exec",
    buyLiteUrl: "",
    buyProUrl: "",
    donateApolloUrl: "",
    youtubeChannelUrl: "https://www.youtube.com/@TalosVisionLabs",
    youtubeChannelId: "UC7bTO_ib_cJfwPclakje96g",
    youtubeSubscribeUrl: "https://www.youtube.com/@TalosVisionLabs?sub_confirmation=1",
    priceLiteUah: "415 ₴",
    priceProUah: "830 ₴",
    supportEmail: "talosvision.labs@gmail.com",

    showcaseCategories: [
        {
            catTitleUk: "Голлівудське Кіно та Блокбастери",
            catTitleEn: "Hollywood Cinema & Blockbusters",
            catSub60Uk: "Плавність панорам камери • 24 -> 60 FPS",
            catSub60En: "Camera Panning Smoothness • 24 -> 60 FPS",
            catSub144Uk: "Кінематограф Ultra HFR • 24 -> 144 FPS",
            catSub144En: "Ultra HFR Cinema • 24 -> 144 FPS",
            playlist60Url: "https://www.youtube.com/playlist?list=PLdwjG5KCQdYo",
            playlist144Url: "https://www.youtube.com/playlist?list=PLOFNgz_lOGUs",
            count60: 1,   // Єдине реальне відео в плейлисті Голлівудське Кіно (PLdwjG5KCQdYo)!
            count144: 0,  // Поставте 1, коли додасте відео у список PRO на YouTube
            fallbackMp4_60: "24x60FPS1.mp4",
            fallbackMp4_144: "24x144FPS1.mp4"
        },
        {
            catTitleUk: "Японське Аніме та 2D-Анімація",
            catTitleEn: "Japanese Anime & 2D Animation",
            catSub60Uk: "Чіткі лінії без ореолів • 15/24 -> 60 FPS",
            catSub60En: "Crisp Lines Without Blur • 15/24 -> 60 FPS",
            catSub144Uk: "Ідеальна динаміка боїв • 24 -> 144 FPS",
            catSub144En: "Flawless Combat Dynamics • 24 -> 144 FPS",
            playlist60Url: "https://www.youtube.com/playlist?list=PLQeujFXyczRg",
            playlist144Url: "https://www.youtube.com/playlist?list=PLXD_9mQuwDfs",
            count60: 0,
            count144: 0,
            fallbackMp4_60: "",
            fallbackMp4_144: ""
        },
        {
            catTitleUk: "Динамічний Екшн та Спецефекти",
            catTitleEn: "Dynamic Action & VFX",
            catSub60Uk: "Перегони, вибухи та Sci-Fi • 60 FPS",
            catSub60En: "Races, Explosions & Sci-Fi • 60 FPS",
            catSub144Uk: "Максимальний потік RIFE v4.6 • 144 FPS",
            catSub144En: "Maximum RIFE v4.6 Flow • 144 FPS",
            playlist60Url: "https://www.youtube.com/playlist?list=PLePMFvAfoIJ8",
            playlist144Url: "https://www.youtube.com/playlist?list=PLf29wab3JWjA",
            count60: 0,
            count144: 0,
            fallbackMp4_60: "",
            fallbackMp4_144: ""
        },
        {
            catTitleUk: "Природа, Космос та 4K HDR",
            catTitleEn: "Nature, Space & 4K HDR",
            catSub60Uk: "Деталізація 10-bit без втрат • 60 FPS",
            catSub60En: "Lossless 10-bit Detail • 60 FPS",
            catSub144Uk: "Еталонна плавність панорам • 144 FPS",
            catSub144En: "Reference Panorama Smoothness • 144 FPS",
            playlist60Url: "https://www.youtube.com/playlist?list=PLAGwSui8dzNw",
            playlist144Url: "https://www.youtube.com/playlist?list=PLTSdNLohPt-4",
            count60: 0,
            count144: 0,
            fallbackMp4_60: "",
            fallbackMp4_144: ""
        }
    ]
};
